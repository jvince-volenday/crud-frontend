import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import './UserForm.css'





function UserForm({title,submitFn,user,type}) {
  
  const [form, setForm] = useState(user ? user : {})
  const [firstname, setFirstname] = useState(form ? form.firstname ? form.firstname : '' : '')
  const [lastname, setLastname] = useState(form ? form.lastname ? form.lastname : '' : '')
  const [gender, setGender] = useState(form ? form.gender ? form.gender : '' : '')
  const [birthday, setBirthday] = useState(form ? form.birthday ? form.birthday : '' : '')

  let history = useHistory()


  useEffect(() => {

    let data = user ? user : {}
    setForm(data)
    setFirstname(user ? user.firstname ? user.firstname : '' : '')
    setLastname(user ? user.lastname ? user.lastname : '' : '')
    setGender(user ? user.gender ? user.gender : '' : '')
    setBirthday(user ? user.birthday ? user.birthday : '' : '')
  },[setForm,user,type])


  function setInputForm(prop,value) {
  	
  	const filtered = value.trim(' ')


  	function setState(prop) {
	  	setForm(curState => {
	  		const newState = curState
	  		newState[prop] = filtered

	  		return newState
	  	})
	  }

    if(form) {
    	if(form[prop] && form[prop].toLowerCase() !== filtered.toLowerCase()) setState(prop)
    	else if (form[prop] === undefined) setState(prop)
    }
  }

  function setInputDate(value) {

  	// const values = value.split("-")
  	// const year = values[0]
  	// const month = values[1]
  	// const date = values[2]
  	// const age = setAge(year,month,date)


  	setForm(curState => {
  		const newState = curState
      if(newState) {
    		newState.birthday = value
    		// newState.age = age
      }

  		return newState
  	})
  }

  
  /*function setAge(year,month,date) {

  	// current 
  	const dateObj = new Date()
  	const currentYear = +dateObj.getFullYear()
  	const currentMonth = +dateObj.getMonth() + 1
  	const currentDate = +dateObj.getDate() 
  	

		// calculate age 
  	let age = 0
    if(year) {
      if(+year < currentYear) {
        
        if(+month === currentMonth) {
          if(currentDate >= +date) age = currentYear - +year
          else if(currentDate < +date) age = currentYear - +year - 1
        }
        else if(currentMonth > +month) age = currentYear - +year
        else if(currentMonth < +month) age = currentYear -+ year -1
      }
      else if(+year >= currentYear) age = 0
    }

  	return age
  }*/




  async function submitButton() {
    if(type) {
      let isRedirect = false
      
      // if(type === 'create') console.log('form',form)
      if(type === 'create') isRedirect = await submitFn(form)
      else if(type === 'update') isRedirect = await submitFn(user._id,form)
      if(await isRedirect) history.push('/users') 
    }
  }




  return (
    <> 
      <div style={{ minHeight: "50rem", height: "50rem", width: "90%", margin: "auto", marginTop: "10rem"}}>
        
        <div style={{ height: "auto", width: "40rem", margin: "auto", padding: "2rem", borderRadius: "5px", background: "#1B1B1B", boxShadow: "0 3px 10px black", paddingTop: "3rem" }}>

          <span className="title" >{title ? title : "Title"}</span>


        	{/*name*/}
          <input type="text" id="firstname" name="firstname" placeholder="First Name" className="input"
          	onChange={(e) => { setFirstname(e.target.value); setInputForm("firstname",e.target.value)} } 
            value={ firstname ? firstname : '' } />
          <input type="text" id="lastname" name="lastname" placeholder="Last Name" className="input" 
          	onChange={(e) => { setLastname(e.target.value); setInputForm("lastname",e.target.value) } } 
            value={ lastname ? lastname : '' } />
        

        	{/*birthday*/}
          <div className="date-block">
            <label htmlFor="birthdate" className="date-label" >Birth Date:</label>
            <input type="date" id="birthdate" name="birthdate" className="date-input"
            	mindate={new Date("1900-01-01")}
            	onChange={(e) => { setBirthday(e.target.value); setInputDate(e.target.value) } } 
              value={ birthday ? birthday : '' } />
          </div>


        	{/*gender*/}
          <label className="gender-title" >Gender:</label>
          <div className="gender-block">
            <div  className="gender-group">
              <input type="radio" id="male" name="gender" value="male" className="gender-input"
              onChange={(e) => { setGender(e.target.value); setInputForm("gender",e.target.value) } }
              checked={gender === 'male' ? true : false } />
              <label htmlFor="male" className="gender-label" >Male</label>
            </div>

            <div  className="gender-group">
              <input type="radio" id="female" name="gender" value="female" className="gender-input" 
              onChange={(e) => { setGender(e.target.value); setInputForm("gender",e.target.value) } }
              checked={gender === 'female' ? true : false } />
              <label htmlFor="female" className="gender-label" >Female</label>
            </div>
          </div>


        	{/*submit*/}
          <button  className="button" onClick={(e) => { e.preventDefault(); submitButton() }}>Submit</button>

        </div>
      </div>
    </>
  )
}
export default UserForm
