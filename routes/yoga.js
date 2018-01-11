var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Yoga = require('../models/Yoga.js');

/* GET ALL Clients */
router.get('/', function(req, res, next) {
  Yoga.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CLIENT BY ID */
router.get('/:id', function(req, res, next) {
  Yoga.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CLIENT */
router.post('/', function(req, res, next) {
  Yoga.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ClIENT */
router.put('/:id', function(req, res, next) {
  Yoga.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CLIENT */
router.delete('/:id', function(req, res, next) {
  Yoga.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;