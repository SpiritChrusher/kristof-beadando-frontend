import {useState} from 'react'

const AddCustomer = ({ONAdd}) => {
	
	const [firstName, setfirstName] = useState('')
	const [lastName, setlastName] = useState('')
	const [Age, setAge] = useState (0)
	
	const onSubmit = (e) => {
	e.preventDefault()
	
	if(!firstName || !lastName || Age === 0){
		alert('Please add a customer!')
		return
	}
	ONAdd({firstName, lastName, Age})
	setfirstName('')
	setlastName('') 
	setAge(0)
	}
	
return (
<form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>

<label>FirstName</label>
<input type='text' placeholder='Add Customer' 
value={firstName} onChange={ (e) => setfirstName(e.target.value)}/>
</div>

<div className='form-control'>
<label>LastName</label>
<input type='text' placeholder='Add LastName' 
value={lastName} onChange={ (e) => setlastName(e.target.value)}/>
</div>

<div className='form-control'>
<label>Age</label>
<input type='number'
value={Age} onChange={ (e) => setAge(e.target.value)}/>
</div>

<input type='submit' value='Save Customer' 
className='btn btn-block'/>
</form>
)
}

export default AddCustomer