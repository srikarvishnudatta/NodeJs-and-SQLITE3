const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const app = express()
let db = new sqlite3.Database('testDb.db');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile('/Users/venkatasrikarakella/Documents/supradeep/index.html')
})

app.post('/', (req, res) => {
    let command = 'Select * from News where Category=?'
    db.all(command, [req.body.query], (err, rows) =>{
    if(err){
    console.log(err)
    }
    rows.forEach((row) => {
    console.log(row['headline']);
        })
    res.json(rows)
    })
})
app.listen(3000, function(){
    console.log('Server listening on port 3000')
})


