import React, { Component } from 'react';
import { Route, Switch,Redirect} from "react-router-dom";
import Head from "./Head.js";
import Mine from "./Main.js";
import Mine2 from "./Main2.js";
import Mine3 from "./Main3.js";
import Mine4 from "./Main4.js";

import xiangqin from "../xiangqin/index";

import './Product.scss'
class Product extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <section className="app_product">
                 <Head />
                 <main>
                     
                 <Switch>
                 <Route path="/product/main" component={Mine} />
                 <Route path="/product/main2" component={Mine2} />
                 <Route path="/product/main3" component={Mine3} />
                 <Route path="/product/main4" component={Mine4} />
                 {/* <Route path="/product/chujie" component={chujie} /> */}
                 <Route path="/product/xiangqin/:id" component={xiangqin}/>
                 {/* <Route path="/product/main4" component={Mine4} /> */}
                 <Redirect from="/product" to="/product/main" exact />
            
                 </Switch>
                 </main>
                
            </section>

        );
    }
}
export default Product;