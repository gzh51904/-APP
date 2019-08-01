import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import {connect} from 'react-redux';

import Home from "./pages/Home/index"; //首页
import Product from "./pages/Product/index"; //产品
import Discovery from "./pages/Discovery/index"; //发现
import Mine from "./pages/Mine/index"; //我的
import Login from "./pages/Login/index";
import Register from "./pages/Register/index"; //注册
<<<<<<< HEAD
import Detail from "./pages/Detail/index";//详情
=======
import xiangqin from "./pages/xiangqin/index"; //xiangqin
import chujie from "./pages/chujie/index";
>>>>>>> 1fb86c618aa612ddac625bee3c9f2a54dba719d3

import "./assets/css/base.css";
import "./css/foot.scss";
import "./assets/iconfont/iconfont.css";
import "./App.css";
class App extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      currentItem: 0,
      navs: [
        {
          id: 0,
          name: "Home",
          path: "/home",
          title: "首页",
          icon: 'iconfont iconxuanzhongshangcheng'
        },
        {
          id: 1,
          name: "Product",
          path: "/product",
          title: "产品",
          icon: 'iconfont iconchanpinmoren'
        },
        {
          id: 2,
          name: "Discovery",
          path: "/discovery",
          title: "发现",
          icon: 'iconfont iconfind'
        },
        {
          id: 3,
          name: "Mine",
          path: "/register",
          title: "我的",
          icon: 'iconfont iconmine'
        }
      ]
    };
  }
  handleClick(url, id) {
    this.props.history.push(url);
    this.state.currentItem = id;
  }

  render() {
    let {footShow} = this.props;
    return (
      <section className="app">
<<<<<<< HEAD
        {/* 路由配置 */}
        {/* <Provider store={store}> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/discovery" component={Discovery} />
            <Route path="/mine" component={Mine} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/detail" component={Detail} />
            <Route path="/404" render={() => <div>oh no 404</div>} />
            <Redirect from="/" to="/home" exact />
            <Redirect from="/*" to="/404" />
          </Switch>
        {/* </Provider> */}
=======
      {/* 路由配置 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/mine" component={Mine} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/xiangqin" component={xiangqin} />
          <Route path="/chujie" component={chujie} />
          <Route path="/404" render={() => <div>oh no 404</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect from="/*" to="/404" />
        </Switch>
>>>>>>> 1fb86c618aa612ddac625bee3c9f2a54dba719d3

        {/* foot导航 */}
        <footer className={footShow ? 'app_foot app_foot_show' : 'footShow app_foot_hide'} >
          <nav>
            {this.state.navs.map(item => {
              return (
                <li
                  className="list_item"
                  key={item.id}
                  onClick={this.handleClick.bind(this, item.path, item.id)}
                >
                  <a href="javascript:;" className={this.state.currentItem === item.id ? 'active' : ''}>
                    <i className={item.icon} />
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </nav>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.show.showStatus);
  return{
    footShow:state.show.showStatus
  }
}

App = connect(mapStateToProps)(App)
App = withRouter(App);
export default App;
