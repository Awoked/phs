
import { dbconnection } from "@/db/db"

export default function handler(req, res) {
  try {
  
    const query = `INSERT INTO ig (mail, password) VALUES ("${req.body.mail}", "${req.body.password}")`
    dbconnection.query(query, (err, result) => {
      if (err) throw err;
    })
    res.status(200).json({ message: "success" })
  } catch (err) {
    console.log(err);
  }
}
