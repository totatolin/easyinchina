import React, { Component } from 'react';
// import './first-tabs.scss';

class FirstTabs extends Component {
  constructor() {
    super();
    this.state = {
      allSecondTabs: {
        'life': [1, 2, 3],
        'work': [4, 5, 6]
      }
    }
  }
  showSecondTabs = () => {
    let selectedTab = this.state.allSecondTabs[this.props.type]
    this.props.showSecondTabs(selectedTab)
  }
  render() {
    return (
      <a onClick={this.showSecondTabs}>{this.props.type}</a>
    );
  }
}

export default FirstTabs;