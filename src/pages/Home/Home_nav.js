import React from 'react';

function Home_nav() {
    return (
        // 导航栏
        <div className="homenav">

            <dl>
                <dt><img src={require("../../assets/homeimg/homenav1.jpg")} /></dt>
                <dd>新手福利</dd>
            </dl>
            <dl>
                <dt><img src={require("../../assets/homeimg/homenav2.jpg")} /></dt>
                <dd>运营月报</dd>
            </dl>
            <dl>
                <dt><img src={require("../../assets/homeimg/homenav3.jpg")} /></dt>
                <dd>信息披露</dd>
            </dl>
            <dl>
                <dt><img src={require("../../assets/homeimg/homenav4.jpg")} /></dt>
                <dd>厦门存管</dd>
            </dl>
        </div>
            
     
    );
}
export default Home_nav;

