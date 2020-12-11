import React from 'react'
//this link copy from react router dom website
import {BrowserRouter as Router,Route,} from "react-router-dom";
///*
import Home from '../Home'
import About from '../About'
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
            </Router>
        )
    }
}
export default AppRouter;
