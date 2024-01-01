const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
});

app.get('/', (req, res) => {
  res.json({ msg: 'MERN Stack course!' });
});

// Mount routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
