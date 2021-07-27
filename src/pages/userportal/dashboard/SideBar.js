import React from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <div className="col-xl-2 col-md-3 col-12 h-100">
        <ListGroup as="ul">
          <ListGroup.Item as="li" onClick={() => this.props.getList("sos")}>
            SOSs
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            onClick={() => this.props.getList("provision")}
          >
            Provisions
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default SideBar;
