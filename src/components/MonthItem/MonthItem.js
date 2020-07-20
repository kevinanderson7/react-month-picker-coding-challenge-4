import React, { Component } from 'react';

class MonthItem extends Component {
  render() {
    return <div>{this.props.item.name}</div>;
  }
}

export default MonthItem;
