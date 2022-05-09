import React from 'react';
import { Col } from '../style/Style';
import Form from './From';


function About() {
    function handleSubmit() {
        console.log("hello");
      }
    return (
       
    <div>
        <Col col={9}>
            <h1>About Page</h1>
            <Form handleSubmit={handleSubmit} name="employeeID" />

        </Col> 
    </div> 
    );
}

export default About;