import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


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
        // this.hanClick = this.hanClick.bind(this)
    }
    // handleClick(event) {
    //     this.setState({
    //         currentIndex: parseInt(event.currentTarget.getAttribute('index'))
    //     })
    // }
    hanClick(url,idx) {
        // console.log(this.state)
        // this.state.currentItem = idx;
        this.props.history.push('/product'+ url);
        // console.log(url)
        // console.log(this.state.currentItem )
        // console.log(this.props)
        this.setState({
            currentItem : idx
        })
        // this.setState({
        //           current:data.key,
        //         })
    }
    // handleClick(data){
    //     console.log(data);
    //     this.setState({
    //       current:data.key,
    //     })

    //     // 路由跳转
    //     // 获取点击的路由路径
    //     let currentRouter = this.state.nav.filter(item=>item.name===data.key)[0];
    //     this.props.history.push(currentRouter.path);
    //     console.log(this.props);
    //   }

    render() {
        // console.log('App.props', this.props)
        return (
            <header className="header">
                <ul className="mana-head clearfix">
                    {this.state.nav.map(item => {

                        return (
                            <li style={{ width: '25%' }} 
                            key={item.idx} 
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
