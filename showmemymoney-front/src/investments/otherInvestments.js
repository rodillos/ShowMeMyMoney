import React, { Component} from 'react';
import {Card, Container, ListGroup, Row, Col} from 'react-bootstrap';
import './myInvestments.css';

class OtherInvestments extends Component{

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
        <Card>
            <Card.Header className='CardHeader'>Otras Inversiones</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Caja Ahorro</p>
                                </Col>
                                <Col>
                                    <p>CajaAhorro.value</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Caja Ahorro</p>
                                </Col>
                                <Col>
                                    <p>CajaAhorro.value</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                        </Container>
                    </ListGroup.Item>                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Caja Ahorro</p>
                                </Col>
                                <Col>
                                    <p>CajaAhorro.value</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
      </div>
    );
  }

}

export default OtherInvestments;