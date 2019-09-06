import React from 'react';

class Product extends React.Component{

    render(){
        return(
            <div className='product'>
                <img src={this.props.url} alt="text"/>
                <main className='prod_main'>
                    <p>{this.props.name}</p>
                    <p>${this.props.price}</p>
                </main>
                
            </div>
        )
    }

}

export default Product;