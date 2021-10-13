import './App.css';
import React, { Component, useState } from 'react';
import Dashboard from './dashboard/dashboard';
import MyInvestments from './investments/myInvestments';
import OtherInvestments from './investments/otherInvestments';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StockDetail from './stocksDetail/stockDetail';
import {Col, Row} from 'react-bootstrap';
import StockDetail from './stocksDetail/stockDetail';

function App(props){

    const [showDashboard, setShowDashboard] = useState(true);
    const [stockName, setStockName] = useState('');
    const [stockValue, setStockValue] = useState(0);
    const [stockQuantity, setStockQuantity] = useState(0);

    return (
      <div className="App">
        <header className="App-header">
          <Row>
            <Col xl={4}>
              <MyInvestments 
                setName={stockName => setStockName(stockName)}
                setValue={stockValue => setStockValue(stockValue)}
                setQuantity={stockQuantity => setStockQuantity(stockQuantity)}
                setDashboard={showDashboard => setShowDashboard(showDashboard)}
                />
              <OtherInvestments />
            </Col>
            <Col xl={6}>
              {showDashboard ?
                <Dashboard/>
                :
                <StockDetail 
                  stockName={stockName} 
                  stockValue={stockValue}
                  stockQuantity={stockQuantity}
                />
              }
            </Col>
          </Row>
        </header>
      </div>
    );

}

export default App;
