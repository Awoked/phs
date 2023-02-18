import mysql from "mysql";

export const dbconnection = mysql.createConnection({
    host: "bzmrjalvre32whgihsui-mysql.services.clever-cloud.com",
    database: "bzmrjalvre32whgihsui",
    user: "ubxz8q9wzihfsqd4",
    password: "byPX2ah8JnKGqY2Z2UFX",
    port: "3306"
})