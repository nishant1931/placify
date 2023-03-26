const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, "-password");

    res.json({ users });
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed! Please try again.",
      500
    );
    return next(error);
  }
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed, check your data!", 422));
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new HttpError(
        "User already exists! Please login instead.",
        422
      );
      return next(error);
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
      const error = new HttpError(
        "Could not create a user, Please try again!",
        500
      );
      return next(error);
    }

    const createdUser = new User({
      name,
      password: hashedPassword,
      places: [],
      email,
      image: req.file ? req.file.path : "uploads/images/defaultuser.jpg",
    });

    await createdUser.save();

    let token;
    try {
      token = jwt.sign(
        { userId: createdUser._id, email: createdUser.email },
        process.env.SECRET_TOKEN,
        { expiresIn: "1h" }
      );
    } catch (err) {
      console.log(err);
      const error = new HttpError("Signing up failed, Please try again!", 500);
      return next(error);
    }

    res.status(201).json({
      userId: createdUser._id,
      email: createdUser.email,
      token: token,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signing up failed, Please try again!", 500);
    return next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (error) {
      const err = new HttpError(
        "Could not logged you in, Please check your credentials.",
        500
      );
      return next(err);
    }

    if (!existingUser) {
      const error = new HttpError(
        "Invalid credentials, Please login again.",
        401
      );
      return next(error);
    }

    if (!isValidPassword) {
      const error = new HttpError(
        "Invalid credentials, Please login again.",
        401
      );
      return next(error);
    }

    let token;
    try {
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        process.env.SECRET_TOKEN,
        { expiresIn: "3d" }
      );
    } catch (err) {
      const error = new HttpError("Logging in failed, Please try again!", 500);
      return next(error);
    }

    res.status(200).json({
      userId: existingUser.id,
      email: existingUser.email,
      token: token,
    });
  } catch (err) {
    const error = new HttpError("Login failed! Please try again later.", 401);
    return next(error);
  }
};

module.exports = { getAllUsers, login, signup };
