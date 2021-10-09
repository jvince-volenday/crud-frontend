import './UserTable.css'
import { Link } from "react-router-dom"
import { useUser } from 'contexts/UserContext'




function UserTable({stateUsers,removeUser}) {
 
  const userContext = useUser()
  // const deleteUser = userContext.deleteStateUser
  const deleteUser = userContext.deleteUser
  const users = [...stateUsers].reverse()


  const cols = [
  	{ key: 'firstname', title: 'First Name' },
  	{ key: 'lastname', title: 'Last Name' },
  	{ key: 'gender', title: 'Gender' },
  	{ key: 'birthday', title: 'Birthdate' }, 
  	{ key: 'age', title: 'Age' },
  ]


  return (
    <> 
    	<table>
    		<tbody>
	    		<tr>
	    			{ cols.map((obj) => <th key={obj.key}>{obj.title}</th>) }
	    			<th></th>
	    		</tr>
	    		{
	    			users
	    			? users.length > 0 
	    				?	users.map((obj,index) => <UserRow key={`${obj.firstname}-${index}`} data={obj} deleteUser={deleteUser} removeUser={removeUser}/>) 
	    				: null
	    			: null
	    		}
    		</tbody>
    	</table>
    </>
  )
}
export default UserTable



function UserRow({data,deleteUser,removeUser}) {


 	async function deleteUserAndUpdate(id) {
    let isUserDeleted = false
 		isUserDeleted = await deleteUser(id)
    if(await isUserDeleted) removeUser(id) 
 	}

	return (
		<tr>
			<td>{data.firstname}</td>
			<td>{data.lastname}</td>
			<td>{data.gender}</td>
			<td>{data.birthday}</td>
			<td>{data.age}</td>
			<td>
				<div className="row-btngroup">
					<Link className="row-link" to={`update-user/${data._id}`}>Edit</Link>
					<button className="row-delete" onClick={(e) => { e.preventDefault(); deleteUserAndUpdate(data._id) } }>Delete</button>
				</div>
			</td>
		</tr>
	)
}