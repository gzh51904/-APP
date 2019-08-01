import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './detail.scss';
import { connect } from 'react-redux';//添加redux仓库
import {showAction,hideAction} from '../../store/LoginAction';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            content : [],
            nowid : [],
        }
    }
    
    async componentWillMount() {
        let {hideFoot} = this.props;
        hideFoot();//隐藏底部路由
        let nowId = this.props.location.state.id;
        let data = await axios.get('http://localhost:1904/zixun/' + nowId).then(
            (res) => {
                return res;
            }
        ).catch(
            (err) => {
                return err;
            }
        )
        this.setState({
            content: data.data.data
        })
        // console.log(data);
        
        this.setState({
            nowid : nowId
        })
    }
    componentWillUnmount () {
        let {showFoot} = this.props;
        showFoot();//销毁组件后恢复底部路由
    }
    // 返回首页
    backH(){
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className='Article'>
                {
                    this.state.content.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="top">
                                    <img onClick={this.backH.bind(this)} src={require(`../../assets/homeimg/back.png`)} alt="" />
                                    <span>内容详情</span>
                                </div>
                                <h1>{item.title}</h1>
                                <p className="author">作者：{item.author}</p>
                                <img className="contentImg" src={require(`../../assets/homeimg/${item.imgurl}`)} alt=""/>
                                <div className="content">
                                    {item.content}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
   
}
const mapStateToProps = state => {
    console.log(state.show.showStatus);
    return{
      show:state.show.showStatus
    }
  }
const mapDispatchToProps = dispatch => {
    return{
        showFoot: () => dispatch(showAction()),
        hideFoot:() => dispatch(hideAction())
    }
}
Detail = connect(mapStateToProps,mapDispatchToProps)(Detail);
Detail = withRouter(Detail);
export default Detail;