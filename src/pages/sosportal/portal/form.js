import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import India from "../../../districts";

import Panel from "./checkout";
class FormApp extends React.Component {
  render() {
    return (
      <Container>
        <Form onSubmit={this.props.create}>
          <Form.Group
            className="mb-3"
            controlId="displayName"
            onChange={this.props.input}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              defaultValue={this.props.user.displayName}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="email"
            onChange={this.props.input}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={this.props.user.email}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="phoneNumber"
            onChange={this.props.input}
          >
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile"
              defaultValue={this.props.user.phoneNumber}
            />
          </Form.Group>
          <Form.Group controlId="address" onChange={this.props.input}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={this.props.user.address}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="state"
              as="select"
              onChange={this.props.input}
              value={this.props.user.state}
            >
              {Object.keys(India).map((state, index) => {
                return <option key={index}>{state}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="district"
              as="select"
              onChange={this.props.input}
              value={this.props.user.district}
            >
              {[...(India[this.props.user.state] || "")].map(
                (district, index) => {
                  return <option key={index}>{district}</option>;
                }
              )}
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="pincode"
            onChange={this.props.input}
          >
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="number"
              placeholder="342001"
              defaultValue={this.props.user.pincode}
            />
          </Form.Group>
          <Form.Group
            controlId={this.props.activity}
            onChange={this.props.input}
          >
            <Form.Label>Specify {this.props.activity} Details</Form.Label>
            <Panel listItems={this.props.user.list} list={this.props.list} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {this.props.user.docId ? "Edit" : "Submit"}
          </Button>
        </Form>
      </Container>
    );
  }
}

export default FormApp;
