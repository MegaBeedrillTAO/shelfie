import React from 'react';
import Product from '../Product/Product';
import Axios from 'axios';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state ={
            products: []
          }
    }

    componentDidMount(){
        this.getItems();
      }
    
    getItems = () =>{
        Axios
        .get('/api/inventory')
        .then(response => {
          this.setState({products: response.data})
        })
        .catch(err => console.log(err))
      }

    deleteItem = (id) =>{
        Axios.delete(`/api/inventory/${id}`)
        .then(() => this.getItems())
        .catch(err =>{
            console.log(err);
          })
    } 
    render(){
        const product = this.state.products.map((e) => (
           
            <Product
            key = {e.product_id}
            price = {e.price}
            name= {e.name}
            url = {e.url}
            id = {e.product_id}
            deleteItem = {this.deleteItem}
            
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