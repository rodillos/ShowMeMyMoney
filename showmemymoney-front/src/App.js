import './App.css';
import React, { Component } from 'react';
import Dashboard from './dashboard/dashboard';
import MyInvestments from './investments/myInvestments';
import OtherInvestments from './investments/otherInvestments';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockDetail from './stocksDetail/stockDetail';
import {Col, Row} from 'react-bootstrap';

class App extends Component{

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
        <header className="App-header">
          <Row>
            <Col xl={4}>
              <MyInvestments/>
              <OtherInvestments />
            </Col>
            <Col xl={6}>
              <Dashboard/>
              {/* TODO: IMPLEMENTAR UNA FUNCION PARA QUE AL SELECCIONAR UNA ACCION
              CAMBIE EL DASHBOARD Y PASE A SER EL STOCK DETAIL DE LA STOCK CORRESPONDIENTE */}
              {/* <StockDetail/> */}
            </Col>
          </Row>
        </header>
        <p className='App-intro'>{this.state.apiResponse}</p>
      </div>
    );
  }

}

export default App;
