import React from 'react'

function Mine_list() {
    return (
        <div className="minelist">
            <ul className="acc-list">
                <li className="clearfix" id="myWmpsplus">
                    <p className="float-left"><i className="pre-i pre-wmpsplus"></i>翼农惠享</p>
                    <p className="my-red clearfix"><strong id="z-winplus"></strong><span className="float-right redBagArrow"></span></p>
                </li>
                <li class="clearfix" id="myWmps">
                    <p class="float-left"><i class="pre-i pre-i1"></i>翼农计划</p>
                    <p class="my-red clearfix"><strong id="z-win"></strong><span class="float-right redBagArrow"></span></p>
                </li>
                <li class="clearfix" id="mySesame">
                    <p class="float-left"><i class="pre-i pre-i2"></i>芝麻开花</p>
                    <p class="my-red clearfix"><strong id="z-sesame"></strong><span class="float-right redBagArrow"></span></p>
                </li>
                <li class="clearfix" id="myTailor">
                    <p class="float-left"><i class="pre-i pre-itailor"></i>私人定制</p>
                    <p class="my-red clearfix"><strong id="z-sesame"></strong><span class="float-right redBagArrow"></span></p>
                </li>
                <li class="fgt"></li>
                <li class="clearfix" id="transRecord">
                    <p class="float-left"><i class="pre-i pre-i3"></i>交易记录</p>
                    <p class="my-red clearfix"><strong id="z-funds"></strong><span class="float-right redBagArrow"></span></p>
                </li>
                <li class="clearfix" id="myRewards">
					<p class="float-left"><i class="pre-i pre-i4"></i>我的奖励</p>
					<p class="my-red clearfix"><strong id="z-reward"></strong><span class="float-right redBagArrow"></span></p>
				</li>
                <li class="clearfix" id="security">
					<p class="float-left"><i class="pre-i pre-i5"></i>我的设置</p>
					<span class="float-right last"></span>
				</li>
            </ul>
        </div>
    )
}
export default Mine_list;