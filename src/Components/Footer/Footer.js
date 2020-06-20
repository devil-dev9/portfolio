import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';



export default class Footer extends React.Component{
    render(){
        return(
                <Container className = "footerContainer" fluid>
                    <Row>
                        <Col xs={12} md={10} className="textColor">Powered By React.JS, React-Bootsrtap, Netlify</Col>
                        <Col xs={6} md={2} className="iconColor">
                            <i className='fa fa-linkedin fa-2x'></i>
                            <i className='fa fa-github-square fa-2x'></i>
                        </Col>
                    </Row>
                </Container>
        )
    }
}