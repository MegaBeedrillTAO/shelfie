import React from 'react';

class Product extends React.Component{

    render(){
        return(
            <div>
                <img scr={this.props.url} alt="image text"/>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }

}

export default Product;