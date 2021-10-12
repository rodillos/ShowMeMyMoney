import React, { Component} from 'react';
import {Card, Container, ListGroup, Row, Col} from 'react-bootstrap';
import './myInvestments.css';

class OtherInvestments extends Component{

  constructor(props){
    super(props);
    this.state = { stocks: [] }
  }
  
  getStockList() {
    fetch("http://localhost:9000/stocks",
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
      .then(response => {
          this.setState({
            stocks: response
        });
    })
  }

  createStockList(stockJson){
    return stockJson.map(
        (stock)=>{
            return <ListGroup.Item key={stock.name}>
                <Container>
                    <Row>
                        <Col>
                            <p>{stock.name}</p>
                        </Col>
                        <Col>
                            <p>(AR$ {stock.price} / unidad)</p>
                        </Col>
                    </Row>
                </Container>
            </ListGroup.Item>
        }
    )
}

  componentWillMount() {
    this.getStockList();
  }

  render() {
    return (
      <div className="App">
        <Card>
            <Card.Header className='CardHeader'>Otras Inversiones</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {this.state.stocks.map(
                        (stock)=>{
                            return <ListGroup.Item key={stock.name}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <p>{stock.name}</p>
                                        </Col>
                                        <Col>
                                            <p>(AR$ {stock.price} / unidad)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                        }
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
      </div>
    );
  }

}

export default OtherInvestments;