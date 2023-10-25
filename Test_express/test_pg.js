const {Client}  = require('pg')
 
const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '123qwe',
  port: 5432,
})
 
client.connect()
 
console.log(client.query('SELECT * FROM accounts'))
