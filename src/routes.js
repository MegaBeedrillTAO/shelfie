import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


export default (
    <div>
        <Header/>
        <Switch>
            <Route exact path ='/' component={Dashboard}/>
            <Route path ='/add' component={Form}/>
            <Route path='/edit/:id' component={Form}/>
        </Switch>
        
        
        
    </div>
)