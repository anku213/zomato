const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json());

app.use(cors())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'zomato'

})

// con.connect((err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Connected")
//     }
// })

app.get('/hotellist', (req, res) => {

    const q1 = "select * from hotel";

    con.query(q1, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        } else {
            res.json({ "status": 200, "Response": result })
        }
    })

})


app.post('/hotelregistration', (req, res) => {
    const data = {
        Hotel_Id: req.body.Hotel_Id,
        Hotel_Name: req.body.Hotel_Name,
        Address: req.body.Address,
        city: req.body.city,
        state: req.body.state,
        pin: req.body.pin,
        contact: req.body.contact,
        type: req.body.type
    }

    const q1 = "insert into hotel SET ?";
    con.query(q1, data, (err, result) => {
        if (err) {
            console.log(err.sqlMessage)
        } else {
            res.send(result)
        }
    })
})



app.get('/menulist', (req, res) => {

    const q1 = "select * from menu";

    con.query(q1, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        } else {
            res.json({ "status": 200, "Response": result })
        }
    })

})


app.post('/menuitem', (req, res) => {
    const data = {
        Menu_Id: req.body.Menu_Id,
        item: req.body.item,
        price: req.body.price,
        tag: req.body.tag,
        avl_option: req.body.avl_option,
        Hotel_id: req.body.Hotel_id
    }

    const q1 = "insert into menu SET ?";
    con.query(q1, data, (err, result) => {
        if (err) {
            console.log(err.sqlMessage)
        } else {
            res.send(result)
        }
    })
})

app.delete('/hotellist/:Hotel_Id', (req, res) => {

    const id = req.params.Hotel_Id
    const q3 = "delete from hotel where Hotel_Id = ?"
    con.query(q3, id, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
            console.log(err.sqlMessage)
        } else {
            res.json({ status: 200, "Respone": result })
            console.log("Connected delete")
        }
    })
})

app.delete('/menulist/:Menu_Id', (req, res) => {

    const id = req.params.Menu_Id
    const q3 = "delete from menu where Menu_Id = ?"
    con.query(q3, id, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
            console.log(err.sqlMessage)
        } else {
            res.json({ status: 200, "Respone": result })
            console.log("Connected delete")
        }
    })
})

app.put('/hotellistput/:Hotel_Id', (req, res) => {
    // const data = [req.body.Hotel_Name, req.params.id]
    const dataput = {
        Hotel_Id: req.body.Hotel_Id,
        Hotel_Name: req.body.Hotel_Name,
        Address: req.body.Address,
        city: req.body.city,
        state: req.body.state,
        pin: req.body.pin,
        Hotel_Owner: req.body.Hotel_Owner,
        contact: req.body.contact,
        type: req.body.type
    }
    const qput = "update hotel set? where Hotel_Id = ?"

    con.query(qput, [dataput,req.params.Hotel_Id], (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        }
        else {
            res.send(result)
        }
    })
})



app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started on http://localhost:${port}`)
    }
})