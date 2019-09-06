import React from 'react';
import Axios from 'axios';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            url: '',
            name: '',
            price: 0
        }
        this.resetState = this.resetState.bind(this);
    }

    

    updateUrl = (e) =>{
        this.setState({url: e.target.value})
        
    }
    updateName = (e) =>{
        this.setState({name: e.target.value})
    }
    updatePrice = (e) =>{
        this.setState({price: e.target.value})
    }
    resetState(){
        this.setState({
            url: '',
            name: '',
            price: 0
        })
        
       
    }
    
    createProduct = () => {
        Axios.post('/api/inventory', {
            image_url: this.state.url,
            name: this.state.name,
            price: this.state.price
        })
        .then(response => {
            this.props.updateState(response.data);
            this.resetState();
        })
    }
    render(){
        return(
            <div>
                <main>
                    <section>
                        <p className='form_p'>Image URL:</p>
                        <input onChange={this.updateUrl}/>
                    </section>
                    <section>
                        <p className='form_p'>Product Name:</p>
                        <input onChange={this.updateName}/>
                    </section>
                    <section>
                        <p className='form_p'>Price:</p>
                        <input onChange={this.updatePrice}/>
                    </section>
                    
                </main>
                <footer>
                    <button onClick={this.resetState}>Cancel</button>
                    <button onClick={this.createProduct}>Add to Inventory</button>
                </footer>

            </div>
        )
    }

}

export default Form;