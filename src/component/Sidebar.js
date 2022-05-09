import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from '../style/Style';




function Sidebar() {
  return (
    
        <Col col={3}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>

           
          </ul>
        </Col>


     
  );
}

export default Sidebar;



