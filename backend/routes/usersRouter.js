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


       const token = newUser.generateToken(newUser._id);
       newUser.token = token;
       await newUser.save({ validateBeforeSave: false });

       const loggedInUser = newUser.hideSensitiveData(newUser);
       const cookieOption = newUser.generateValidCookieOption();

       res.cookie('jwtCookie', token, cookieOption);
       return res.status(201).json(loggedInUser);

   } catch (error) {
       return res.status(500).json({ error: error.message });
   }
});

usersRouter.post('/users/login', async (req, res) => {
   try {
       const { email, password } = req.body;

       if (!email || !password) {
           const error = new Error('Please, enter your email and password to login.');
           return res.status(422).json({ error: error.message });
       }

       const user = await User.findOne({ email });

       if (!user) {
           const error = new Error('Invalid email or password!');
           return res.status(401).json({ error: error.message });
       }

       const passwordMatched = await user.comparePasswords(password, user.password);

       if (!passwordMatched) {
           const error = new Error('Invalid email or password!');
           return res.status(401).json({ error: error.message });
       }

       const token = user.generateToken(user._id);
       user.token = token;
       await user.save({ validateBeforeSave: false });

       const cookieOption = user.generateValidCookieOption();

       res.cookie('jwtCookie', token, cookieOption);

       const loggedInUser = user.hideSensitiveData(user);

       return res.status(200).json(loggedInUser);

   } catch (error) {
       return res.status(500).json({ error: error.message });
   }
});

module.exports = usersRouter;
