import React,{Component} from "react";
// import "../../assets/iconfont/iconfont.css";
const axios = require('axios');


class listMine4 extends Component{
    constructor(){
        super();
        this.state = {
            content: []
        }
    }
    async componentDidMount() {
        let data =[];
        data = await axios.get('http://localhost:1904/sirendingzhi').then(
            (res) => {
            return res
         }).catch(
            (err)=>{
                return err
            }
        )
        this.setState({

            content: data.data.data
            
        })
        // console.log(data)
    }

    render(){
    return (
        <main className="list-box" >
            <ul className="mana-detail-list">
            {this.state.content.map((item,idx)=>{
                    return(
                <li className="mana-child-li delay" key={idx}>
                    
                        <div className="mana-list-t clearfix">
                            <p className="fl" style={{width:"8.2rem"}}><span style={{fontWeight:"bold"}}>{item.creditImg}</span>
                            <span style={{marginLeft:".16667rem"
                        }}>{item.title}</span>
                            <span className="syfslist">还本付息</span>
                            <span className="syfslist">封90天</span>
                            </p>
                         
                            {/* <i className="select-btn  arrow" data-id="Mt3p1YObPiU="></i> */}
                            <input style={{margin:'19px 0 0 15px'}} type="checkbox"/>
                        </div>
                        <div className="mana-buy-list">
                            <ol className="mana-list-ol clearfix">
                                <li style={{width: '40%'}}>
                                    <p className="mana-color-red"><span className="mana-ol-num1">9.9</span>
                                        <span className="mana-ol-num2">%</span>
                                    </p>
                                    <p>协议约定年化利率</p>
                                </li>
                                <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1">12</span></p>
                                    <p className="mana-num2">借款期限（月）</p>
                                </li>
                                    <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1" style={{marginLeft:'1.633rem'}}>{item.surplusAmount}</span></p>
                                    <p className="mana-num2"><span style={{marginLeft:'.433rem'}}>剩余可投 (万元) </span></p>
                                </li>
                                {/* <li className="clearfix" style={{width: '30%'}}>
                                    <p className="mana-buy-btn wmps-sub" style={{marginTop: '0.32rem'}}>出借</p>
                                </li> */}
                            </ol>
                        </div>
                    
                </li>
               
                )
            })}
                
            </ul>
        </main>
    );
      }
}
export default listMine4;