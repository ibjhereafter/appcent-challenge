const express = require('express');
const usersRouter = express.Router();
const User = require('../database/usersModel');

usersRouter.post('/users/register', async (req, res) => {
   try {
       const { email, name, password} = req.body;
       if (!email || !name || !password) {
           const error = new Error('You must provide your name, email and password to register.');
           return res.status(422).json({ error: error.message });
       }
       const existingEmail = await User.findOne({ email });

       if (existingEmail) {
           const error = new Error('This email already exists. Sign in or use another valid email address.');
           return res.status(400).json({ error: error.message });
       }
       const newUser = new User(req.body);
       await newUser.save();

       const loggedInUser = newUser.hideSensitiveData(newUser);
       const token = newUser.generateToken(loggedInUser._id);
       const cookieOption = newUser.generateValidCookieOption();

       res.cookie('jwtCookie', token, cookieOption);
       return res.status(201).json(loggedInUser);

   } catch (error) {
       return res.status(500).json({ error: error.message });
   }
});

module.exports = usersRouter;
