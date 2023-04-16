const { validationResult } = require("express-validator");
const Place = require("../models/place");
const User = require("../models/user");
const coordsFromAddress = require("../utils/location");
const HttpError = require("./../models/http-error");
const mongoose = require("mongoose");
const fs = require("fs");

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place!",
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }

  res.json(place);
  // res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithPlaces;

  try {
    userWithPlaces = await User.findById(userId).populate("places");
  } catch (error) {
    const err = new HttpError("Fetching places failed, Please try again!");
    return next(err);
  }

  if (!userWithPlaces || userWithPlaces.places.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404)
    );
  }

  res.json({ places: userWithPlaces });
};

const createPlace = async (req, res, next) => {
  const { title, description, address } = req.body;

  const coordinates = await coordsFromAddress(address);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed, check your data!", 422));
  }

  const createdPlace = new Place({
    title,
    description,
    creator: req.userData.userId,
    image: req.file.path ? req.file.path : null,
    address,
    location: coordinates,
  });

  try {
    const user = await User.findById(req.userData.userId);

    if (!user) {
      const error = new HttpError(
        "Could not find the user for provided id!",
        404
      );
      return next(error);
    }

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();

    await createdPlace.save();
  } catch (err) {
    const error = new HttpError("Creating place failed! Please try again", 500);
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlace = async (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  let place;

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("Could not find the place id!");
    return next(error);
  }

  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update the Place!"
    );
    return next(error);
  }

  if (place.creator.toString() !== req.userData.userId) {
    const error = new HttpError(
      "You are not authorized to edit the place!",
      403
    );
    return next(error);
  }

  res.status(200).json({ place: place });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;

  try {
    place = await Place.findById(placeId).populate("creator");

    if (!place) {
      const err = new HttpError("Could not find the place.", 404);
      return next(err);
    }

    if (place.creator._id.toString() !== req.userData.userId) {
      const err = new HttpError(
        "You are not authorized to delete the place.",
        403
      );
      return next(err);
    }

    const imagePath = place.image;

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();

    fs.unlink(imagePath, (err) => {
      console.log(err);
    });

    res.status(200).json({ message: "Place deleted!" });
  } catch (error) {
    console.log(error);
    const err = new HttpError(
      "Something went wrong, could not delete the place.",
      404
    );
    return next(err);
  }
};

module.exports = {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
};
