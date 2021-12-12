import {useState} from 'react'

const DeleteCustomer = ({ONDelete}) => {

    const [id, setId] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

    if(id < 1){
        alert('Please give valid customer informations!')
        return
    }

        
    ONDelete(id)

	setId(0)
    }

return(
    <div>
        <h3>Delete a Customer by Id</h3>
    <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
<label>Id</label>
<input type='number'
value={id} onChange={ (e) => setId(e.target.value)}/>
</div>

<input type='submit' value='Delete Customer' 
className='btn btn-block'/>
</form>
</div>
)
}

export default DeleteCustomer