import UserForm from 'components/UserForm.js'
import { useUser } from 'contexts/UserContext'





function CreateUser() {
  
  const userContext = useUser()
  // const createStateUser = userContext.createStateUser
  const createUser = userContext.createUser



  return (
    <> 
      <div style={{ minHeight: "50rem", height: "50rem", width: "90%", margin: "auto", marginTop: "10rem"}}>
        {/*<UserForm title="Create User" submitFn={createStateUser} type="create" />  */}
        <UserForm title="Create User" submitFn={createUser} type="create" />  
      </div>
    </>
  )
}
export default CreateUser
