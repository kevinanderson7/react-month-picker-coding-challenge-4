import React, { Component } from 'react';

class MonthItem extends Component {
  handleClick = () => {
    alert(this.props.item.name);
    this.props.getCalendar();
  };

  render() {
    return (
      <h2 className="monthClass" onClick={this.handleClick}>
        {this.props.item.name}
      </h2>
    );
  }
}

export default MonthItem;
