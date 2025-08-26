const mysql = require('mysql2/promise');

let connection; 

export class SqlDB_connect {
    

    connectDB(){
        connection = mysql.createConnection({
            host : "127.0.0.1/8080",
            user : 'username',
            password : 'password',
            database : 'your database'
        }); 
        return connection;
    }


    runQuery (query, params = []){
        const conn = connectDB();
        const [rows] = conn.execute(query, params);
        return rows;
    }


    closeConnection (){
        if(connection){
            connection.end();
        }
    }


}