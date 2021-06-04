const express = require('express');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express(); //Initialize express

app.use(express.json()); //body parser
app.use(express.static('../frontend'));
app.use(cookieParser()); // cookie 

app.use('/api/auth', authRouter);//mounting the routers
app.use('/api/user', userRouter);

app.listen(8000, () => {
  console.log('Server started');
});

/**
 * Token based authentication
 * 1. när vi skapar konto generate ett id(nanoid) och spara med user i databasen
 * 2.När vi loggar in så verifiera inloggninguppgifter och signera en token (id+auth token)
 * 3. Vid värje req
 */