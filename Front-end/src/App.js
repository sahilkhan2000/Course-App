import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Button, Card, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const notify = () => toast.success("Succeed!");
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Container>
          <Row className="my-2">
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-course" Component={AddCourse} exact />
                <Route path="/view-courses" Component={AllCourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
