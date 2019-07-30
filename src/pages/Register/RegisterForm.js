import React from "react";
import axios from 'axios';
import {withRouter} from "react-router-dom";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      random: []
    }
  }

  randomCode() {
    let html = '0987654321qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP';
    //随机数的范围：0-str.length-1
    // console.log(html[2]);
    let res = '';
    for (var i = 0; i < 4; i++) {
      var now = parseInt(Math.random() * html.length);//0-str.length-1
      res += html[now];
    }
    console.log(res);//四位随机数
    // return res;//4.返回值
    this.state.random = res;
    this.refs.randomC.innerHTML = res
  }

  async sure() {
    // console.log(123)
    let phone = this.refs.phone.value;
    let psw = this.refs.psw.value;
    let randomC = this.refs.randomC.innerHTML;
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      alert("手机号码有误，请重填");
      return false;
    }
    if (randomC !== this.state.random) {
      console.log(randomC,this.state.random)
      alert('验证码错误！')
      return
    }
    // 查询数据库是否存在该用户名
    let uName = await axios.get('http://localhost:1904/appReg/' + phone);
    let uPsw = await axios.get('http://localhost:1904/appReg/' + psw);
    console.log(uName);
    console.log(uPsw);
    if(uName === phone){
      alert("该手机号已注册!")
      return
    }
    // 插入数据库
    let newData = await axios.post('http://localhost:1904/appReg',{username:phone,psw:psw});
    console.log(newData.data.msg)
    if(newData.data.msg == "success"){
      alert('注册成功');
      this.props.history.push('/login');
    }
  }
  alreadyReg(){
    this.props.history.push('/login');
  }

  render() {
    return (
      <main className="main">
        <form action="" className="register_form">
          {/* 手机号 */}
          <div className="phone">
            <div className="phone_icon">
              <i className="iconfont iconcontextphone" />
            </div>
            <input
              ref="phone"
              type="number"
              className="phone_input"
              placeholder="请输入11位手机号码"
            />
            <div className="phone_clear">
              <i className="iconfont iconic_searchclosed" />
            </div>
          </div>
          {/* 密码 */}
          <div className="phone">
            <div className="phone_icon">
              <i className="iconfont iconcontextphone" />
            </div>
            <input
              ref="psw"
              type="password"
              className="phone_input"
              placeholder="请输入密码"
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
            {/* <input
                type="number"
                className="sms_input"
                placeholder="验证码"
              /> */}
            <input type="text" ref="randomCd" placeholder="请输入验证码" className="sms_input" />
            <div className="sms_clear">
              <i className="iconfont iconic_searchclosed" />
            </div>
            <div className="sms_send">
              <div id="canvas" ref="randomC" onClick={this.randomCode.bind(this)} style={{ width: "100px", height: "80%", marginTop: '6px', lineHeight: '47px' }}>点击刷新</div>
            </div>
          </div>
          {/* 确认 */}
          <div className="nextOperation btn">
            <input onClick={this.sure.bind(this)} className="sureBtn" type="button" value="确认" />
          </div>
          <div>
          <input onClick={this.alreadyReg.bind(this)} className="alreadyRegBtn" type="button" value="已注册，马上去登录" />
          </div>
          {/* 《隐私条款》 */}
          <div className="register_agreement">
            <span>《隐私条款》 《翼龙贷注册协议》</span>
          </div>
        </form>
      </main>
    );
  }
}

RegisterForm = withRouter(RegisterForm);
export default RegisterForm;
