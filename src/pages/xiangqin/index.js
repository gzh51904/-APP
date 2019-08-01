import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import "./xiangqin.scss"
const axios = require('axios');
class xianqin extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }
    async componentDidMount() {
        console.log("id:",this.props.location.state.id)
        // let  {id}  = this.props.match.params;
        //   console.log(id)
        let id = this.props.location.state.id;
        // let data = [];
        let data = await axios.get('http://localhost:1904/enjoy/'+id).then(
            (res) => {
                return res
            }).catch(
                (err) => {
                    return err
                }
            )
// console.log(data.data.data);
        this.setState({

            content: data.data.data

        })
      
    }
    backto(){
        this.props.history.push("/product/main")
    }
    toproduct(){
        this.props.history.push("/chujie/")
      }
    render() {
        return (
            <section className="xianqin">
                {this.state.content.map(item=>{
                    return(
                <div className="detail-main" key={item.id}>
                    <div className="detail-head">
                   
                        <ul className="detail-h-list clearfix">
                            <li id="title" className="iconfont iconfanhui" onClick={this.backto.bind(this)}></li>
                            <li className="enddate">{item.title}</li>
                        </ul>
                        <div className="det-per" style={{ float: 'left', paddingBottom: '0.45rem' }}>
                            <h3 id="interests" className="myWmpsH3">{item.num1}<span>{item.num2}</span></h3>
                            <p>预期年化利率</p>
                        </div>
             
                        <div className="detail-head-dec">
                            <ul className="detail-dec-list clearfix">
                                <li>
                                    <p id="totalAmount"><span>78.89</span></p>
                                    <p>募集总额(万)</p>
                                </li>
                                <li>
                                    <p id="restAmount"><span>{item.surplusAmount}</span></p>
                                    <p>剩余可投(万)</p>
                                </li>
                                <li>
                                    <p id="strPhases"><span>{item.time}</span></p>
                                    <p>产品期限(<i id="strPhasesType">月</i>)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="detail-inv-dec">
                        <div className="detail-inv-pp">
                            <p><span>起投金额</span> &nbsp;<font id="startInvestAmt">100元，以整数倍递增</font></p>
                            <p><span>付息方式</span> &nbsp;<font id="interestPayWay">每月付息，到期还本</font></p>
                            <p><span>发布时间</span> &nbsp;<font id="strPublisheddate">2019-07-31 17:30</font></p>
                            <p><span>募集期</span> &nbsp;<font id="recruitmentPeriod">自发布之时起24小时</font></p>
                            <p><span>出借人数</span> &nbsp;<font id="useNumDesc">不限</font></p>
                            <p><span>退出方式</span> &nbsp;<font id="withdrawingDesc">自动退出/锁定期满后系统债权转让
能否转让成功具体视市场情况而定</font></p>
                            <p><span>返本时间</span> &nbsp;<font id="strReturndate">2020-02-01
最晚到账时间D+1日 24点</font></p>

                        </div>

                        <ul className="detail-dec-list detail-xi-list clearfix">
                            <li>
                                <p>计息时间</p>
                                <p id="strInterdate">2019-08-01</p>
                            </li>
                            <li>
                                <p>付息时间</p>
                                <p id="interdatePayDate">每月1日</p>
                            </li>
                            <li>
                                <p>到期时间</p>
                                <p id="outDate">2020-01-31</p>
                            </li>
                            <li className="detail-dotted1"></li>
                            <li className="detail-dotted2"></li>
                        </ul>
                    </div>
                    <div className="detail-inv-btn" onClick={this.toproduct.bind(this)}>马上出借</div>
                </div>
           
                )
            })}
            </section>
        );
    }
}
xianqin = withRouter(xianqin)
export default xianqin;