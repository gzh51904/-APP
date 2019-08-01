import React, { Component } from "react";

import "./chujie.scss";
class chujie extends Component {
  constructor() {
    super();
    this.state = {};
  }
  toproduct(){
	this.props.history.push("/product/main")
  }
  render() {
    return (
      <div className="chujie" style={{background: '#fff'}}>
      <div className="open-main" style={{paddingBottom: '1.85rem'}}>
		<div className="open-head">
			<span className="iconfont iconfanhui" onClick={this.toproduct.bind(this)}></span>
			<img src={require("../../assets/mineimg/cun1.png")} alt=""/>
		</div>
		<div className="openPadding">
			<img src={require("../../assets/mineimg/_cun2.png")} alt="" className="imgCun1"/>
			<img src={require("../../assets/mineimg/cun3.png")} alt="" className="imgCun2"/>
		</div>
		<div className="openPadding">
			<div className="cunPad1">
				<img src={require("../../assets/mineimg/cun4.png")} alt="" className="imgCun3"/>
			</div>
			<ul className="cunTab clearfix">
				<li className="chooseLi chooseLi1 tabShow">我是新用户</li>
				<li className="chooseLi chooseLi2">我是老用户</li>
			</ul>
			<ul className="cunTab2">
				<li className="cunTab2li cunTabli1 cunTabShow">
					<img src={require("../../assets/mineimg/haha.jpeg")} alt=""/>
				</li>
			
			</ul>
		</div>
	</div>
	<div className="open-btn">
		<button>去开通账户</button>
	</div>
      </div>
      
    );
  }
}
export default chujie;
