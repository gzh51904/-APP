import React, { Component } from "react";
import {withRouter } from 'react-router-dom';


// import "../../assets/iconfont/iconfont.css";



class head extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: 0,
            nav: [{
                idx: 0,
                name: "Main",
                path: "/main",
                title: "翼龙惠享",
            },
            {
                idx: 1,
                name: "Main2",
                path: "/main2",
                title: "翼农计划",
            },
            {
                idx: 2,
                name: "Main3",
                path: "/main3",
                title: "芝麻开花",
            },
            {
                idx: 3,
                name: "Main4",
                path: "/main4",
                title: "私人定制",
            },]
        };
    }
    hanClick(url,idx) {
        // console.log(this.state)
        // this.state.currentItem = idx;
        this.props.history.push('/product'+ url);

        this.setState({
            currentItem : idx
        })
    }
    render() {
        // console.log('App.props', this.props)
        return (
            <header className="header">
                <ul className="mana-head clearfix">
                    {this.state.nav.map((item,idx) => {

                        return (
                            <li style={{ width: '25%' }} key={idx} 
                            onClick={this.hanClick.bind(this,item.path,item.idx)} 
                            className={this.state.currentItem === item.idx ? 'active' : ''}
                            >
                                <p>{item.title}</p>
                                <span key={item.idx}  className={this.state.currentItem === item.idx ? 'span2' : ''} ></span>
                            </li>
                        )


                    })
                    }

                </ul>



            </header>
        );
    }
}
head = withRouter(head);
export default head;
