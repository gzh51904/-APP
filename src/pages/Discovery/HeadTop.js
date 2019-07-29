import React from "react";

function menu() {
  return (
    <menu className="menu-top">
        <ul className="menu-mian">
            <li>
                <img src={require("../../assets/mineimg/c1.png")}/>
                <p>每日签到</p>
            </li>
            <li>
            <img src={require("../../assets/mineimg/c2.png")}/>
                <p>风险教育</p>
            </li>
            <li>
            <img src={require("../../assets/mineimg/c3.png")}/>
                <p>翼龙社区</p>
            </li>
            <li>
            <img src={require("../../assets/mineimg/c4.png")}/>
                <p>联系客服</p>
            </li>
        </ul>
    </menu>
  );
}
export default menu;