require("dotenv").config();

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/register", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(400).json({ msg: "Email already exists" });
    } else {
      // Create new User object
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          // Calling .save inserts the mongo object into the collection
          newUser
            .save()
            .then(user => res.send(user)) // .save is a promise, send the response when promise is executed
            .catch(err => res.send(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          process.env.SECRET,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            console.log("User Token: " + token);
            res.json({
              success: true,
              token: token
            });
          }
        );
      } else {
        res.status(400).json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get("/grades", passport.authenticate('jwt', {session: false}), async (req, res) => {
  res.send({
    earnedCredits: req.user.earnedCredits,
    totalCredits: req.user.totalCredits
  });
});

router.post('/addCourse', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const user = req.user;
  if(!user) {
    res.status(404);
    return;
  }
  var dict = new Object();
  dict["A"] = 4;
  dict["B"] = 3;
  dict["C"] = 2;
  dict["D"] = 1;
  dict["F"] = 0;
  user.courses.push({name: req.body.courseName, grade: req.body.grade, creditHours: req.body.creditHours})
  user.totalCredits = user.totalCredits + (req.body.creditHours * 1)
  user.earnedCredits = user.earnedCredits + (dict[req.body.grade] * req.body.creditHours)
  console.log(user.earnedCredits)
  console.log(user.totalCredits)
  console.log(user.courses)
  const updated = await user.save();
  res.send({
    earnedCredits: updated.earnedCredits,
    totalCredits: updated.totalCredits
  });
});


module.exports = router;
