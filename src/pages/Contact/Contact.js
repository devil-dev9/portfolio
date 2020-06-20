import React from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Contact = ()=>{
    return(
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>PhoneNumber</Form.Label>
                        <Form.Control type="phone" placeholder="Enter PhoneNumber" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
            <Col>
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <h1>Deepak Reddy</h1>
                    </li>
                    <li>
                        <i className='fa fa-envelope '><span>deepakreddy2906@gmail.com</span></i>
                    </li>
                    <li>
                        <i className='fa fa-phone '><span>9391559067</span></i>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}

export default Contact;