import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state = { apiResponse: "" }
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  
  render() {
    return (
      <div className="App">
        <Container fluid>
          <h1>valor total cartera</h1>
        </Container>
      </div>
    );
  }

}

export default Dashboard;