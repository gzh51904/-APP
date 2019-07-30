import React,{Component} from "react";
// import "../../assets/iconfont/iconfont.css";
const axios = require('axios');


class listMine extends Component{
    constructor(){
        super();
        this.state = {
            content: []
        }
    }
    async componentDidMount() {
        let data =[];
        data = await axios.get('http://localhost:1904/enjoy').then(
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
        console.log(data)
    }


    render(){

    return (
        <main className="list-box" >
            <ul className="mana-detail-list">
                {this.state.content.map((item,idx)=>{
                    return(
             
                <li className="mana-child-li delay" key={idx}>
                   
                        <div className="mana-list-t clearfix">
                            <p className="fl">{item.title}</p>
                            <p className="fl">剩余可投:<span>{item.surplusAmount}</span></p>
                        </div>
                        <div className="mana-buy-list">
                            <ol className="mana-list-ol clearfix">
                                <li style={{width: '40%'}}>
                                    <p className="mana-color-red"><span className="mana-ol-num1">{item.num1}</span>
                                        <span className="mana-ol-num2">{item.num2}</span>
                                    </p>
                                    <p>预期年化利率</p>
                                </li>
                                <li style={{width: '30%'}}>
                                    <p className="mana-color-black"><span className="mana-ol-num1">{item.time}</span></p>
                                    <p className="mana-num2">锁定期（月）</p>
                                </li>
                                <li className="clearfix" style={{width: '30%'}}>
                                    <p className="mana-buy-btn wmps-sub" style={{marginTop: '0.32rem'}}>出借</p>
                                </li>
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
export default listMine;