import { useRouteMatch } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from 'contexts/UserContext'
import UserForm from 'components/UserForm.js'




function CreateUser() {

  const match = useRouteMatch()
  const userContext = useUser()
  // const updateStateUser = userContext.updateStateUser
  const updateUser = userContext.updateUser
  const { id } = match.params


  /*const user = {
    firstname: 'John Vincent',
    lastname: 'Basto',
    gender: 'male',
    birthday: '1997-10-31'
  }*/
 
  // const user = userContext.getStateUser(id)
  const [user, setUser] = useState({})



  useEffect(() => {

    userContext.getUser(id)
      .then((user) => {
        // console.log('user =',user)
        if(user) setUser(user)
      })
  },[userContext,id])



  return (
    <>
      <div style={{ minHeight: "50rem", height: "50rem", width: "90%", margin: "auto", marginTop: "10rem"}}>
        {/*<UserForm title="Update User" submitFn={updateStateUser} user={getStateUser} type="update" />  */}
        <UserForm title="Update User" submitFn={updateUser} user={user} type="update" />  
      </div>
    </>
  )
}
export default CreateUser
