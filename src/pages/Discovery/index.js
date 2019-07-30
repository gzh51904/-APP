import React,{Component} from 'react';
import Head from "./Head.js";
import HeadTop from "./HeadTop.js";
import Main from "./Main.js";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Main4 from "./Main4.js";
import "./discovery.scss";
class Discovery extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section className="app_discovery">
                     <Head/>
                     <HeadTop/>
                     <Main/>
                     <Main2/>
                     <Main3/>
                     <Main4/>
                </section>
        )
    }
}

export default Discovery;