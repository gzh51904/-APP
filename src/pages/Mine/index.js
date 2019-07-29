import React,{Component} from 'react';
import Mine_header from './Mine_header';
import Mine_list from './Mine_list'
import Pay from './Pay'
import "./mine.scss" 
class Mine extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <section className="app_mine">
                <Mine_header />
                <Pay />
                <Mine_list />
            </section>
        );
    }
}
export default Mine;