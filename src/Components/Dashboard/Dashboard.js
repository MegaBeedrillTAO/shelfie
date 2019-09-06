import React from 'react';
import Product from '../Product/Product';
import Axios from 'axios';
class Dashboard extends React.Component{
    constructor(){
        super();

    }


    deleteItem = (id) =>{
        Axios.delete(`/api/inventory/${id}`)
        .then(response => this.props.updateState(response.data))
        .catch(err =>{
            console.log(err);
          })
    }
    render(){
        const product = this.props.products.map((e) => (
            <Product
            key = {e.product_id}
            price = {e.price}
            name= {e.name}
            url = {e.url}
            
            />
        ))
        return(
            <div className='dash_div'>
                {product}
            </div>
        )
    }

}

export default Dashboard;