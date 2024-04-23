const express = require('express');
const sequelize = require('./config/connection')
// const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

// middleware fo parsing data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use(routes);

const User= require('./models/User');


// sets up server and db using sequelize
sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log('app is listening')
  })
})


// making sure env variables are accesible
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
