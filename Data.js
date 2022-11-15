const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('testDb.db');
const bodyParser = require('body-parser');
class Game{
    constructor(req, res, game){
        this.req = req
        this.res = res
        this.game = game
    }
    modifyRow(values1,values2){
        const command1 = 'update Game name=?, publisher=?,developer=?,date=? where name=?'
        const command2 = 'update Information game_name=?, description=?, tags=?, Category=? where game_name=?'
        db.all(command1, values1, (err, rows) =>{
            if(err){
                console.log(err);
            }
            console.log(rows);
        })
        db.all(command2, values2, (err, rows) =>{
            if(err){
                console.log(err);
            }
            console.log(rows)
            this.res.send(`
            <h1>Values updated</h1>
            `)
        })
    }
    getGames(){
        let command = 'Select name from game;'
        let games = []
        db.all(command, [], (err, rows) =>{
            if(err){
                console.log(err);
            }
            console.log(rows)
            this.res.render("index", {output:rows})
        })
        
    }
    deleteRow(){
        let command1 = 'Delete from game where name=?'
        let command2 = 'Delete from information where game_name=?'
        db.get(command1, [this.game],(err, res) => {
            if(err){
                console.log(err)
            }
        })
        db.get(command2, [this.game],(err, res) => {
            if(err){
                console.log(err)
            }
        })
        this.res.send(`
        <h1>
        Values Deleted.
        <a href="index.html">Go back to main page</a>
        </h1>
        `)
    }
    getRow() {
        let command = 'Select * from Game INNER JOIN information on name=game_name where name=?'
        db.get(command, [this.game], (err, row) =>{
            if(err){
            console.log(err)
            }
            console.log(row)
            // console.log(rowid);
            // console.log(row['name']);
            if(row === undefined){
                this.res.send(`<h1>Value does not exist</h1>`)
            }
            else{
                this.res.send(`
                
<h1>
<table>
<tr>
<th>
    name
</th>
<th>
    publisher
</th>
<th>
    developer
</th>
<th>
    Published Date
</th>
<th>
    Description
</th>
<th>
    Tags
</th>
<th>
    Category
</th>
</tr>
    <tr>
        <td>
        ${row['name']}
        </td>
        <td>
        ${row['publisher']}
        </td>
        <td>
        ${row['developer']}
        </td>
        <td>
        ${row['date']}
        </td>
        <td>
        ${row['description']}
        </td>
        <td>
        ${row['tags']}
        </td>
        <td>
        ${row['Category']}
        </td>
</table>
</h1>
<a href="index.html"> Go back to main page.
</a>         
                `)
            }
            })
    }
}
class AddGame{
    constructor(req, res, values1,values2){
        this.req = req
        this.res = res
        this.values1 = values1
        this.values2 = values2
    }
    addRow(){
        const command1 = 'INSERT or ignore into Game(name, publisher, developer, date) values(?,?,?,?)'
        const command2 = 'insert or ignore into Information(game_name, description, tags, Category) values(?,?,?,?)'
        db.run(command1, this.values1,(err) => {
            if(err){
                console.log(err)
            }
            console.log('inserted')
        })
        db.run(command2, this.values2,(err) => {
            if(err){
                console.log(err)
            }
            console.log('inserted')
            this.res.send(`
        <h1>
        Values added.</h1>
        `)
        })
        
    }
}
module.exports = {
    Game,
    AddGame,
}