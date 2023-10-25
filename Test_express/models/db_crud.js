const {Client}  = require('pg'); 
const conn_string = require('./db_config');

async function  crud(req_body) {
    let id = parseInt(req_body.id);
    let name = req_body.name;
    let price = parseInt(req_body.price);
    let amount = parseInt(req_body.amount);
    let shop = req_body.shop;
    let btn = req_body.btn;
    // console.log(name, price, amount, shop);

    const client = new Client(conn_string);
    await client.connect();

    if (btn=="update") {
        const up_query = {
            text: `UPDATE products SET name=$2, price=$3,amount=$4,shop=$5 WHERE id = $1`,
            values: [id, name, price, amount, shop],
        }
        let query_result = await client.query(up_query);
        // console.log("Update");
    }
    else if (btn=="delete") {
        const del_query = {
            text: `DELETE FROM products WHERE id=$1`,
            values: [id],
        }
        let query_result = await client.query(del_query);
        // console.log("Delete");
    }
    else {
        const query_string = {
            text: `INSERT INTO products VALUES ($1, $2, $3, $4, $5)`,
            values: [id, name, price, amount, shop],
        }
        let query_result = await client.query(query_string);
        // console.log("insert");
    }
    client.end();
}

module.exports = crud;