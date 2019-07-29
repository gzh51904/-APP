import React, { Component } from "react";

// import "../../assets/iconfont/iconfont.css";

class head extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex:0,
            nav:[{
                title: "翼龙惠享",
            },
            {
                title: "翼农计划",
            },
            {
                title: "芝麻开花",
            },
            {
                title: "私人定制",
            },]
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        this.setState({
            currentIndex: parseInt(event.currentTarget.getAttribute('index'))
          })
     
      }
    render() {
        return (
            <header className="header">
                <ul className="mana-head clearfix">
               {this.state.nav.map((item,idx)=>{
                   
                   return(
                    <li style={{ width: '25%' }} key={idx} index={idx} className={this.state.currentIndex === idx ? 'active' : ''} onClick={this.handleClick}>
                    <p>{item.title}</p>
                     <span key={idx} index={idx} className={this.state.currentIndex === idx ? 'span2' : ''} ></span>
                  </li>
                   )
                    
                  
            })
        } 
                 
                </ul>
            </header>
        );
    }
}
export default head;
