import React from "react";
// import "../../assets/iconfont/iconfont.css";

function listMine2() {
    return (
        <main className="list-box" >
            <ul className="mana-detail-list" style={{marginTop:"1.146667rem"}}>
                <li className="mana-child-li delay">
                    <a alt="跳转详情页" href="">
                        <div className="mana-list-t clearfix">
                            <p className="fl">C 用于从事路修...
                            <span class="syfslist">还本付息</span>
                            <span class="syfslist">封90天</span>
                            </p>
                         
                            <i class="select-btn  arrow" data-id="Mt3p1YObPiU="></i>
                        </div>
                        <div className="mana-buy-list">
                            <ol className="mana-list-ol clearfix">
                                <li style={{width: '40%'}}>
                                    <p className="mana-color-red"><span className="mana-ol-num1">9.9</span>
                                        <span className="mana-ol-num2">%</span>
                                    </p>
                                    <p>协议约定年化利率</p>
                                </li>
                                <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1">12</span></p>
                                    <p className="mana-num2">借款期限（月）</p>
                                </li>
                                    <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1" style={{marginLeft:'1.633rem'}}>4.84</span></p>
                                    <p className="mana-num2"><span style={{marginLeft:'.433rem'}}>剩余可投 (万元) </span></p>
                                </li>
                                {/* <li className="clearfix" style={{width: '30%'}}>
                                    <p className="mana-buy-btn wmps-sub" style={{marginTop: '0.32rem'}}>出借</p>
                                </li> */}
                            </ol>
                        </div>
                    </a>
                </li>
                {/* 2li */}
      
                
            </ul>
        </main>
    );
}
export default listMine2;