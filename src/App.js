import { useState, useEffect } from 'react';
import UpdateCustomer from './components/UpdateCustomer';
import './App.css';
import AddCustomer from './components/AddCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import FindCustomer from './components/FindCustomer';

const App = () => {

  const [customer, setCustomer] = useState(null)

  const [ customers, setCustomers] = useState([])

  useEffect (() => {
  const getCustomers = async () => {
    const res = await fetch("http://localhost:8100/list")
    const data = await res.json()
    setCustomers(data)}
    getCustomers()
  })

  const findCustomer = async (id) => {
    const res = await fetch("http://localhost:8100/findjson/", {
      method: 'POST',
      headers: { 
          'Content-type': 'application/json'
      },
      body: id
  })
    const data = await res.json()
    setCustomer(data)
    console.log(customer)
  }

  const addCustomer = async (requestCustomer) => {
    const res = await fetch(
      "http://localhost:8100/addjson", {
        method: 'POST',
        headers: { 
          'Content-type': 'application/json'
        },
        body: JSON.stringify(requestCustomer)
      })
    }

  const updateCustomer = async (updatedCustomer) => {

    const res = await fetch(
        "http://localhost:8100/updatejson", {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedCustomer)
        })
  }

  const deleteCustomer = async(id) => {
    console.log(JSON.stringify(id))   
    const res = await fetch(
      "http://localhost:8100/deletejson",{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: id
      })
    }

  const deleteAllCustomer = async() => {
    const res = await fetch(
      "http://localhost:8100/deleteall",{
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      })
    }

  return (
    <div className="App">
      <header id="header">Kristof's Application</header>
      <h2>Customers</h2>
  {customers && (
    <div className="customers">

    {customers.map((cust) => (
      <div>
        <h3>Id: {cust.id},  {cust.firstName} {cust.lastName} is {cust.age} years old</h3>
      </div>
    ))}

  </div>
)}
    <AddCustomer ONAdd={addCustomer}/>
    <br></br>
    <UpdateCustomer ONUpdate={updateCustomer}/>
    <br></br>
    <DeleteCustomer ONDelete={deleteCustomer}/>
    <br></br>
    <button onClick={deleteAllCustomer}>Delete Customers</button>
    </div>
  );
}

export default App;
