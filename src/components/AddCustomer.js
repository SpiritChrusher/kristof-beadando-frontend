import {useState} from 'react'

const AddCustomer = ({ONAdd}) => {
	
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState (0)
	
	const onSubmit = (e) => {
	e.preventDefault()
	
	if(!firstName || !lastName || age <= 6 || age >= 99){
		alert('Please give valid customer informations!')
		return
	}
	ONAdd({firstName, lastName, age})
	
	setFirstName('')
	setLastName('') 
	setAge(0)
	}
	
return (
<form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>

<label>FirstName</label>
<input type='text' placeholder='Add Customer' 
value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
</div>

<div className='form-control'>
<label>LastName</label>
<input type='text' placeholder='Add LastName' 
value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
</div>

<div className='form-control'>
<label>Age</label>
<input type='number'
value={age} onChange={ (e) => setAge(e.target.value)}/>
</div>

<input type='submit' value='Save Customer' 
className='btn btn-block'/>
</form>
)
}

export default AddCustomer