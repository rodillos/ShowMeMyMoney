import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { userStock } from '../stock/stock';

class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state = { labels: ['Caja de Ahorro'], data: [] }
  }

  chartData = {
    datasets: [
      {
        label: 'valor total cartera',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  getUserData() {
    fetch("http://localhost:9000/user",
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
      .then(response => {
        this.chartData.labels = this.setLabels(response.stocks);
        this.chartData.datasets.data = this.setData(response.savings, response.stocks);
      })
  }

  setLabels( stockList ){
    var labelList = this.state.labels;
    stockList.map(
      userStock => {
        labelList = labelList.concat(userStock.stock.name);
      }
    );
    return labelList;
  } 

  setData(savings, stockList){
    var dataList = [savings];
    stockList.map(
      userStock => 
      dataList = dataList.concat(userStock.stock.price * userStock.quantity)
    )
    return dataList
  }
  
  componentWillMount() {
    this.getUserData();
  }
  


  render() {
    return (
      <div className="App">
        <Container fluid>
          <h1>valor total cartera</h1>
          {/* <div>
            <Pie data={this.data} />
          </div> */}
        </Container>
      </div>
    );
  }

}

export default Dashboard;