import React, { Component } from 'react';
import './second-tabs.scss';

class SecondTabs extends Component {
  componentDidMount(){
    document.onclick=this.two;
  }
  one = (e) => {
    console.log(this)
    e.nativeEvent.stopImmediatePropagation();
    alert(1)
  }
  two = () => {
    console.log(this)
    alert(2)
  }
  render() {
    return (
      <div className="second-tabs" onClick={this.one}>
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