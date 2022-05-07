import React, { useEffect, useState } from 'react';
import { getList } from '../services/list';

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
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
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.company.name}</td>
              <td>{item.website}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
              <td>{item.address.street}</td>
              <td>{item.address.city}</td>
              <td>{item.address.zipcode}</td>
            </tr>)}
        </tbody>
        <tfoot>
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
        </tfoot>
    </table>
    
     
   </div>
  )
}

export default List;