import axios from "axios";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import base_url from "../api/BootApi";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course deleted")
        update(id)
      },
      (error)=>{
        toast.error("oops! something went wrong")
      }
    )
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardTitle tag="h5">{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        <Button color="warning">Update</Button>
        <Button
          color="danger mx-3"
          onClick={() => {
            deleteCourse(course.id);
          }}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default Course;
