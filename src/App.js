import React, { useEffect, useState } from 'react';
import './App.css';
import { getList } from '../src/services/list';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
          console.log(list)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
     <h1>My Grocery List</h1>
     <table className='table' style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}  id="example">
        <thead className='table'>
            <tr>
                <th>Name</th>
                <th>Companyname</th>
                <th>Website</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>Street</th>
                <th>City</th>
                <th>Zipcode</th>
            </tr>
        </thead>
        <tbody>
           {list.map(item => 
            <tr>
              <td key={item.id}>{item.name}</td>
              <td key={item.id}>{item.company.name}</td>
              <td key={item.website}>{item.website}</td>
              <td key={item.phone}>{item.phone}</td>
              <td key={item.email}>{item.email}</td>
              <td key={item.company}>{item.website}</td>
              <td key={item.address.street}>{item.address.street}</td>
              <td key={item.address.city}>{item.address.city}</td>
              <td key={item.address.zipcode}>{item.address.zipcode}</td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>Street</th>
            </tr>
        </tfoot>
    </table>
    
     
   </div>
  )
}

export default App;