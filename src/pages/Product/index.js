import React, { Component } from 'react';
import Head from "./Head.js";
import Mine from "./Main.js";
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
                 <Mine />
            </section>

        );
    }
}
export default Product;