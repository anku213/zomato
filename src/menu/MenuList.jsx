import React , {useState,useEffect} from 'react'
import { Table, Button } from 'react-bootstrap'

function MenuList() {
  let [data, setData] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    let response = await fetch("http://localhost:3001/menulist")
    let Udata = await response.json()
    console.log(Udata)
    setData(Udata.Response);
  }

  function deleteUser (uid){
    fetch(`http://localhost:3001/menulist/${uid}`, {method : "DELETE"})
    .then((res)=>{
      if(res.status === 200)
      {
        alert("User deleted")
      }
    })
  }
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Menu_Id</th>
            <th>Item</th>
            <th>Price</th>
            <th>Tag</th>
            <th>Available Options</th>
            <th>Hotel Id</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((User, index) => {
            return (
              <tr key={index}>
                <td>{User.Menu_Id}</td>
                <td>{User.item}</td>
                <td>{User.price}</td>
                <td>{User.tag}</td>
                <td>{User.avl_option}</td>
                <td>{User.Hotel_id}</td>
                <td><Button className='btn-primary'>Update</Button></td>
                <td><Button onClick={()=>deleteUser(User.Menu_Id)} className='btn-danger'>Delete</Button></td>
              </tr>
            )
          }
          )
          }

        </tbody>
      </Table>
    </>
  )
}
export default MenuList;
