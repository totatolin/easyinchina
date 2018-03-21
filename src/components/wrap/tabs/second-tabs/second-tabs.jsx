import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
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
  showContent = (item) => {
    console.log(item)
    this.clickOut();
  }
  render () {
    var secondTabs = null;
    if (this.props.secondTabsShow) {
      secondTabs = <div className="second-tabs" onClick={this.clickIn}>
        {this.props.list.map((item) => {
          return (
            <div className="child-tab" key={item} onClick={this.showContent.bind(this, item)}>
              <Router>
                <Link to={"/" + this.props.type + "/" + item}>{item}</Link>
              </Router>
            </div>
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