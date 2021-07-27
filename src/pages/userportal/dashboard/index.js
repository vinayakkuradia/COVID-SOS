import React from "react";
import { Container, Modal } from "react-bootstrap";
import Components from "../../components";
import SideBar from "./SideBar";
import Main from "./Main";
import firebase from "../../../config";
import Form from "../../sosportal/portal/form";
import India from "../../../districts";
const db = firebase.firestore();

class Benefactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      show: false
    };
  }
  getUser = (user) => {
    this.setState({
      uid: user.uid
    });
  };
  getList = async (collection) => {
    let list = [];
    let snapshot = await db
      .collection(collection)
      .where("uid", "==", this.state.uid)
      .get();
    snapshot.forEach((doc) => {
      let data = doc.data();
      list.push({
        docId: doc.id,
        ...data
      });
    });
    if (!list.length) {
      alert("0 results found");
      return;
    }
    this.setState({
      activity: collection,
      list: list
    });
  };
  toggleShow = (data) => {
    this.setState({
      show: !this.state.show,
      data: data
    });
  };
  input = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        district:
          e.target.id === "state"
            ? India[e.target.value][0]
            : this.state.data.district,
        [e.target.id]: e.target.value
      }
    });
  };
  list = (listItems) => {
    this.setState({
      data: {
        ...this.state.data,
        list: listItems
      }
    });
  };
  create = async (e) => {
    e.preventDefault();

    let keywords = this.state.data.list
      .map((item) => {
        return `${item.item} ${item.qty} ${item.unit} Rs.${item.amount} ${item.details}`;
      })
      .join("\n\r");
    try {
      let data = {
        ...this.state.data,
        datetime: new Date(),
        keywords: keywords
      };
      delete data.docId;
      let collection = db.collection(this.state.activity);
      await collection.doc(this.state.data.docId).set(data);
      alert(`${this.state.activity} updated`);
    } catch (error) {
      console.log(error);
    }
  };
  delete = async (docId) => {
    try {
      if (!window.confirm("Are you sure want to delete?")) return;
      await db.collection(this.state.activity).doc(docId).delete();
    } catch (error) {
      console.log(error);
    } finally {
      this.getList(this.state.activity);
    }
  };
  render() {
    return (
      <>
        <Components.NavBar getUser={this.getUser} />
        <Container fluid>
          <div className="flex-xl-nowrap row">
            <SideBar getList={this.getList} />
            <Main
              list={this.state.list}
              show={this.toggleShow}
              delete={this.delete}
            />
          </div>
        </Container>
        <Modal show={this.state.show} onHide={this.toggleShow} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              input={this.input}
              create={this.create}
              user={this.state.data || {}}
              activity={this.state.activity}
              list={this.list}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Benefactor;
