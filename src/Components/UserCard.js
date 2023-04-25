import React from 'react'

function UserCard({el}) {
  return (
    <div className='Card'>
        <h1>{el.id}</h1>  
        <h4>{el.name}</h4>
        <h6>{el.username}</h6>
        <p>{el.email}</p>
    </div>
  )
}

export default UserCard