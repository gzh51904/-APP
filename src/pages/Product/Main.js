import React from "react";
// import "../../assets/iconfont/iconfont.css";

function listMine() {
    return (
        <main className="list-box">
            <ul className="mana-detail-list">
                <li className="mana-child-li delay">
                    <a alt="跳转详情页" href="">
                        <div className="mana-list-t clearfix">
                            <p className="fl">翼农惠享5816期</p>
                            <p className="fl">剩余可投:<span>70.48</span>万元</p>
                        </div>
                        <div className="mana-buy-list">
                            <ol className="mana-list-ol clearfix">
                                <li style={{width: '40%'}}>
                                    <p className="mana-color-red"><span className="mana-ol-num1">9.5</span>
                                        <span className="mana-ol-num2">%+1%</span>
                                    </p>
                                    <p>预期年化利率</p>
                                </li>
                                <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1">12</span></p>
                                    <p className="mana-num2">锁定期（月）</p>
                                </li>
                                <li className="clearfix" style={{width: '30%'}}>
                                    <p className="mana-buy-btn wmps-sub" style={{marginTop: '0.32rem'}}>出借</p>
                                </li>
                            </ol>
                        </div>
                    </a>
                </li>
                {/* 2li */}
                <li className="mana-child-li delay">
                    <a alt="跳转详情页" href="">
                        <div className="mana-list-t clearfix">
                            <p className="fl">翼农惠享5815期</p>
                            <p className="fl">剩余可投:<span>62.48</span>万元</p>
                        </div>
                        <div className="mana-buy-list">
                            <ol className="mana-list-ol clearfix">
                                <li style={{width: '40%'}}>
                                    <p className="mana-color-red"><span className="mana-ol-num1">7.5</span>
                                        <span className="mana-ol-num2">%+1%</span>
                                    </p>
                                    <p>预期年化利率</p>
                                </li>
                                <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1">6</span></p>
                                    <p className="mana-num2">锁定期（月）</p>
                                </li>
                                <li className="clearfix" style={{width: '30%'}}>
                                    <p className="mana-buy-btn wmps-sub" style={{marginTop: '0.32rem'}}>出借</p>
                                </li>
                            </ol>
                        </div>
                    </a>
                </li>
                
            </ul>
        </main>
    );
}
export default listMine;