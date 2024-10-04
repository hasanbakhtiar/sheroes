import React from 'react'
import SingleCard from './SingleCard'

const Users = ({senduser}) => {
  return (
    <div className='container'>
        <div className="row g-5">
            {senduser.map(item=>(
                <SingleCard key={item.id} userdata={item} />

            ))}
        
        </div>
    </div>
  )
}

export default Users