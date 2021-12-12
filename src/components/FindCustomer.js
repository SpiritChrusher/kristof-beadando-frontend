import {useState} from 'react'

const FindCustomer = ({ONFind}) => {

    const [id, setId] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        ONFind({id})

	setId(0)
    }

return(
    <div>
        <h3>Find a Customer by Id</h3>
    <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
<label>Id</label>
<input type='number'
value={id} onChange={ (e) => setId(e.target.value)}/>
</div>

<input type='submit' value='Find Customer'
className='btn btn-block'/>
</form>
</div>
)
}

export default FindCustomer