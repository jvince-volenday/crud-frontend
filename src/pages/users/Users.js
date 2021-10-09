import { useState, useEffect } from "react"
import UserTable from 'components/UserTable'
import { useUser } from 'contexts/UserContext'




function Users() {
 
  const userContext = useUser()
  const [stateUsers, setStateUsers] = useState([])
  const [removeUser, setRemoveUser] = useState()


  useEffect(() => {

    userContext.getUsers()
      .then((users) => {
        if(users && users.length > 0) setStateUsers(users)
        else setStateUsers([])
      })
  },[userContext,removeUser])


  return (
    <>
      <div style={{ minHeight: "50rem", height: "50rem", width: "90%", margin: "auto", marginTop: "10rem"}}>
        {/*<UserTable stateUsers={stateUsers}/>*/}
        <UserTable stateUsers={stateUsers} removeUser={setRemoveUser}/>
      </div>
    </>
  )
}
export default Users
