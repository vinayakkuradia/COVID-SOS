import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { AiFillPlusSquare, AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
// vist https://tet0b.csb.app/test

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        item: "One",
        qty: 1,
        unit: "kg",
        amount: 0,
        details: "",
        returnable: "No"
      },
      other: false,
      list: []
    };
    this.items = ["A", "B", "C"];
  }
  input = (e) => {
    this.setState({
      other: e.target.name === "item" && e.target.value === "other",
      item: {
        ...this.state.item,
        [e.target.name]:
          e.target.name === "item" && e.target.value === "other"
            ? ""
            : e.target.value
      }
    });
  };
  submit = (e) => {
    e.preventDefault();
    if (!this.state.item.item) return;
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.item],
      other: false
    });
  };
  delete = (index) => {
    let list = [];
    this.state.list.forEach((item, i) => {
      if (i !== index) list.push(item);
    });
    this.setState({
      list: list
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col xs={2}>
            <strong>Item</strong>
          </Col>
          <Col xs={2}>
            <strong>Qty</strong>
          </Col>
          <Col xs={2}>
            <strong>Amount(Rs.)</strong>
          </Col>
          <Col xs={2}>
            <strong>Details</strong>
          </Col>
          <Col xs={2}>
            <strong>Returnable</strong>
          </Col>
        </Row>
        <Form onSubmit={this.submit}>
          <Row>
            <Col xs={2}>
              {this.state.other ? (
                <Form.Control
                  name="item"
                  type="text"
                  placeholder="item name"
                  onChange={this.input}
                />
              ) : (
                <Form.Control name="item" as="select" onChange={this.input}>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>other</option>
                </Form.Control>
              )}
            </Col>
            <Col xs={2}>
              <Row>
                <Col xs={4} className="padding-0">
                  <Form.Control
                    name="qty"
                    type="number"
                    onChange={this.input}
                    defaultValue={1}
                  />
                </Col>
                <Col className="padding-0">
                  <Form.Control name="unit" as="select" onChange={this.input}>
                    <option>kg</option>
                    <option>mg</option>
                    <option>L</option>
                    <option>mL</option>
                    <option>piece</option>
                  </Form.Control>
                </Col>
              </Row>
            </Col>
            <Col xs={2}>
              <Form.Control
                name="amount"
                type="number"
                placeholder="0 to donate"
                onChange={this.input}
              />
            </Col>
            <Col xs={2}>
              <Form.Control
                name="details"
                type="text"
                placeholder="expiry, mfg by"
                onChange={this.input}
              />
            </Col>
            <Col xs={2}>
              <Form.Control name="returnable" as="select" onChange={this.input}>
                <option>No</option>
                <option>Yes</option>
              </Form.Control>
            </Col>
            <Col xs={2}>
              <Button variant="light" type="submit">
                <IconContext.Provider value={{ size: "2em", color: "blue" }}>
                  <AiFillPlusSquare />
                </IconContext.Provider>
              </Button>
            </Col>
          </Row>
        </Form>
        {this.state.list.map((item, key) => {
          return (
            <Row key={key}>
              <Col xs={2}>{item.item}</Col>
              <Col xs={2}>
                {item.qty} {item.unit}
              </Col>
              <Col xs={2}>{item.amount}</Col>
              <Col xs={2}>{item.details}</Col>
              <Col xs={2}>{item.returnable}</Col>
              <Col>
                <Button variant="light" onClick={() => this.delete(key)}>
                  <IconContext.Provider value={{ size: "1.5em", color: "red" }}>
                    <AiFillDelete />
                  </IconContext.Provider>
                </Button>
              </Col>
            </Row>
          );
        })}
        {this.state.list.length ? (
          <Button onClick={() => this.props.list(this.state.list)}>
            Checkout
          </Button>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Test;
