import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import swal from 'sweetalert';

function HotelList() {

  let [data, setData] = useState([]);
  const [Hotel_Name, setHotel_Name] = useState("");
  const [Address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [Hotel_Owner, setHotel_Owner] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    let response = await fetch("http://localhost:3001/hotellist")
    let Udata = await response.json()
    console.log(Udata)
    setData(Udata.Response);
    setHotel_Name(Udata.Response[0].Hotel_Name)
    setAddress(Udata.Response[0].Address)
    setCity(Udata.Response[0].city)
    setState(Udata.Response[0].state)
    setPin(Udata.Response[0].pin)
    setHotel_Owner(Udata.Response[0].Hotel_Owner)
    setContact(Udata.Response[0].contact)
    setType(Udata.Response[0].type)
  }

  function deleteUser(uid) {
    fetch(`http://localhost:3001/hotellist/${uid}`, { method: "DELETE" })
      .then((res) => {
        if (res.status === 200) {
          swal({
            buttons: {
              cancel: true,
              confirm: true,
            },
          });
        }
      })
  }

  function selectUser(Hotel_Id) {
    
    setHotel_Name(data.Response[0].Hotel_Name)
    setAddress(data.Response[0].Address)
    setCity(data.Response[0].city)
    setState(data.Response[0].state)
    setPin(data.Response[0].pin)
    setHotel_Owner(data.Response[0].Hotel_Owner)
    setContact(data.Response[0].contact)
    setType(data.Response[0].type)
  }


  // function PopUp() {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Hotel_Id</th>
            <th>Hotel Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Pin</th>
            <th>Owner</th>
            <th>Contact</th>
            <th>Type</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((User) => {
            return (
              <tr >
                <td>{User.Hotel_Id}</td>
                <td>{User.Hotel_Name}</td>
                <td>{User.Address}</td>
                <td>{User.city}</td>
                <td>{User.state}</td>
                <td>{User.pin}</td>
                <td>{User.Hotel_Owner}</td>
                <td>{User.contact}</td>
                <td>{User.type}</td>
                <td><Button onClick={() => selectUser(User.Hotel_Id)} >Update</Button></td>
                <td><Button onClick={() => deleteUser(User.Hotel_Id)} className='btn-danger'>Delete</Button></td>

              </tr>
            )
          }
          )
          }
        </tbody>
      </Table>
      <Table>
        <thead>
          <label>Hotel Name</label>
          <input type="text" value={Hotel_Name} /><br />
          <label>Address</label>
          <input type="text" value={Address} /><br />
          <label>City</label>
          <input type="text" value={city} /><br />
          <label>State</label>
          <input type="text" value={state} /><br />
          <label>Pin</label>
          <input type="number" value={pin} /><br />
          <label>Hotel Owner</label>
          <input type="text" value={Hotel_Owner} /><br />
          <label>Contact</label>
          <input type="tel" value={contact} /><br />
          <label>type</label>
          <input type="text" value={type} />
        </thead>
        <Button >updateUser</Button>
      </Table>

    </>
  )
  // }
  return (
    <>
      {/* <PopUp /> */}


    </>
  )
}
export default HotelList;
