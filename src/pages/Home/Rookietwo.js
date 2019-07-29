import React, { Component } from 'react'
import axios from 'axios'

class Rookietwo extends Component {

    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    async componentDidMount() {
        let data = [];
        data = await axios.get('http://localhost:1904/newcomer').then(
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
    // 新人专享
    render() {
        return (
            <div>
                {
                    this.state.content.map(item => {
                        return (
                            <div className="home_rookie">
                                <p><span>{item.titel}</span><i></i></p>
                                <h3>{item.rate}<span>%</span></h3>
                                <p className="rookie_notice">
                                    <span className="firstspan"><i></i>{item.time}</span>
                                    <span><i></i>每日利息</span>
                                    <span className="lastspan"><i></i>{item.starting}</span>
                                </p>
                            </div>
                            
                            
                        )
                    })

                }
            </div>

        );
    }

}

export default Rookietwo;