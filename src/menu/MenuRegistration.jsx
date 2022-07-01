import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function MenuRegistration() {
  let [Menu_Id, setMenu_Id] = useState('');
  let [item, setItem] = useState('');
  let [price, setPrice] = useState('');
  let [tag, setTag] = useState('');
  let [avl_option, setAvl_option] = useState('');
  let [Hotel_id, setHotel_id] = useState('');
  function submitData() {

    let userdata = {
      Menu_Id: Menu_Id,
      item: item,
      price: price,
      tag: tag,
      avl_option: avl_option,
      Hotel_id: Hotel_id

    };
    let reqData = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userdata)
    }
    fetch('http://localhost:3001/menuitem', reqData)
      .then(response => console.log(`Data Submitted ${response.status}`))
  }
  return (
    <>
      <>
        <Container>
          <Form className='col-12'>
            <br />
            <h5>Menu_Id :</h5>
            <Form.Control type="text" placeholder="eg. 125" value={Menu_Id} onChange={(e) => setMenu_Id(e.target.value)} />
            <br />
            <h5>Item :</h5>
            <Form.Control type="text" placeholder="eg. Chicken" value={item} onChange={(e) => setItem(e.target.value)} />
            <br />
            <h5>Price :</h5>
            <Form.Control type="text" placeholder="eg. 500" value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
            <h5>Tag :</h5>
            <Form.Control type="text" placeholder="eg. g,r " value={tag} onChange={(e) => setTag(e.target.value)} />
            <br />
            <h5>Available Options :</h5>
            <Form.Control type="text" placeholder="eg. jeera" value={avl_option} onChange={(e) => setAvl_option(e.target.value)} />
            <br />
            <h5>Hotel Id :</h5>
            <Form.Control type="text" placeholder="eg. 211" value={Hotel_id} onChange={(e) => setHotel_id(e.target.value)} />
            <br />

            <Button onClick={submitData} className="btn-primary">Submit</Button>{""}
            <Button onClick={submitData} className="btn-danger">Cancel</Button>{""}
          </Form>
        </Container>
      </>
    </>
  )
}

export default MenuRegistration;