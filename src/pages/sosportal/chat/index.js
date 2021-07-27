import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "react-chat-elements/dist/main.css";
import { Input, MessageList, Button, ChatList } from "react-chat-elements";
import firebase from "../../../config";
import "firebase/auth";
import Components from "../../components";
import { defaultPhoto } from "../../../default";
const database = firebase.database();

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      history: [],
      cuid: props.match.params.cuid,
      content: sessionStorage.getItem(props.match.params.cuid) || ""
    };
    sessionStorage.clear();
    this.count = 0;
  }
  getUser = async (user) => {
    await firebase
      .firestore()
      .collection("users")
      .doc(this.state.cuid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            cname: doc.data().displayName,
            cphotoURL: doc.data().photoURL
          });
        } else {
          window.location = "/";
        }
      });
    this.setState({
      uid: user.uid,
      name: user.displayName,
      photoURL: user.photoURL
    });
    database
      .ref(`users/${this.state.uid}/messages/${this.state.cuid}`)
      .remove();
    database.ref().update({
      [`users/${this.state.uid}/history/${this.state.cuid}/count`]: 0
    });
    database
      .ref(`users/${this.state.uid}/history`)
      .on("child_added", (data) => {
        if (data.exists()) {
          let key = data.key;
          data = data.val();
          this.setState({
            history: [
              ...(key === this.state.cuid ? [] : this.state.history),
              {
                avatar:
                  key === this.state.cuid
                    ? this.state.cphotoURL
                    : data.photoURL || defaultPhoto,
                title: key === this.state.cuid ? this.state.cname : data.name,
                subtitle: key === this.state.cuid ? "" : data.content,
                date: key === this.state.cuid ? "" : new Date(data.timestamp),
                unread: key === this.state.cuid ? 0 : data.count,
                uid: key
              },
              ...(key !== this.state.cuid ? [] : this.state.history)
            ]
          });
        }
      });
    database
      .ref(`users/${this.state.uid}/history`)
      .on("child_changed", (data) => {
        if (data.exists()) {
          let key = data.key;
          data = data.val();
          console.log();
          this.setState({
            history: [
              ...this.state.history.map((d) => {
                return d.uid === key && key !== this.state.cuid
                  ? { ...d, subtitle: data.content, unread: data.count }
                  : d;
              })
            ]
          });
        }
      });

    database
      .ref()
      .child("messages")
      .child(
        user.uid > this.state.cuid
          ? `${user.uid}-${this.state.cuid}`
          : `${this.state.cuid}-${user.uid}`
      )
      .on("child_added", (data) => {
        data = data.val();
        this.setState({
          messages: [
            ...this.state.messages,
            {
              title: data.uid === user.uid ? "You" : data.name,
              position: data.uid === user.uid ? "right" : "left",
              type: "text",
              text: data.content,
              date: data.timestamp
            }
          ]
        });
      });
  };
  componentWillUnmount() {
    // this.countflush();
    // window.removeEventListener("beforeunload", this.countflush);
  }
  message = (e) => {
    this.setState({
      content: e.target.value
    });
  };
  onMessage = (e) => {
    e.preventDefault();
    this.refs.input.clear();
    let content = this.state.content;
    this.setState({
      content: ""
    });
    database
      .ref()
      .child("messages")
      .child(
        this.state.uid > this.state.cuid
          ? `${this.state.uid}-${this.state.cuid}`
          : `${this.state.cuid}-${this.state.uid}`
      )
      .push({
        name: this.state.name,
        uid: this.state.uid,
        content: content,
        timestamp: new Date().getTime()
      });
    database.ref().update({
      [`users/${this.state.cuid}/messages/${this.state.uid}`]: {
        count: ++this.count,
        name: this.state.name,
        content,
        timestamp: new Date().getTime(),
        photoURL: this.state.photoURL
      }
    });
    database.ref().update({
      [`users/${this.state.cuid}/history/${this.state.uid}`]: {
        count: this.count,
        name: this.state.name,
        content,
        timestamp: new Date().getTime(),
        photoURL: this.state.photoURL
      }
    });
    database.ref().update({
      [`users/${this.state.uid}/history/${this.state.cuid}/count`]: {
        count: 0,
        name: this.state.cname,
        content,
        timestamp: new Date().getTime(),
        photoURL: this.state.cphotoURL
      }
    });
  };
  handle = (e) => {
    if (e.uid !== this.state.cuid) window.location = `/chat/${e.uid}`;
  };
  render() {
    return (
      <>
        <Components.NavBar getUser={this.getUser} />
        <Container>
          <Row>
            <Col xs={4}>
              <ChatList
                onClick={this.handle}
                className="chat-list"
                dataSource={this.state.history}
              />
            </Col>
            <Col xs={8}>
              <Form onSubmit={this.onMessage}>
                <Input
                  onChange={this.message}
                  defaultValue={this.state.content}
                  multiline={true}
                  autoHeight={true}
                  ref="input"
                  placeholder="Type here..."
                  rightButtons={
                    <Button
                      type="submit"
                      color="white"
                      backgroundColor="black"
                      text="Send"
                    />
                  }
                />
              </Form>
              <MessageList
                className="message-list"
                lockable={true}
                toBottomHeight={"100%"}
                dataSource={this.state.messages}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Chat;
