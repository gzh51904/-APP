import React from 'react'

function News() {
    return (
        <div className="home_news">
            <h3>翼龙咨询</h3>
            <ul>
                <li>
                    <img src={require("../../assets/homeimg/homenews1.jpg")} />
                    <span>牛津大学教授到翼龙贷实地调研</span>
                </li>
                <li>
                    <img src={require("../../assets/homeimg/homenews2.jpg")} />
                    <span>陆奇捷：辨证认识农村贷款风险</span>
                </li>
                <li>
                    <img src={require("../../assets/homeimg/homenews3.jpg")} />
                    <span>牛津大学教授到翼龙贷实地调研</span>
                </li>
                <li>
                    <img src={require("../../assets/homeimg/homenews4.jpg")} />
                    <span>牛津大学教授到翼龙贷实地调研</span>
                </li>
            </ul>
        </div>
    )
}

export default News;