import React, { Component } from "react";

import { Carousel, WingBlank } from 'antd-mobile';



export default class App extends Component {
    state = {
        data: ['group5/M00/56/D4/CgF38V021xmAArffAAHCwoPd8pw190', 'group8/M00/22/53/CgF3810kVoiAFRH9AAEJLebuzNg678', 'group11/M00/1E/1F/CgF381v7aGCAAgrBAADX9F2OXsU107']
    }
    // 轮播
    render() {
        return (
            <WingBlank>
                <Carousel autoplay infinite>
                    {this.state.data.map(val => (
                        <a key={val}
                            style={{ display: 'inline-block', width: '100%'}}>
                            <img
                                src={`https://img.eloancn.com/${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}

                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}



