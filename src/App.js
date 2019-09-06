import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      products: []
    }
  }


  getItems(){
    Axios
  .get('/api/inventory')
  .then(response => {
    this.setState({products: response.data})
  })
  .catch(err => console.log(err))
  }

  render(){ 
    this.getItems();
    return (
      <div className="App">
        <Header/>
        <Dashboard products = {this.state.products}/>
        <Form getItems={this.getItems}/>
      </div>
    );
  }
  
}

export default App;
