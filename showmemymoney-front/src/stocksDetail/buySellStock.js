import React, { Component } from 'react';
import { Row, Card, Container} from 'react-bootstrap';

class BuySellStock extends Component{

  defaultValue = 1000;

  constructor(props){
    super(props);
    this.state = { 
      stocksAmount: 0,
      stocksPrice: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event){
    this.setState({
      stocksAmount: event.target.value,
      stocksPrice: event.target.value * this.props.price,
    })
  }
  
  requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  };

  buyStock(stockName){
    this.requestOptions.body = JSON.stringify({
      stockName: stockName,
      stockBuyAmount: this.state.stocksAmount,
    });
    fetch('https://localhost:9000/buy', this.requestOptions);
    debugger;
  }

  sellStock(stockName){
    this.requestOptions.body = JSON.stringify({
      stockName: stockName,
      stockSellAmount: this.state.stocksAmount,
    });
    fetch('https://localhost:9000/sell', this.requestOptions);
  }

  render() {
    const name = this.props.stockName;
    return (
      <div className="App">
        <Card>
            <Card.Body>
                <form onSubmit={() => {this.props.sellMode ? this.sellStock(name) : this.buyStock(name)}}>
                    <Row>
                      <Container xl={8}>
                        <label style={{color: 'black'}}>
                            <input type={Number} value={this.state.stocksAmount} onChange={this.handleChange}/>
                            <p>= AR$ {this.state.stocksPrice}</p>
                        </label>
                      </Container>
                      <Container xl={4}>
                        <input type="submit" value={this.props.sellMode ? "Vender" : "Comprar"} />
                      </Container>
                    </Row>
                </form>
            </Card.Body>
        </Card>
      </div>
    );
  }

}

export default BuySellStock;