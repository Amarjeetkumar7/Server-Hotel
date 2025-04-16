

// npm i express
const express = require('express');
const app = express();
app.use(express.json());
const dotenv=require('dotenv')

dotenv.config({})
// npm i cors
const cors = require('cors');
app.use(cors({
  origin: 'https://hotel-app-liard-ten.vercel.app', // your frontend Vercel domain
  credentials: true
}));

// npm i mongoose
const connectDb = require('./db');
connectDb();

app.get('/', (req, res) => {

  res.send({
    message: "server is running successfully. . .",
    success: 200
  })
})


// http://localhost:1300/api/rooms
const roomsRoute = require('./routes/roomsRoute');
app.use('/api/rooms', roomsRoute);


// http://localhost:1300/api/users/login
const usersRoute = require('./routes/usersRoute');
app.use('/api/users', usersRoute);

// http://localhost:1300/api/bookings
const bookingRoute = require('./routes/bookingsRoute')
app.use('/api/bookings', bookingRoute)


app.listen(process.env.port, () => {
  console.log(`Server is running on port http://localhost:${process.env.port} 🔥`);
})
