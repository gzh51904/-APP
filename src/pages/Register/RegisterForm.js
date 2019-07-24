import React from "react";
function RegisterForm() {
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
            <input type="button" value="下一步"/>
        </div>
        {/*  */}
        <div className="register_agreement">
            <a href="javascript:;">《隐私条款》 《翼龙贷注册协议》</a>
        </div>
      </form>
    </main>
  );
}
export default RegisterForm;
