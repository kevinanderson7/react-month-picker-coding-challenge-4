import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';

class App extends Component {
  state = {
    calendar: [],
  };

  componentDidMount() {
    console.log('Ready to rumble');
    this.getCalendar();
  }

  getCalendar() {
    axios({
      method: 'GET',
      url: '/calendar',
    })
      .then((response) => {
        console.log('response', response.data);
        this.setState({
          calendar: response.data,
        });
      })
      .catch((error) => {
        console.log('error during GET', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br />
        </header>
        <br />
        <p>List of months</p>
        <MonthList calendar={this.state.calendar} />
      </div>
    );
  }
}

export default App;
