import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action="true"
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action="true"
        >
          Add Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action="true"
        >
          View Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#!"
          action="true"
        >
          About Us
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#!"
          action="true"
        >
          Contact Us
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menus;
