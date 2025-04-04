const express = require('express');
const router = express.Router();
const User = require('../models/user');

console.log('user route page visited');

router.post('/register', async (req, res) => {
  console.log('register api hitted successfully');

  try {
    const newuser = new User(req.body);
    const user = await newuser.save();
    // await User(req.body).save()
    // await User.create(req.body)
    res.send('User registered sucessfully. . .')
  } catch (error) {
    res.send(error)
  }

  // console.log(req.body)
  // res.send("data registered successfully")
})

router.post('/login', async (req, res) => {
  console.log('login api hitted successfully');

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email, password: password });

    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      }
      res.send(temp)
    }
    else {
      // console.log('else part executed')
      return res.status(200).json({ message: 'Login Failed' });
    }
    // let data = { ...user }._doc
    // data.password = null;
    // res.send(user)

  } catch (error) {
    console.log('catch block executed')
    return res.status(400).json({ error })
  }
})


module.exports = router;
