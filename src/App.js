import React from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, About, Projects, Contact} from './pages/index';
import {Layout, Header, Footer} from './Components/index';

import './App.css'

export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route  path='/about' component={About}></Route>
                            <Route  path='/projects' component={Projects}></Route>
                            <Route  path='/contact' component={Contact}></Route>
                        </Switch>
                    </Router>
                </Layout>
                <Footer/>
            </React.Fragment>
        )
    }
}