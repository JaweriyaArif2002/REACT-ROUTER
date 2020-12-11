import { render } from '@testing-library/react'
import React from 'react'
//this link copy from react router dom website
import { Link } from "react-router-dom";
///*
class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About</h1>
         <Link to="/">GO TO HOME</Link>
            </div>
        )
    }
}
export default About;