import React from 'react';
import Product from '../Product/Product';
class Dashboard extends React.Component{
    constructor(){
        super();
    }



    render(){
        const product = this.props.products.map((e, i) => (
            <Product
            key = {i}
            price = {e.price}
            name= {e.name}
            url = {e.url}
            />
        ))
        return(
            <div>
                {product}
            </div>
        )
    }

}

export default Dashboard;