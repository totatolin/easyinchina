import React, { Component } from 'react';
import './second-tabs.scss';

class SecondTabs extends Component {
  render() {
    return (
      <div className="second-tabs">
        {this.props.list.map((item) => {
          return (
            <p key={item}>{item}</p>
          )
        })}
      </div>
    );
  }
}

export default SecondTabs;