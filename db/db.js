import mysql from "mysql";

export const dbconnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})