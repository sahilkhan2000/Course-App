import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import base_url from "../api/BootApi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({});

  //Form handler function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  //creating funtion to post data on server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("response");
        toast.success("Course added successfully");
        setCourse({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      }
    );
  };
  
  return (
    <div>
      <Container className="my-3 text-center">
        <h2>Fill course details</h2>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <Label for="userId">Course Id</Label>
            <Input
              id="userId"
              name="userId"
              placeholder="Enter course id"
              type="text"
              onChange={(e) => {
                setCourse({ ...course, id: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Course Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter title here"
              type="text"
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Course Description</Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              placeholder="Enter description here"
              style={{ height: 100 }}
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>
        </Form>
        <Button color="success" type="submit">
          Add Course
        </Button>
        <Button color="warning ms-3" type="reset">
          Clear
        </Button>
      </Container>
    </div>
  );
};

export default AddCourse;
