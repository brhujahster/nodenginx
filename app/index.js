const express  = require('express')
const app = express();
const port = 5000;

// const config = {
//     host: 'mysqldb',
//     user: 'root',
//     password: 'root',
//     database: 'nodedb'
// }

// const mysql = require('mysql');
// const connection = mysql.createConnection(config);
// const name;

// const sql = `INSERT INTO people(name) VALUES('Maya')`;
// connection.query(sql);

// const sql_select = `SELECT * FROM people`;
// connection.query(sql_select, function(err, result, fields) {
//   name = result;
// });

// connection.end();


app.get('/', (req, res) => {
    res.send('<h1>Maya</h1><br />')
});

app.listen(port, () => {
    console.log('Rodando na porta ', port);
})