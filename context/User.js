import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [allDrivers, setAllDrivers] = useState([]);
  
  const getUsers = () => {
    axios.get('https://randomuser.me/api/?results=30').then((res) => {
      setAllDrivers(res.data.results);
      localStorage.setItem("driver_data", JSON.stringify(res.data.results));
    })
  }

  useEffect(() => {
    if (!localStorage.getItem("driver_data")) {
      getUsers();
    } else {
      let driverData = JSON.parse(localStorage.getItem('driver_data'));
      setAllDrivers(driverData);
    }
  }, [])

  return (
    <UserContext.Provider value={allDrivers}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }