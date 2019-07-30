import React, { Component } from "react";
import { Route, Switch, Redirect,withRouter} from "react-router-dom";
import Home from "./pages/Home/index"; //首页
import Product from "./pages/Product/index"; //产品
import Discovery from "./pages/Discovery/index"; //发现
import Mine from "./pages/Mine/index"; //我的
import Login from "./pages/Login/index";
import Register from "./pages/Register/index"; //注册
import "./assets/css/base.css";
import "./css/foot.scss";
import "./assets/iconfont/iconfont.css";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem:0,
      navs: [
        {
          id:0,
          name: "Home",
          path: "/home",
          title: "首页",
          icon:'iconfont iconxuanzhongshangcheng'
        },
        {
          id:1,
          name: "Product",
          path: "/product",
          title: "产品",
          icon:'iconfont iconchanpinmoren'
        },
        {
          id:2,
          name: "Discovery",
          path: "/discovery",
          title: "发现",
          icon:'iconfont iconfind'
        },
        {
          id:3,
          name: "Mine",
          path: "/register",
          title: "我的",
          icon:'iconfont iconmine'
        }
      ]
    };
  }
  handleClick(url,id){
    this.props.history.push(url);
    this.state.currentItem = id;
    // console.log(this.props)
  }

  render() {
    return (
      <section className="app">
      {/* 路由配置 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/mine" component={Mine} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/404" render={() => <div>oh no 404</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect from="/*" to="/404" />
        </Switch>

        {/* foot导航 */}
        <footer className="app_foot">
          <nav>
            {this.state.navs.map(item => {
              return (
                <li
                  className="list_item"
                  key={item.id}
                  onClick={this.handleClick.bind(this,item.path,item.id)}
                >
                  <a href="javascript:;" className={this.state.currentItem === item.id?'active':''}>
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

App = withRouter(App);
export default App;
