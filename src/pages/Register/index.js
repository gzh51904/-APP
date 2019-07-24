import React, { Component } from "react";
import Back from './Back.js';
import Title from './Title.js';

// import Head from "./Head.js";
import RegisterForm from "./RegisterForm.js";
import "./register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="app_register">
        <Back/>
        <Title/>
        {/* <Head /> */}
        <RegisterForm />
      </section>
    );
  }
}
export default Register;
