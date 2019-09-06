import React from 'react';
import {Link} from 'react-router-dom';
function Product(props) {
        const {id, url, name, price} = props;
        return(

            <div className='product'>
                <img src={url} alt="text"/>
                <main className='prod_main'>
                    <p>{name}</p>
                    <p>${price}</p>
                </main>
                <section className = 'prod_section'>
                    <button onClick={() => props.deleteItem(id)}>Delete</button>
                    <Link to = {`edit/${id}`}><button>Edit</button></Link>
                </section>
                
            </div>
        )
    

}

export default Product;