import React, { Component } from "react";
import { Carousel, WingBlank } from 'antd-mobile';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    img: require('../../assets/homeimg/1.jpg')
                },
                {
                    id: 2,
                    img: require('../../assets/homeimg/2.jpg')
                },
                {
                    id: 3,
                    img: require('../../assets/homeimg/3.png')
                }]
        }
    }

    // 轮播
    render() {
        return (
            <WingBlank style={{minHeight:"146px"}}>
                <Carousel autoplay infinite>
                    {this.state.data.map(val => {
                        return (
                            <a key={val.id}
                                style={{ display: 'inline-block', width: '100%' }}>
                                <img
                                    src={val.img}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}

                                />
                            </a>
                        )
                        
                        })}
                </Carousel>
            </WingBlank>
        );
    }
}



