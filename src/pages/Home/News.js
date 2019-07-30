import React, { Component } from 'react'
const axios = require('axios')

class News extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }
    async componentDidMount() {
        let data = [];
        data = await axios.get('http://localhost:1904/zixun').then(
            (res) => {
                return res;
            }
        ).catch(
            (err) => {
                return err
            }
        )
        this.setState({
            content: data.data.data
        })
        console.log(data);

    }


    render() {
        return (
            <div className="home_news">
                <h3>翼龙咨询</h3>
                <ul>
                    {
                        this.state.content.map(item => {
                            return (
                                <li key={item.id} limit >
                                    <img src={require(`../../assets/homeimg/${item.imgurl}`)} />
                                    <span>{item.title}</span>
                                </li>
                            )
                        })
                    }

                    {/* <li>
                        <img src={require("../../assets/homeimg/homenews2.jpg")} />
                        <span>陆奇捷：辨证认识农村贷款风险</span>
                    </li>
                    <li>
                        <img src={require("../../assets/homeimg/homenews3.jpg")} />
                        <span>牛津大学教授到翼龙贷实地调研</span>
                    </li>
                    <li>
                        <img src={require("../../assets/homeimg/homenews4.jpg")} />
                        <span>牛津大学教授到翼龙贷实地调研</span>
                    </li> */}
                </ul>
            </div>
        )
    }

}

export default News;