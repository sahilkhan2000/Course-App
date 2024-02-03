import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="text-center bg-info">
      <h1 className="display-3">Course Library App</h1>
      <p>Developed by Sahil Khan for basic understanding of react</p>
      <div className="container">
        <p>
          An eLearning app is an interactive web or mobile app that allows users
          to create learning courses and lessons, store materials, conduct
          lessons, test progress, and evaluate learners. eLearning apps are a
          solution for remote learning and upskilling.
        </p>
        <Button color="success">Start Using</Button>
      </div>
    </div>
  );
};

export default Home;
