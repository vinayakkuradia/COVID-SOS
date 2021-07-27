import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ChatItem } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { defaultPhoto } from "../../default";
import WebPush from "../../webpush";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NavBar.css";
import firebase from "../../config";
import "firebase/auth";
const push = new WebPush();
const database = firebase.database();

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      message: []
    };
    // following code checks if user logged in //
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
        console.log(user.uid);
        typeof props.getUser === "function" && props.getUser(user);
        database.ref(`users/${user.uid}/messages`).on("child_added", (data) => {
          if (data.exists()) {
            let key = data.key;
            data = data.val();
            this.setState({
              message: [
                ...this.state.message,
                {
                  avatar: data.photoURL,
                  link: `/chat/${key}`,
                  title: data.name,
                  subtitle: data.content,
                  date: new Date(data.timestamp)
                }
              ]
            });
          }
        });
      } else if (!props.noredirect) window.location = "/login";
    });
  }
  componentDidMount() {
    push.receiveMessage(this.notifyme);
  }
  notifyme = ({ notification }) => {
    toast(`${notification.title}`);
  };
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        });
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="m-auto" id="mainlogo" href="#home">
              COVID SOS Portal
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="ml-auto text-center">
                <NavLink exact className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink exact className="nav-link" to="/about/">
                  About
                </NavLink>
                {this.state.user ? (
                  <>
                    <NavLink exact className="nav-link" to="/portal/sos">
                      SOS
                    </NavLink>
                    <NavLink exact className="nav-link" to="/portal/provision">
                      Provide
                    </NavLink>
                    <NavLink exact className="nav-link" to="/search">
                      Explore
                    </NavLink>
                    {this.state.message.length ? (
                      <NavDropdown
                        title={this.state.message.length + " messages"}
                        id="basic-nav-dropdown"
                      >
                        {this.state.message.map((m, index) => {
                          return (
                            // <NavDropdown.Item key={index}>
                            <Link to={m.link} key={index}>
                              <ChatItem
                                avatar={m.avatar || defaultPhoto}
                                alt={"User"}
                                title={m.title}
                                subtitle={m.subtitle}
                                date={m.date}
                              />
                            </Link>
                            // </NavDropdown.Item>
                          );
                        })}
                      </NavDropdown>
                    ) : (
                      <></>
                    )}
                    <NavDropdown
                      title={this.state.user.displayName}
                      id="basic-nav-dropdown"
                    >
                      <NavLink exact className="nav-link" to="/dashboard">
                        Dashboard
                      </NavLink>
                      <NavLink exact className="nav-link" to="/profile">
                        profile
                      </NavLink>
                      <NavDropdown.Divider />
                      <NavLink
                        exact
                        className="nav-link"
                        to="/"
                        onClick={this.logout}
                      >
                        Logout
                      </NavLink>
                    </NavDropdown>
                  </>
                ) : (
                  <NavLink exact className="nav-link" to="/login">
                    Login
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ToastContainer />
      </>
    );
  }
}

export default NavBar;
