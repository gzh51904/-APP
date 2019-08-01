import React from "react";
import {withRouter} from "react-router-dom";

class LoginFrom extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }

  login(){
    alert('登陆成功!')
    this.props.history.push('/mine')
  }
  regBtn(){
    this.props.history.push('/register');
  }

  render() {
    return (
      <main className="login_box">
        <form action="" className="login_form">
          <div className="phone">
            <div className="phone_icon">
              <i className="iconfont iconcontextphone" />
            </div>
            <input
              type="number"
              className="phone_input"
              placeholder="请输入手机号/邮箱"
            />
            <div className="phone_clear">
              <i className="iconfont iconic_searchclosed" />
            </div>
          </div>
          <div className="psw">
            <div className="psw_icon">
              <i className="iconfont iconpassword" />
            </div>
            <input type="text" className="psw_input" placeholder="请输入密码" />
            <div className="psw_clear">
              <i className="iconfont iconic_searchclosed" />
            </div>
            <div className="psw_show">
              <i className="iconfont iconhide" />
            </div>
          </div>
          <div className="login_btn">
            <input type="button" onClick={this.login.bind(this)} value="登录" />
          </div>
          <div className="forget_psw">
            <a href="javascript:;" className="forget_psw_link">忘记密码</a>
            <a href="javascript:;" onClick={this.regBtn.bind(this)} className="register_link">注册</a>
          </div>
        </form>
      </main>
    );
  }
}
LoginFrom = withRouter(LoginFrom);
export default LoginFrom;
