import { createPool } from 'mysql';
import config from './config/db-config.json';

const pool = createPool(config);

//connection SUCCESS CHECK
export const getConnection = (callback) => {
  pool.getConnection((err, conn) => {
    if(err) throw err
    else callback(conn)
    console.log('SQL DB IS CONNECTED')
  })
}