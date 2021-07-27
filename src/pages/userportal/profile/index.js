import React from "react";
import Components from "../../components";
import { Container, Form, Image, Button } from "react-bootstrap";
import firebase from "../../../config";
import "firebase/auth";
import { defaultPhoto, serverURL } from "../../../default";
import India from "../../../districts";
import WebPush from "../../../webpush";
import axios from "axios";

const push = new WebPush();

var storageRef = firebase.app().storage().ref();
var db = firebase.app().firestore();

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        state: "Rajasthan",
        district: "Jodhpur"
      }
    };
    this.topic = null;
    this.token = null;
  }
  getUser = async (user) => {
    try {
      let doc = await db.collection("users").doc(user.uid).get();
      let moreuser = doc.exists ? doc.data() : {};
      this.topic =
        moreuser.state && moreuser.district
          ? (moreuser.state + moreuser.district).replaceAll(/[^A-Za-z]/g, "")
          : "RajasthanJodhpur";
      this.token = localStorage.getItem("pushtoken");
      this.setState({
        uid: user.uid,
        subscribed: this.token ? true : false,
        user: {
          ...this.state.user,
          phoneNumber: user.phoneNumber,
          email: user.email,
          ...moreuser,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  async unsubscribe(uid, topic, token) {
    console.log("called");
    try {
      await axios.get(`${serverURL}/unsubscribe/${topic}`, {
        params: { token: token }
      });

      let snapshot = await db
        .collection("users")
        .doc(uid)
        .collection("notification")
        .where("token", "==", token)
        .get();
      snapshot.forEach(async (doc) => {
        await db
          .collection("users")
          .doc(uid)
          .collection("notification")
          .doc(doc.id)
          .delete();
      });
      localStorage.removeItem("pushtoken");
      localStorage.removeItem("pushtopic");
    } catch (error) {
      console.log(error);
    }
  }
  pushNotification = async () => {
    try {
      if (this.state.subscribed) {
        this.unsubscribe(this.state.uid, this.topic, this.token);
      } else {
        if (Notification.permission !== "granted") {
          let permission = await Notification.requestPermission();
          if (permission !== "granted") {
            alert("permission denied");
            throw new Error("permission denied");
          }
        }
        let prevTopic = localStorage.getItem("pushtopic");
        if (this.token && prevTopic && prevTopic !== this.topic) {
          this.unsubscribe(this.state.uid, prevTopic, this.token);
        }
        if (!this.token) {
          this.token = await push.getToken();
        }
        if (prevTopic !== this.topic)
          await axios.get(`${serverURL}/subscribe/${this.topic}`, {
            params: { token: this.token }
          });
        await db
          .collection("users")
          .doc(this.state.uid)
          .collection("notification")
          .add({
            topic: this.topic,
            token: this.token
          });
        localStorage.setItem("pushtopic", this.topic);
        localStorage.setItem("pushtoken", this.token);
      }
      this.setState({ subscribed: !this.state.subscribed });
      await db.collection("users").doc(this.state.uid).set(
        {
          district: this.state.user.district,
          state: this.state.user.state
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  uploadImage = async () => {
    try {
      let file = document.getElementById("photo").files[0];
      if (!file) return null;
      let photoRef = storageRef.child(`profile/${this.state.uid}`);
      try {
        await photoRef.delete();
      } catch (error) {}
      let snapshot = await photoRef.put(file);
      let url = await snapshot.ref.getDownloadURL();
      this.setState({
        user: {
          ...this.state.user,
          photoURL: url
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  update = async (e) => {
    e.preventDefault();
    try {
      const user = firebase.auth().currentUser;
      await this.uploadImage();
      await user.updateProfile({
        displayName: this.state.user.displayName,
        photoURL: this.state.user.photoURL
      });
      await db.collection("users").doc(user.uid).set(this.state.user);
      alert("profile updated");
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  };
  input = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        district:
          e.target.id === "state"
            ? India[e.target.value][0]
            : this.state.user.district,
        [e.target.name]: e.target.value
      }
    });
    if (e.target.name === "district") {
      this.topic = (this.state.user.state + e.target.value).replaceAll(
        /[^A-Za-z]/g,
        ""
      );
      this.setState({
        subscribed: false
      });
      console.log("topic", this.topic);
    }
  };
  render() {
    return (
      <>
        <Components.NavBar getUser={this.getUser} />
        <Container>
          <Form onSubmit={this.update}>
            <Form.Group className="mb-3" controlId="displayName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="displayName"
                defaultValue={this.state.user.displayName}
                onChange={this.input}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={this.state.user.email}
                onChange={this.input}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                defaultValue={this.state.user.phoneNumber}
                onChange={this.input}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                as="textarea"
                type="text"
                defaultValue={this.state.user.address}
                onChange={this.input}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="state"
                as="select"
                onChange={this.input}
                value={this.state.user.state}
              >
                {Object.keys(India).map((state, index) => {
                  return <option key={index}>{state}</option>;
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="district"
                as="select"
                onChange={this.input}
                value={this.state.user.district}
              >
                {[...(India[this.state.user.state] || "")].map(
                  (district, index) => {
                    return <option key={index}>{district}</option>;
                  }
                )}
              </Form.Control>
              <Button variant="danger" onClick={this.pushNotification}>
                {this.state.subscribed ? "Unsubscribe" : "Subscribe"}
              </Button>
            </Form.Group>
            <Image
              src={this.state.user.photoURL || defaultPhoto}
              alt="profile image"
              rounded
              height="200px"
              width="200px"
            />
            <Form.Group controlId="photo" className="mb-3">
              <Form.Label>Picture profile</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
            <Button type="submit">Update</Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Profile;
