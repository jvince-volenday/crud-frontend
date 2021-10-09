import { Switch, Route } from "react-router-dom"
import { UserProvider } from 'contexts/UserContext'


import CreateUser from "pages/users/CreateUser"
import Users from "pages/users/Users"
import UpdateUser from "pages/users/UpdateUser"





function UserRoutes() {
 

  /*test*/
  return (
    <>        
      <UserProvider>
        <Switch>
          <Route path="/create-user" component={CreateUser} />
          <Route path="/users" component={Users} />
          <Route path="/update-user/:id" component={UpdateUser} />
          <Route path="/" component={Users} />
        </Switch>
      </UserProvider>
    </>
  )
}
export default UserRoutes
