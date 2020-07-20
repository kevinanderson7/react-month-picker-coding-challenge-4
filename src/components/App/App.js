import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header';

class App extends Component {
  state = {
    calendar: [],
  };

  componentDidMount() {
    console.log('Ready to rumble');
    this.getCalendar();
  }

  getCalendar = () => {
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
  };

  render() {
    return (
      <div className="App">
        <Header calendar={this.state.calendar} />
        <br />
        <MonthList
          calendar={this.state.calendar}
          getCalendar={this.getCalendar}
        />
      </div>
    );
  }
}

export default App;
