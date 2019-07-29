import React from 'react';


function Mine_header() {
    return (
        <div className="mineheader">

            {/* 顶部 */}
            <div className="my-head-top">
                <div className="vip-main">
                    <img src={require("../../assets/mine_img/1.png")} />
                </div>
                <p className="username">朱伟弟弟</p>
                <p className="eye">
                    <img src={require("../../assets/mine_img/2.png")} />
                </p>
            </div>


            {/* 中间部分 */}
            <div class="head-list clearfix">
                <div class="head-left">
                    <p id="yesterdayEarning" class="head-total openEye">0.00</p>
                    <p class="head-total closeEye">***</p>
                    <p>昨日收息(元)</p>
                </div>
                <ul class="head-right">
                    <li>
                        <span class="preBg"></span>
                        <span class="preBg2"></span>
                        <p>总资产(元): <span id="total_amount" class="openEye">0.00</span><span class="closeEye">***</span></p>
                    </li>
                    <li>
                        <span class="preBg2"></span>
                        <p>可用余额(元): <span id="useableAmt" class="openEye">0.00</span><span class="closeEye">***</span></p>
                    </li>
                    <li>
                        <span class="preBg3"></span>
                        <p>冻结金额(元): <span id="dongAmount" class="openEye">0.00</span><span class="closeEye">***</span></p>
                    </li>
                    <li id="totalEarningTip">
                        <p>累计回报(元): <span id="totalEarning" class="openEye">0.00</span><span class="closeEye">***</span></p>
                        <span class="preBg4"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Mine_header;