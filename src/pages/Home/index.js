import React,{Component} from 'react'
// import { Carousel } from 'antd';
import Lunbo from "./Lunbo"
import Home_nav from './Home_nav'
import Split from './Split'
import Turnover from './Turnover'
import Notice from './Notice'
import Rookie from './Rookie'
import Rookietwo from './Rookietwo'
import Logo from './Logo'
import News from './News'
import Homelast from './Homelast'
import "./home.scss" ;
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';//添加redux仓库



class Home extends Component{
    constructor(){
        super();
        this.state = {
                                                                   
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'CHANGEHEADER',
            headerComponent: 'home',
        })
    }
    render(){
        return(
            <section className="app_home">
                <Lunbo />
                <Home_nav />
                <Split />
                <Turnover />
                <Split />
                <Notice />
                <Split />
                {/* <Rookie />
                <Split /> */}
                <Rookietwo/>
                <Logo />
                <News />
                <Homelast />
            </section>
        )
    }
}
Home = withRouter(Home);
export default connect((state)=>{
    return state
})(Home)