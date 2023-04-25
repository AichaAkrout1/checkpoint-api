import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
    const [users, setusers] = useState([])
    useEffect(() => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setusers(res.data));
        
      
        } catch (error) {
            console.log(error)
        }
    }, []);
  return (
    <div className='container demo-wrap im'>
        {/* <img
    className="demo-bg"
    src="https://chisellabs.com/glossary/wp-content/uploads/2021/06/What-is-an-API.png"
    alt=""
  /> */}
        {users ? users.map((el) =>(
        <UserCard el={el}/>)): <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt=""/>}
    </div>
  )
}

export default UserList