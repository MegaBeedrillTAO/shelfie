import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      products: [
        {url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Zingo', price: 23},
        {url: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg', name: 'Bingo', price: 89}
      ]
    }
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Dashboard products = {this.state.products}/>
        <Form/>
      </div>
    );
  }
  
}

export default App;
