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
import "./home.scss" 



class Home extends Component{
    constructor(){
        super();
        this.state = {
                                                                   
        }
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
                <Rookietwo />
                <Logo />
                <News />
                <Homelast />
            </section>
        )
    }
}

export default Home;