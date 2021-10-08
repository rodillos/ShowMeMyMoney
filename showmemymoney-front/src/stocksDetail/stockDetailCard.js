import React, { Component} from 'react';
import {Card, Container, ListGroup, Row, Col} from 'react-bootstrap';

class StockDetailCard extends Component{

    defaultStocksAmount = 200;
    defaultStockValue = 2000;

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
            <Card.Header className='CardHeader'>Valores</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Cantidad :</p>
                                </Col>
                                <Col>
                                    <p>{this.defaultStocksAmount} unidades</p>
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
                                    <p>Cotizacion :</p>
                                </Col>
                                <Col>
                                    <p>AR$ {this.defaultStockValue} / unidad</p>
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
                                    <p>Valor Actual :</p>
                                </Col>
                                <Col>
                                    <p>AR$ {this.defaultStockValue * this.defaultStocksAmount}</p>
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

export default StockDetailCard;