import React, { useContext, useState } from "react"
import axios from 'axios'




// user context
const UserContext = React.createContext()
export function useUser() {
  return useContext(UserContext)
}





// const [loading, setLoading] = useState(true)
export function UserProvider({ children }) {
	
	const dummies = [
		{
			id: '12345',
			firstname: "Dough",
			lastname: "Doe",
			gender: "male",
			birthday: "2011-11-11",
			age: "10"
		},
		{
			id: '23456',
			firstname: "John",
			lastname: "Doe",
			gender: "male",
			birthday: "1998-11-11",
			age: "22"
		},
		{
			id: '34567',
			firstname: "Emma",
			lastname: "Doe",
			gender: "female",
			birthday: "2000-10-20",
			age: "21"
		}
	]
	const [users, setUsers] = useState(dummies)
	const baseUrl = `http://localhost:80/users`
	


	function getStateUsers() {
    return users
	}
	function getStateUser(id) {
	  const index = users.findIndex(obj => obj.id === id)
	  let user = null

	  if(index !== -1) user = users[index]
    return user
	}
  function createStateUser(data) {
    setUsers(curState => {
    	const newState = curState
    	const newData = { 
    		id: `${Math.floor(Math.random() * 100000) + 1}`,
    		...data } 
    	newState.push(newData)

    	console.log(users)
    	return newState
    })
  }
  function updateStateUser(data,firstname) {
	  const index = users.findIndex(obj => obj.firstname === firstname)

	  if(index !== -1) {
	    setUsers(curState => {
	    	const newState = curState
	    	newState[index] = data

	    	return newState
	    })
	  }
  }
  function deleteStateUser(id) {
	  const index = users.findIndex(obj => obj.id === id)

	  if(index !== -1) {
	    setUsers(curState => curState.filter((obj) => obj.id !== id))
	  }
  }




  // apis
  async function createUser(data) {
  	const users = await axios.post(`${baseUrl}/create`, data)
  		.then((res) => res.data)
  	return users
  }
	async function getUsers() {
  	const users = await axios.get(`${baseUrl}/all`)
  		.then((res) => res.data)
  	return users
	}
	async function getUser(id) {
  	const user = await axios.get(`${baseUrl}/${id}`)
  		.then((res) => res.data)
  	return user
	}
  async function updateUser(id,data) {
  	const users = await axios.put(`${baseUrl}/update/${id}`, data)
  	return users
  }
  async function deleteUser(id) {
  	const users = await axios.delete(`${baseUrl}/delete/${id}`, { id })
  	return users
  }






	// ##########-##########-##########-##########-##########
	// values
  const value = {
  	users,
  	getStateUser,
  	getStateUsers,

  	createStateUser,
  	updateStateUser,
  	deleteStateUser,

  	createUser,
  	getUsers,
  	getUser,
  	updateUser,
  	deleteUser,
	}






  return (
    <UserContext.Provider value={value}>
      {/*{!loading && children}*/}
      {children}
    </UserContext.Provider>
  )
}






