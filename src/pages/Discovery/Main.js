import React from 'react';
function main(){
    return(
        <footer className="discovery-main">
            <p className="main-p">
                <span className="fl size">风险教育</span>
                <span className="fr size2">查看全部></span>
            </p>
            <ul className="list-ul">
                <li>
                    <p className="fl lie-p">
                    <img src={require("../../assets/mineimg/b1.png")}/>
                    </p>
                    <div>
                    <p className="fl lie-p2">    
                         觉得余额宝收益低 不如看看这几种银行存款产品 
                    </p>
                    <p className="lie-p3">
                    <span className="fl">财富3000问  07-22</span>
                    <span className="fr">
                    <img src={require("../../assets/mineimg/a2.png")}/>
                    2
                    </span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a1.png")}/>
                    53
                    </span>
                    </p>
                    </div>
                </li>
                <li>
                    <p className="fl lie-p">
                    <img src={require("../../assets/mineimg/b2.png")}/>
                    </p>
                    <div>
                    <p className="fl lie-p2">    
                         银行理财不再保本 ，投资需谨慎 
                    </p>
                    <p className="lie-p3">
                    <span className="fl">财富3000问  07-19</span>
                    <span className="fr">
                    <img src={require("../../assets/mineimg/a2.png")}/>
                    19
                    </span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a1.png")}/>
                    435
                    </span>
                    </p>
                    </div>
                </li>
                <li>
                    <p className="fl lie-p">
                    <img src={require("../../assets/mineimg/b3.png")}/>
                    </p>
                    <div>
                    <p className="fl lie-p2">    
                         已经办理社保还要购买商业养老保险吗？ 
                    </p>
                    <p className="lie-p3">
                    <span className="fl">财富3000问  07-17</span>
                    <span className="fr">
                    <img src={require("../../assets/mineimg/a2.png")}/>
                    10
                    </span>
                    <span className="fr sp2">
                    <img src={require("../../assets/mineimg/a1.png")}/>
                    60
                    </span>
                    </p>
                    </div>
                </li>
            </ul>
        </footer>
    );
}
export default main