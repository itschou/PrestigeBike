const mysql = require('mysql2');

export const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});
