import React from 'react';

function Product (props) {
        const {key, url, name, price} = props;
        return(

            <div className='product'>
                <img src={url} alt="text"/>
                <main className='prod_main'>
                    <p>{name}</p>
                    <p>${price}</p>
                </main>
                <section className = 'prod_section'>
                    <button onClick={props.deleteItem}>Delete</button>
                    <button>Edit</button>
                </section>
                
            </div>
        )
    

}

export default Product;