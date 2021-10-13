import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import BuySellStock from './buySellStock';
import StockDetailCard from './stockDetailCard';

class StockDetail extends Component{

  constructor(props){
    super(props);
    this.state = { apiResponse: "" }
  }
  
  name = this.props.stockName;
  value = this.props.stockValue;
  Quantity = this.props.stockQuantity;
  

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  // }
  
  // componentWillMount() {
  //   this.callAPI();
  // }
  
  render() {
    return (
      <div className="App">
        <h2>{this.name}</h2>
            <Col>
                <StockDetailCard value ={this.value} quantity={this.Quantity}/>
                <BuySellStock sellMode={false} stockName={this.name} price={this.value}/>
                <BuySellStock sellMode={true} stockName={this.name} price={this.value}/>       
            </Col>
      </div>
    );
  }

}

export default StockDetail;