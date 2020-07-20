import React, { Component } from 'react';

class MonthItem extends Component {
  handleClick = () => {
    alert(this.props.item.name);
  };

  render() {
    return <h2 onClick={this.handleClick}>{this.props.item.name}</h2>;
  }
}

export default MonthItem;
