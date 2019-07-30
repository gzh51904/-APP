import React from 'react';
function main3(){
    return(
        <footer className="discovery-main" style={{height:'7.506667rem'}}>
            <p className="main-p">
                <span className="fl size">
                <img src={require("../../assets/mineimg/g3.png")}/>
                   <em>社区热门</em>
                    </span>
                <span className="fr size2">查看全部></span>
            </p>
            <ul className="ul-list">
                <li className="list-1">
                    <h3 className="lie-g">增资专项进展</h3>
                    <p className="lie-p3">
                    <span className="fl">2019-07-01</span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a2.png")} alt="图片"/>
                    823
                    </span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a1.png")} alt="图片"/>
                    62186
                    </span>
                    </p>
                </li>
                <li className="list-1">
                    <p className="lie-g">翼龙贷陆奇捷： 辨证认识农村贷款风险 农村</p>
                    <p className="lie-p3">
                    <span className="fl">2019-07-17</span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a2.png")} alt="图片"/>
                    17
                    </span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a1.png")} alt="图片"/>
                    1714
                    </span>
                    </p>
                </li>
                <li className="list-1 list-9">
                    <p className="lie-g">炎炎夏日，晒回报。蒸蒸日上，收益高！</p>
                    <p className="lie-p3">
                    <span className="fl">2019-07-01</span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a2.png")} alt="图片"/>
                    2
                    </span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a1.png")} alt="图片"/>
                    53
                    </span>
                    </p>
                </li>
                
            </ul>
        </footer>
    );
}
export default main3