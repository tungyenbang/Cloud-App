// Query for username and password in DB for authenticating
const {Client}  = require('pg'); 
const conn_string = require('./db_config');


async function authen(uname, pword){
    let auth = false;
    let shop = "";
    let role = "";
    const client = new Client(conn_string);
    await client.connect(); 
    const query_string = {
        text: 'SELECT * FROM users WHERE user_name=$1 AND pass_words=$2',
        values: [uname, pword],
    }
    const query_result = await client.query(query_string)
    // console.log(query_result)
    if (query_result.rowCount == 1) {
        auth = true;
        shop = query_result.rows[0].shop;
        role = query_result.rows[0].role;
    } 
    await client.end();
    return {"auth": auth, "shop": shop, "role": role};
}

module.exports = authen;