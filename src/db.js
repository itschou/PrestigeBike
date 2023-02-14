const mysql = require('mysql2');

export const connection = mysql.createConnection({
  host: '82.180.162.21',
  user: 'pres_root',
  password: 'mNbLo6!2aFlJfwey',
  database: 'pres_produits'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});
