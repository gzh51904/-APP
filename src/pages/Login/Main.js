import React from "react";
function LoginFrom() {
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
          <input type="button" value="登录" />
        </div>
        <div className="forget_psw">
          <a href="javascript:;" className="forget_psw_link">忘记密码</a>
          <a href="javascript:;" className="register_link">注册</a>
        </div>
      </form>
    </main>
  );
}
export default LoginFrom;
