import mysql from "mysql2";
import MY_SQL_SECREAT from "$env/static/private"

let mysqlConn = null;


export const mysqlConnFn= () => {
    // MySQL 연결이 안되어 있다면,
    if (!mysqlConn) {
        mysqlConn = mysql.createConnection({
            host : '127.0.0.1',
            user : 'root',
            password : MY_SQL_SECREAT,
            database : 'database-name'
        })
    }
 
    return mysqlConn
}