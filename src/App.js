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
  updateState = value =>{
    this.setState({products: value})
  }

  componentDidMount(){
    Axios
  .get('/api/inventory')
  .then(response => {
    this.updateState(response.data);
  })
  .catch(err => console.log(err))
  }

  getItems = () =>{
   
  }

  render(){ 
    
    return (
      <div className="App">
        <Header/>
        <Dashboard products = {this.state.products} updateState={this.updateState}/>
        <Form updateState={this.updateState}/>
      </div>
    );
  }
  
}

export default App;
