import React from 'react';
import { Container } from 'react-bootstrap';

import './Home.css'
import mainlogo from './mainlogo.png';

const Home = ()=>{
    return(
        <Container fluid className="homeContainer">
            <div className="titleDiv"> 
                <h1 className="title">Hello, I'm Deepak Reddy!</h1>
            </div>
            <div className="imageDiv">
                <img src={mainlogo} alt="Main logo" className="homeImage"/>
            </div>
            <div className="workDiv">
                <h2 className="workTitle">UI Developer</h2>
            </div>
        </Container>
    )
}

export default Home;