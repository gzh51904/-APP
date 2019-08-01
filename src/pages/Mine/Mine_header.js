import React from 'react';


function Mine_header() {
    return (
        <div className="mineheader">

            {/* 顶部 */}
            <div className="my-head-top">
                <div className="vip-main">
                    <img src={require("../../assets/mine_img/1.png")} />
                </div>
                <p className="username">亲爱的用户您好！</p>
                <p className="eye">
                    <img src={require("../../assets/mine_img/2.png")} />
                </p>
            </div>


            {/* 中间部分 */}
            <div className="head-list clearfix">
                <div className="head-left">
                    <p id="yesterdayEarning" className="head-total openEye">0.00</p>
                    <p className="head-total closeEye">***</p>
                    <p>昨日收息(元)</p>
                </div>
                <ul className="head-right">
                    <li>
                        <span className="preBg"></span>
                        <span className="preBg2"></span>
                        <p>总资产(元): <span id="total_amount" className="openEye">0.00</span><span className="closeEye">***</span></p>
                    </li>
                    <li>
                        <span className="preBg2"></span>
                        <p>可用余额(元): <span id="useableAmt" className="openEye">0.00</span><span className="closeEye">***</span></p>
                    </li>
                    <li>
                        <span className="preBg3"></span>
                        <p>冻结金额(元): <span id="dongAmount" className="openEye">0.00</span><span className="closeEye">***</span></p>
                    </li>
                    <li id="totalEarningTip">
                        <p>累计回报(元): <span id="totalEarning" className="openEye">0.00</span><span className="closeEye">***</span></p>
                        <span className="preBg4"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Mine_header;