import React, { Component } from 'react';
import { Row, Card, Container} from 'react-bootstrap';

class BuySellStock extends Component{

  defaultValue = 1000;

  constructor(props){
    super(props);
    this.state = { 
      apiResponse: "",
      stocksAmount: 0,
      stocksPrice: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }

  handleChange(event){
    this.setState({
      stocksAmount: event.target.value,
      stocksPrice: event.target.value * this.defaultValue,
    })
  }
  
  render() {
    return (
      <div className="App">
        <Card>
            <Card.Body>
                {/* 
                <form onSubmit={}> 
                //TODO: create function to update myStocks values on backend
                */}
                <form>
                    <Row>
                      <Container xl={8}>
                        <label>
                            <input type={Number} value={this.state.stocksAmount} onChange={this.handleChange}/>
                            = AR$ {this.state.stocksPrice}
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