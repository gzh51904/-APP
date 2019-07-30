import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
// 1.引入路由
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './pages/Home/home';
import Product from './pages/Product/product';
import Discovery from './pages/Discovery/discovery';
import Mine from './pages/Mine/mine';

let AllRouter = {
  Home,
  Product,
  Discovery,
  Mine
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItem:0,
      navs: [
        {
          name: 'Home',
          path: '/home',
          // icon: 'home',
          title: '首页'
        },
        {
          name: 'Product',
          path: '/product',
          // icon: 'bars',
          title: '产品'
        },
        {
          name: 'Discovery',
          path: '/discovery',
          // icon: 'shopping-cart',
          title: '发现'
        },
        {
          name: 'Mine',
          path: '/mine',
          // icon: 'user',
          title: '我的'
        }
      ],
      current:'Home'
    }
    // 改变This指向
    handleClick(url,id){
      this.props.history.push(url);
      this.state.currentItem = id;
    }
  }
  render(){
    return (
      <div className="App">
        {/* 路由配置 */}
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='product' component={Product}/>
          <Route path='discovery' component={Discovery}/>
          <Route path='mine' component={Mine}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path='/404' render={()=><div>oh shit!404</div>}/>
          <Redirect from="/" to="/home"/>
          <Redirect from='/*' to='/404'/>
        </Switch>
        {/* 导航 */}
        <nav>
          {
            this.state.navs.map(item=>{
              return (
                <li key={item.id}>
                  <a>

                  </a>
                </li>
              )
            })
          }
        </nav>
      </div>
    );
  }
  
}

export default App;
