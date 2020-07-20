import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
  render() {
    return (
      <div>
        {this.props.calendar.map((item) => (
          <div key={item.id}>
            <MonthItem getCalendar={this.props.getCalendar} item={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default MonthList;
