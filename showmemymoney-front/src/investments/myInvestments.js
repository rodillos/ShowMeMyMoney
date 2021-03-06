import React, { Component} from 'react';
import {Card, Container, ListGroup, Row, Col} from 'react-bootstrap';
import './myInvestments.css';

class MyInvestments extends Component{

  constructor(props){
    super(props);
    this.state = { savings: '',
    stocks: [],
    }
  }

  getUserData() {
    fetch("http://localhost:9000/user",
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
      .then(response => {
          this.setState({
            savings: response.savings,
            stocks: this.createStockList(response.stocks)
        });
    })
  }

  createStockList(stockJson){
      return stockJson.map(
          stock => {
              const stockName = stock.stock.name;
              const stockValue = stock.stock.price;
              const stockQuantity = stock.quantity;
            return <ListGroup.Item key={stock.stock.name} 
                onClick={() => {
                    this.props.setName(stockName);
                    this.props.setValue(stockValue);
                    this.props.setQuantity(stockQuantity);
                    this.props.setDashboard(false);
                    }
                }>
            <Container>
                <Row >
                    <Col>
                        <p>{stockName}</p>
                    </Col>
                    <Col>
                        <p>({stock.quantity} unidades)</p>
                    </Col>
                </Row>
            </Container>
            <Container>
            </Container>
        </ListGroup.Item>
        }
      )
  }

  componentWillMount() {
    this.getUserData();
  }

  render() {
    return (
      <div className="App">
        <Card>
            <Card.Header className='CardHeader'>Mis Inversiones</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Caja Ahorro</p>
                                </Col>
                                <Col>
                                    <p>(AR$ {this.state.savings})</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                        </Container>
                    </ListGroup.Item>
                    {this.state.stocks}
                </ListGroup>
            </Card.Body>
        </Card>
      </div>
    );
  }

}

export default MyInvestments;