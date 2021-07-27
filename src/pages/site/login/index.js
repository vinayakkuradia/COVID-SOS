import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import SideCover from "./SideCover";
import "./login.css";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "../../../config";
import "firebase/auth";
import Components from "../../components";

var ui = new firebaseui.auth.AuthUI(firebase.auth());

class LoginForm extends React.Component {
  componentDidMount() {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async (authResult, redirectUrl) => {
          try {
            await firebase
              .firestore()
              .collection("users")
              .doc(authResult.user.uid)
              .set(
                {
                  displayName: authResult.user.displayName || "no name",
                  photoURL: authResult.user.photoURL || ""
                },
                { merge: true }
              );
            window.location = "/profile";
          } catch (error) {
            console.log(error);
          }
          return false;
        },
        uiShown: function () {
          document.getElementById("loader").style.display = "none";
        }
      },
      signInFlow: "popup",
      // signInSuccessUrl: "/profile",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "IN"
        }
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  render() {
    return (
      <>
        <Components.NavBar noredirect />
        <Row className="no-gutters">
          <SideCover />
          <div className="col">
            <div className="jumbotron w-100 h-100">
              <div className="card px-5 px-sm-3 py-5">
                <div className="row row-content text-center justify-content-center">
                  <div className="col-12 pb-2">
                    <div className="card-title">
                      <h1>Login</h1>
                    </div>
                  </div>

                  <div id="firebaseui-auth-container"></div>
                  <div id="loader">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </>
    );
  }
}

export default LoginForm;
