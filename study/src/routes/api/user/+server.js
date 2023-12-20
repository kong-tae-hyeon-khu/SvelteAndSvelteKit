import {mysqlConnFn} from "$lib/db/mysql"

console.log(mysqlConnFn)

export const POST = async (user) => {
    const connection = await mysqlConnFn();

    const insertQuery = `
        INSERT INTO user (name, nickname, email, password)
        VALUES (?, ?, ?, ?)
    `;

    const values = [user.name, user.nickname, user.email, user.password];
    
    try {
        const [result] = await connection.execute(insertQuery, values);
        console.log("Success");
        return result;
        
    } catch (err) {
        console.error("Error : ", err);
        throw err;
    }

    
}