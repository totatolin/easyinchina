import React from 'react';
import './components.scss';
class Item extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    const item = this.props.item
    return (
      <div className="item">
        <div className="wfull h200">
          <img className="w200 h200 pull-left" src={require('../../../../images/1.jpg')} />
          <div className="w200 h200 ml10 pull-left">
            <p className="ft18">{item.shop_name}</p>
            <p>Dinner;American;Burger;(09:00~22:00)</p>
            <p>Address:Yuhang xxRoad</p>
            <p>地址： 余杭神马路36号</p>
            <p>电话： +8613767768954</p>
          </div>
        </div>
        <div className="wfull h50">
          Brief: This shop is especially for people who like meat.With hundreds of ways to cook,you will enjoy it.read more
        </div>
      </div>
    )
  }
}
export default Item;