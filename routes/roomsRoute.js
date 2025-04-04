// npm i router
const express = require('express');
const router = express.Router();

const Room = require('../models/room');
// const roomController = require('../controllers/roomController');

router.get('/getallrooms', async (req, res) => {
  try {
    const rooms = await Room.find({});
    if (rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found" });
    }
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



router.get('/getroombyid/:roomid', async (req, res) => {
  const id = req.params.roomid;
  console.log('room id is', id);

  try {
    console.log("get particular room by id api hitted");
    const room = await Room.findById(req.params.roomid);

    if (room)
      res.status(200).json(room);
    else
      res.status(200).json({ message: "room not found" });
  } catch (error) {
    return res.status(400).json({ message: "room not founds" })
  }

})




// router.get('/getallrooms', (req, res) => {
//   res.send({
//     message: "data has been sent",
//     success: 200
//   })

// })

module.exports = router;