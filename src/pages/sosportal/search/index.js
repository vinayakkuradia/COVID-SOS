import React from "react";
import India from "../../../districts";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import moment from "moment";
import firebase from "../../../config";
import Fuse from "fuse.js";
import Components from "../../components";
import { serverURL } from "../../../default";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
const db = firebase.firestore();

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "Rajasthan",
      district: "Jodhpur",
      activity: "sos",
      data: []
    };
  }
  getUser = async (user) => {
    let doc = await db.collection("users").doc(user.uid).get();
    let moreuser = doc.exists ? doc.data() : {};
    this.setState(
      {
        state: moreuser.state || this.state.state,
        district: moreuser.district || this.state.district,
        user: {
          uid: user.uid,
          displayName: user.displayName
        }
      },
      () => this.search()
    );
  };
  search = async () => {
    try {
      let results = [];
      let snapshot = await db
        .collection(this.state.activity)
        .where("state", "==", this.state.state)
        .get();
      snapshot.forEach((doc) => {
        let item = doc.data();
        if (
          item.district === this.state.district
          //  &&          item.uid !== this.state.user.uid
        )
          results.push(item);
      });
      if (!results.length) {
        alert("0 results found");
        return;
      }
      const fuse = new Fuse(results, {
        keys: ["keywords"]
      });
      if (this.state.query)
        results = fuse.search(this.state.query).map((item) => item.item);

      if (!results.length) {
        alert("0 results found");
        return;
      }
      this.setState({
        data: results
      });
    } catch (error) {
      console.log(error);
    }
  };
  input = (e) => {
    this.setState({
      district:
        e.target.name === "state"
          ? India[e.target.value][0]
          : this.state.district,
      [e.target.name]: e.target.value
    });
  };
  redirectToChat = async (item) => {
    try {
      sessionStorage.setItem(item.uid, item[this.state.activity]);

      await axios.post(`${serverURL}/pushtodevices/${item.uid}`, {
        message: {
          notification: {
            title:
              this.state.activity === "sos"
                ? "Accepted SOS by"
                : "Request from",
            body: this.state.user.displayName
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <Components.NavBar getUser={this.getUser} />
        <Container>
          <Row>
            <Col xs={4}>
              <Form.Control
                name="query"
                type="text"
                placeholder="Search..."
                onChange={this.input}
              />
            </Col>
            <Col xs={2}>
              <Form.Group>
                <Form.Control
                  name="activity"
                  as="select"
                  onChange={this.input}
                  value={this.state.activity}
                >
                  <option value="sos">SOS</option>;
                  <option value="donation">Donation</option>;
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group>
                <Form.Control
                  name="state"
                  as="select"
                  onChange={this.input}
                  value={this.state.state}
                >
                  {Object.keys(India).map((state, index) => {
                    return <option key={index}>{state}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group>
                <Form.Control
                  name="district"
                  as="select"
                  onChange={this.input}
                  value={this.state.district}
                >
                  {[...(India[this.state.state] || "")].map(
                    (district, index) => {
                      return <option key={index}>{district}</option>;
                    }
                  )}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Button variant="primary" onClick={this.search}>
                Submit
              </Button>
            </Col>
          </Row>
          {this.state.data.map((item, index) => {
            return (
              <Card key={index}>
                <Card.Header as="h5">{item.displayName}</Card.Header>
                <Card.Body>
                  <Card.Title>{`${item.address} ${item.district}, ${item.state}`}</Card.Title>
                  {/* <Card.Text> */}
                  <pre>{item["keywords"]}</pre>
                  {/* </Card.Text> */}
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: "bold", color: "red" }}
                    to={`/chat/${item.uid}`}
                    onClick={() => this.redirectToChat(item)}
                  >
                    {item["sos"] ? "Help" : "Request"}
                  </NavLink>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {item.datetime
                    ? moment(new Date(item.datetime.seconds * 1000)).fromNow()
                    : ""}
                </Card.Footer>
              </Card>
            );
          })}
        </Container>
      </>
    );
  }
}

export default Search;
