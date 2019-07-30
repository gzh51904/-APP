import React, { Component } from "react";
import Head from "./Head.js";
import Main from "./Main.js";
import Foot from "./Foot.js";
import "./login.scss";
class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="app_login" style={{background: '#fff'}}>
        <Head />
        <Main />
        <Foot />
      </section>
    );
  }
}
export default Login;
