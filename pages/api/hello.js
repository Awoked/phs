
import { createPool } from 'mysql';

// Bağlantı havuzunu yapılandırmak için gerekli bilgileri tanımlayın
const pool = createPool({
  connectionLimit: 30,
  host: "bzmrjalvre32whgihsui-mysql.services.clever-cloud.com",
  database: "bzmrjalvre32whgihsui",
  user: "ubxz8q9wzihfsqd4",
  password: "byPX2ah8JnKGqY2Z2UFX",
  port: "3306"
});

export default function handler(req, res) {
  try {
    const query = 'INSERT INTO ig (mail, password) VALUES (?, ?)';
    const values = [req.query.mail, req.query.password];
    
    // Havuzdan bir bağlantı isteyin
    pool.getConnection((err, connection) => {
      if (err) {
        throw err;
      }
      // Sorguyu hazırlayın ve çalıştırın
      connection.query(query, values, (err, result) => {
        // Bağlantıyı geri verin
        connection.release();
        if (err) {
          throw err;
        }
        console.log(result);
        res.status(200).json({ message: 'Kullanıcı eklendi' });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'İstek işlenirken bir hata oluştu' });
  }
}