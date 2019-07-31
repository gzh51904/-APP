import React from 'react'

function Mine_list() {
    return (
        <div className="minelist">
            <ul className="acc-list">
                <li className="clearfix" id="myWmpsplus">
                    <p className="float-left"><i className="pre-i pre-wmpsplus"></i>翼农惠享</p>
                    <p className="my-red clearfix"><strong id="z-winplus"></strong><span className="float-right redBagArrow"></span></p>
                </li>
                <li className="clearfix" id="myWmps">
                    <p className="float-left"><i className="pre-i pre-i1"></i>翼农计划</p>
                    <p className="my-red clearfix"><strong id="z-win"></strong><span className="float-right redBagArrow"></span></p>
                </li>
                <li className="clearfix" id="mySesame">
                    <p className="float-left"><i className="pre-i pre-i2"></i>芝麻开花</p>
                    <p className="my-red clearfix"><strong id="z-sesame"></strong><span className="float-right redBagArrow"></span></p>
                </li>
                <li className="clearfix" id="myTailor">
                    <p className="float-left"><i className="pre-i pre-itailor"></i>私人定制</p>
                    <p className="my-red clearfix"><strong id="z-sesame"></strong><span className="float-right redBagArrow"></span></p>
                </li>
                <li className="fgt"></li>
                <li className="clearfix" id="transRecord">
                    <p className="float-left"><i className="pre-i pre-i3"></i>交易记录</p>
                    <p className="my-red clearfix"><strong id="z-funds"></strong><span className="float-right redBagArrow"></span></p>
                </li>
                <li className="clearfix" id="myRewards">
					<p className="float-left"><i className="pre-i pre-i4"></i>我的奖励</p>
					<p className="my-red clearfix"><strong id="z-reward"></strong><span className="float-right redBagArrow"></span></p>
				</li>
                <li className="clearfix" id="security">
					<p className="float-left"><i className="pre-i pre-i5"></i>我的设置</p>
					<span className="float-right last"></span>
				</li>
            </ul>
        </div>
    )
}
export default Mine_list;