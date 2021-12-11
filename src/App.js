import { useState, useEffect } from 'react'
import './App.css';
import AddCustomer from './components/AddCustomer';

const App = () => {

const [ customers, setCustomers] = useState([])

useEffect (() => {
const getCustomers = async () => {
  const res = await fetch("http://localhost:8100/list")
  const data = await res.json()
  setCustomers(data)}
  getCustomers()
}, [])

/*
const getCustomersFetch = async () => {
  const response = await fetch("http://localhost:8110/employees");
  const jsonData = await response.json();
  setCustomers(jsonData);
};

const fetchCustomers = async() => {
  const res = await fetch("http://localhost:8110/employees")
  const data = await res.json()
  return data
}
*/

const addCustomer = async (requestCustomer) => {
	const res = await fetch(
		"http://localhost:8100/add", {
			method: 'POST',
			headers: { 
				'Content-type': 'application/json'
			},
			body: requestCustomer//JSON.stringify(requestCustomer)
		})
		
		const data = await res.json()
		console.log(requestCustomer)
		setCustomers([...customers,data])
  }

  return (
    <div className="App">
      <p>Kristof's Application</p> 
      <h1>Customers</h1>
{customers && (
  <div className="customers">

    {customers.map((cust) => (
      <div>
        <h2>Id: {cust.id},  {cust.firstName} {cust.lastName} is {cust.age} years old</h2>
      </div>
    ))}

  </div>
)}
    <AddCustomer ONAdd={addCustomer}/>
    </div>
  );
}

export default App;
