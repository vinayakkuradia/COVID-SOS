import React from "react";
import firebase from "../../../config";
import Components from "../../components";
import Form from "./form";
import India from "../../../districts";
import axios from "axios";
import { serverURL } from "../../../default";
var db = firebase.firestore();

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: props.match.params.activity,
      user: {
        state: "Rajasthan",
        district: "Jodhpur"
      }
    };
    if (this.state.activity !== "provision" && this.state.activity !== "sos")
      window.location = "/";
    this.topic = null;
  }
  getUser = async (user) => {
    let doc = await db.collection("users").doc(user.uid).get();
    let moreuser = doc.exists ? doc.data() : {};
    this.setState({
      user: {
        ...this.state.user,
        uid: user.uid,
        phoneNumber: user.phoneNumber,
        email: user.email,
        ...moreuser,
        displayName: user.displayName
      }
    });
  };
  input = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        district:
          e.target.id === "state"
            ? India[e.target.value][0]
            : this.state.user.district,
        [e.target.id]: e.target.value
      }
    });
    if (e.target.name === "district") {
      this.topic = (this.state.user.state + e.target.value).replaceAll(
        /[^A-Za-z]/g,
        ""
      );
    }
  };

  create = async (e) => {
    e.preventDefault();
    let keywords = this.state.user.list
      .map((item) => {
        return `${item.item} ${item.qty} ${item.unit} Rs.${item.amount} ${item.details}`;
      })
      .join("\n\r");
    try {
      let data = {
        ...this.state.user,
        datetime: new Date(),
        keywords: keywords
      };
      let collection = db.collection(this.state.activity);
      if (this.state.user.docId) {
        delete data.docId;
        await collection.doc(this.state.user.docId).set(data);
        alert(`${this.state.activity} updated`);
      } else {
        let docRef = await collection.add(data);
        alert(`${this.state.activity} submitted`);
        this.setState({
          user: {
            ...this.state.user,
            docId: docRef.id
          }
        });
      }
      if (!this.topic)
        this.topic = (
          this.state.user.state + this.state.user.district
        ).replaceAll(/[^A-Za-z]/g, "");
      await axios.post(`${serverURL}/pushtotopic`, {
        message: {
          notification: {
            title: this.state.activity,
            body: keywords
          },
          topic: this.topic
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  list = (listItems) => {
    this.setState({
      user: {
        ...this.state.user,
        list: listItems
      }
    });
  };

  render() {
    return (
      <>
        <Components.NavBar getUser={this.getUser} />
        <Form
          input={this.input}
          create={this.create}
          user={this.state.user}
          list={this.list}
          activity={this.state.activity}
        />
      </>
    );
  }
}

export default Portal;
