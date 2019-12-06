import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
      loggedIn: false,
      courses: [],
      courseName: "",
      grade: "",
      creditHours: 0,
      earnedCredits: 1,
      totalCredits: 1,
      username: ""
    };
  }

  async componentDidMount() {
    console.log(this.state);
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      this.setState({
        loading: false,
        loggedIn: false
      });
    } else if (this.state.loading) {
      try {
        // const response = await axios.get("/api/protected", {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // console.log(response.data);
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token)
        });
        const res = await axios.get("/api/grades",  {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.setState({
          earnedCredits: res.data.earnedCredits,
          totalCredits: res.data.totalCredits
        });
      } catch (error) {
        console.log(error);
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token),
          msg: "The protected route failed :( Check console for errors"
        });
      }
    }
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    this.setState({ loggedIn: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(name + ' ' + event.target.value)
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    let courseData = { courseName: this.state.courseName, grade: this.state.grade, creditHours: this.state.creditHours };
    console.log("TOKEN: " + localStorage.getItem("jwtToken"));

    try {
      const res = await axios.post("/api/addCourse", courseData, {headers: {'Authorization': 'bearer ' + localStorage.getItem("jwtToken")}});
      this.setState({ loading: false});
      this.setState({
        earnedCredits: res.data.earnedCredits,
        totalCredits: res.data.totalCredits
      })
    } catch (err) {
      console.log('Course could not be added');
      this.setState({ loading: false})
    }
  };

  render() {
    if (!this.state.loading && !this.state.loggedIn) {
      return <Redirect to="/login" />;
    }

    if (this.state.loading) {
      return <Spinner as="span" size="lg" role="status" aria-hidden="true" />;
    }

    return (
      <Container>
        <Card>
          <h2 class="results text-center">{(this.state.earnedCredits / this.state.totalCredits).toFixed(2)}</h2>
          <h2 class="text-center">{this.state.user.name + "'s GPA"}</h2>
          <Button variant="primary" onClick={this.logout}>Logout</Button>
        </Card>
        
        <Card>
          <Card.Body>
            <h2 class="text-center">Add Course</h2>
            <Form /*onSubmit={this.handleSubmit}*/>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Course Name"
                    value={this.state.courseName}
                    onChange={this.handleChange("courseName")}
                  />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Grade</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter A, B, C, D, F"
                    value={this.state.grade}
                    onChange={this.handleChange("grade")}
                  />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Credit Hours</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter credit hours"
                    value={this.state.creditHours}
                    onChange={this.handleChange("creditHours")}
                  />
              </Form.Group>
              <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
            </Form>

          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Home;
