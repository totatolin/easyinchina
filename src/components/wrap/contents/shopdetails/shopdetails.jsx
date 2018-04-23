import React from 'react';
import qs from 'qs';
import './shopdetails.scss';
class American extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div className="shop-details">
        <h1 className="ft26">The name of the shop</h1>
        <p className="mb0">Dinner;American;Burger</p>
        <p className="mb0">(09:00~22:00)</p>
        <span className="w80 d-ib pull-left">Area:</span>
        <span className="w300 d-ib">Xihu</span>
        <br/>
        <span className="w80 d-ib pull-left">Address:</span>
        <span className="w300 d-ib">Yuhang xxRoad</span>
        <br/>
        <span className="w80 d-ib pull-left">Traffic:</span>
        <span className="w300 d-ib">5 mins walk from Wulin Square subway station.5 mins walk from Wulin Square subway station.</span>
        <br/>
        <span className="w80 d-ib pull-left">Tel:</span>
        <span className="w300 d-ib">+8613767768954</span>
        <br/>
        <span className="w80 d-ib pull-left">Price:</span>
        <span className="w300 d-ib">$100</span>
        <br/>
        <span className="w80 d-ib pull-left">Cards:</span>
        <span className="w300 d-ib">Alipay/Wechat Pay</span>
        <br/>
        <span className="w80 d-ib pull-left">Web:</span>
        <span className="w300 d-ib">www.xoshop.com</span>
        <br/>
        <span className="w380 d-ib">Description: This shop is especially 5 mins walk from Wulin Square subway station.5 mins walk from Wulin Square subway station. 5 mins walk from Wulin Square subway station.5 mins walk from Wulin Square subway station. 5 mins walk from Wulin Square subway station.5 mins walk from Wulin Square subway station.</span>
      </div>
    )
  }
}
export default American;