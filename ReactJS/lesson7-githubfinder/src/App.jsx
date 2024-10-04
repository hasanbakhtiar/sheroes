import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {

  const [user, setUser] = useState([]);

  const searchUser = (comingkey) => {
    axios.get(`https://api.github.com/search/users?q=${comingkey}`)
      .then(res => setUser(res.data.items)
      )
  }



  return (
    <div>
      <Header />
      <Search comingData={searchUser}/>
      <Users senduser={user} />
    </div>
  )
}

export default App