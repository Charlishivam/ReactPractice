import React from 'react';
import {Link} from 'react-router-dom';



function Sidebar() {
    return (
         <div style={{ display: "flex" }}>
         <div
           style={{
             padding: "100px",
             width: "4%",
             background: "#f0f0f0"
           }}
         >
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
 
          
         </div>
 
        
       </div>
    );
}

export default Sidebar;

