import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import BuySellStock from './buySellStock';
import StockDetailCard from './stockDetailCard';

class StockDetail extends Component{

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
        <h2>StockSelected.name</h2>
            <Col>
                <StockDetailCard />
                <BuySellStock sellMode={false}/>
                <BuySellStock sellMode={true}/>       
            </Col>
      </div>
    );
  }

}

export default StockDetail;