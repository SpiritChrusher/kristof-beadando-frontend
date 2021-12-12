import {useState} from 'react'

const UpdateCustomer = ({ONUpdate}) => {

    const [id, setId] = useState(0)
    const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState (0)
	

	const onSubmit = (e) => {
	e.preventDefault()
	
	if(!firstName || !lastName || age <= 6 || age >= 99 || id < 1){
		alert('Please give valid customer informations!')
		return
	}

    ONUpdate({id, firstName, lastName, age})

	setId(0)
	setFirstName('')
	setLastName('') 
	setAge(0)
	}
	
return (
    <div>
        <h3>Update Customer</h3>
<form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>

<div className='form-control'>
<label>Id</label>
<input type='number'
value={id} onChange={ (e) => setId(e.target.value)}/>
</div>

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

<input type='submit' value='Update Customer' 
className='btn btn-block'/>
</form>
</div>
)
}

export default UpdateCustomer