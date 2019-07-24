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
    // this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return (
      <div className="App">
        <Home/>
        <Product/>
        <Discovery/>
        <Mine/>
      </div>
    );
  }
  
}

export default App;
