import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";

class News extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    // 详情文章
    detail(id){
        this.props.history.push({pathname:'/detail/' + id,state:{id:id}});
        console.log(id);
    }

    async componentDidMount() {
        let data = [];
        data = await axios.get('http://localhost:1904/zixun').then(
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
        // console.log(data.data.data);
        console.log(this.props.isShowFooter)

    }


    render() {
        
        return (
            <div className='home_news'>
                <h3>翼龙咨询</h3>
                <ul>
                    {
                        this.state.content.map((item) => {
                            return (
                                <li onClick={this.detail.bind(this,item.id)} key={item.id} limit >
                                    <img src={require(`../../assets/homeimg/${item.imgurl}`)} />
                                    <span>{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

News = withRouter(News);
export default News