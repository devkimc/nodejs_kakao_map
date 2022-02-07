import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors'
import cors from 'cors'
import { createPool } from 'mysql'
import config from './config/db-config.json'
import api from './routes';


//connection SUCCESS CHECK
const pool = createPool(config);

export const getConnection = (callback) => {
  pool.getConnection((err, conn) => {
      if(err) throw err;
      else callback(conn);
      console.log('SQL DATABASE IS CONNECTED');
  });
}

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../project_www/build')))
app.use(cors())

app.use('/', api)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  // res.render('error')
})

export default app
