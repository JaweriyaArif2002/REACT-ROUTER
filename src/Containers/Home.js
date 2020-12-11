import React from 'react';
//this link copy from react router dom website
import { Link } from "react-router-dom";
///*
class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>HOME</h1>
           <Link to="/About"><button>go to About page</button></Link>
            </div>
        )
    }
}

export default  Home;