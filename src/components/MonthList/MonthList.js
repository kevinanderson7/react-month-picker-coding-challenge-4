import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
  render() {
    return (
      <div>
        {this.props.calendar.map((item) => (
          <div key={item.id}>
            <MonthItem item={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default MonthList;
