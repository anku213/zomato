import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function HotelRegistration() {
  let [Hotel_Id, setHotel_Id] = useState('');
  let [Hotel_Name, setHotel_Name] = useState('');
  let [Address, setAddress] = useState('');
  let [city, setCity] = useState('');
  let [state, setState] = useState('');
  let [pin, setPin] = useState('');
  let [Hotel_Owner, setHotel_Owner] = useState('');
  let [contact, setContact] = useState('');
  let [type, setType] = useState('');
  function submitData() {
    
    let userdata = {
      Hotel_Id: Hotel_Id,
      Hotel_Name: Hotel_Name,
      Address: Address,
      city: city,
      state: state,
      pin: pin,
      Hotel_Owner: Hotel_Owner,
      contact: contact,
      type: type
      
    };
    let reqData = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userdata)
    }
    fetch('http://localhost:3001/hotelregistration', reqData)
      .then(response => console.log(`Data Submitted ${response.status}`))
  }
  return (
    <>
      <>
        <Container>
          <Form className='col-12'>
            <br />
            <h5>Hotel_Id :</h5>
            <Form.Control  type="text"  placeholder="eg. 125" value={Hotel_Id} onChange={(e) => setHotel_Id(e.target.value)}/> <br />

            <h5>Hotel Name:</h5>
            <Form.Control  type="text"  placeholder="eg. Taj Hotel" value={Hotel_Name} onChange={(e) => setHotel_Name(e.target.value)}/> <br />

            <h5>Address:</h5>
            <Form.Control  type="text"  placeholder="eg. nayi mumbai" value={Address} onChange={(e) => setAddress(e.target.value)}/> <br />

            <h5>City:</h5>
            <Form.Control type="text" placeholder="eg. Mumbai" value={city} onChange={(e) => setCity(e.target.value)}/> <br />

            <h5>State:</h5>
            <Form.Control type="text" placeholder="eg. 400001" value={state} onChange={(e) => setState(e.target.value)}/> <br />

            <h5>Pin:</h5>
            <Form.Control type="text" placeholder="eg. 400001" value={pin} onChange={(e) => setPin(e.target.value)}/> <br />

            <h5>Owner :</h5>
            <Form.Control type="text" placeholder="eg. Daud Abrahim" value={Hotel_Owner} onChange={(e) => setHotel_Owner(e.target.value)}/> <br />

            <h5>Contact:</h5>
            <Form.Control type="text" placeholder="eg. 9999999999" value={contact} onChange={(e) => setContact(e.target.value)}/> <br />

            <h5>Type :</h5>
            <Form.Control type="text" placeholder="eg. Singh" value={type} onChange={(e) => setType(e.target.value)}/> <br />

            <Button onClick={submitData} className="btn-primary">Submit</Button>{""}
            <Button onClick={submitData} className="btn-danger">Cancel</Button>{""}
          </Form>
        </Container>
      </>
    </>
  )
}

export default HotelRegistration;


