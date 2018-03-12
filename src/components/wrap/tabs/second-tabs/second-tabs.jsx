import React, { Component } from 'react';
import './second-tabs.scss';

class SecondTabs extends Component {
  componentDidMount(){
    document.onclick=this.clickOut;
  }
  clickIn = (e) => {
    e.nativeEvent.stopImmediatePropagation();
  }
  clickOut = () => {
    this.props.clickOut();
  }
  render () {
    var secondTabs = null;
    if (this.props.secondTabsShow) {
      secondTabs = <div className="second-tabs" onClick={this.clickIn}>
        {this.props.list.map((item) => {
          return (
            <p key={item}>{item}</p>
          )
        })}
      </div>;
    } else {
      secondTabs = null;
    }
    return (
      <div>
        {secondTabs}
      </div>
    );
  }
}

export default SecondTabs;