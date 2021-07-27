import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import moment from "moment";

class Main extends React.Component {
  render() {
    return (
      <main className="col-xl-8 col-md-9 col-12">
        <Row xs={1} md={2} className="g-4">
          {this.props.list.map((data, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {moment(new Date(data.datetime.seconds * 1000)).fromNow()}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {`${data.address}, ${data.district}, ${data.state}`}
                    </Card.Subtitle>
                    <pre>{data.keywords}</pre>
                    <Card.Link onClick={() => this.props.show(data)}>
                      Edit
                    </Card.Link>
                    <Card.Link
                      onClick={() => {
                        this.props.delete(data.docId);
                      }}
                    >
                      Delete
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Main;
