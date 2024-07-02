import { Pool } from 'pg';;

const pool = new Pool({
    host: '0.0.0.0',
    user: 'zsofia',
    password: 'password',
    port: 5432,
    database: 'mydb',
});

pool.connect((err) => {
    if (err) {
      console.error('Connection error', err.stack);
    } else {
      console.log('Connected to the database');
    }
});

export default pool;