import React,{Component} from "react";
// import "../../assets/iconfont/iconfont.css";
const axios = require('axios');
class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
       username: "",//账号
       pwd: "",//密码
       pwdConfirm:'',//确认密码
       send: false//是否登录
    }
    // this.reg = this.reg.bind(this)
}
handleChange(key, val) {
  this.setState({
      [key]: val
     
  })
  // console.log(key)
}
handleGoLogin() {//去登录
  // this.props.history.push('/login')
  console.log(this.props)
}
render(){
  return (
    <main className="main">
      <form action="" className="register_form">
      {/* 手机号 */}
        <div className="phone">
          <div className="phone_icon">
            <i className="iconfont iconcontextphone" />
          </div>
          <input
            type="number"
            className="phone_input"
            placeholder="请输入11位手机号码"
            onChange={value => this.handleChange('username', value)}
          />
          <div className="phone_clear">
            <i className="iconfont iconic_searchclosed" />
          </div>
        </div>
        {/* 短信验证码 */}
        <div className="sms_code">
          <div className="sms_icon">
            <i className="iconfont iconcontextphone" />
          </div>
          <input
            type="number"
            className="sms_input"
            placeholder="验证码"
            onChange={value => this.handleChange('pwd', value)}
          />
          <div className="sms_clear">
            <i className="iconfont iconic_searchclosed" />
          </div>
          <div className="sms_send">
            <a href="javascript:;">发送验证码</a>
          </div>
        </div>
        {/* 下一步 */}
        <div className="nextOperation">
            <input type="button" value="下一步" onClick="this.reg"/>
        </div>
        {/*  */}
        <div className="register_agreement fl">
            <a href="javascript:;">《隐私条款》 《翼龙贷注册协议》</a>
            <a href="javascript:;" onClick={this.handleGoLogin.bind(this)} style={{marginLeft:" 2.2rem"}}>去登录？</a>
        </div>
      
      </form>
    </main>
  );
}
}
export default RegisterForm;
