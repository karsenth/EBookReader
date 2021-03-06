const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { email, tier, password, passwordVerify } = req.body;
    console.log(email);
    console.log(tier);
    console.log(password);
    console.log(passwordVerify);
    //validation

    if (!email || !password || !passwordVerify || !tier)
      return res.status(400).json({ errorMessage: "Please Enter all fields" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ errorMessage: "Password should have at least 6 characters" });

    if (password != passwordVerify)
      return res.status(400).json({ errorMessage: "Password should be same" });

    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ errorMessage: "Email already exists" });
    //hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);

    const newUser = User({
      email,
      tier,
      passwordHash,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    console.log(token);

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ errorMessage: "Please Enter all fields" });

    const existUser = await User.findOne({ email });

    if (!existUser)
      return res.status(401).json({ errorMessage: "Wrong email or password" });

    const passwordCorrect = await bcrypt.compare(
      password,
      existUser.passwordHash
    );

    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password" });

    const token = jwt.sign(
      {
        user: existUser._id,
      },
      process.env.JWT_SECRET
    );

    console.log(token);

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//log out

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    // console.log(token);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
    res.send(verified.user);
    console.log(verified.user);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

router.get("/user", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    // console.log(token);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.send(verified.user);
    console.log(verified.user);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ nobooksfound: "No Books found" }));
});

module.exports = router;
