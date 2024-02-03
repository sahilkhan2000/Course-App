import React, { useEffect, useState } from "react";
import Course from "./Course";
import { Container } from "reactstrap";
import base_url from "../api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);
  const [courses, setCourses] = useState([]);

  //funtion to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //success
        toast.success("Courses has been loaded", { position: "bottom-center" });
        setCourses(response.data);
      },
      (error) => {
        //error
        //console.log(error);
        toast.error("Something went wrong", {position:"bottom-center"});
      }
    );
  };

  // loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const updateCourses = (id) => {
    setCourses(courses.filter((c)=> c.id != id))
  };


  
  return (
    <div>
      <Container className="text-center">
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>
        {courses.length > 0
          ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
          : "No Courses"}
      </Container>
    </div>
  );
};

export default AllCourses;
