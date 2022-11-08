var express = require('express');

var router = express.Router();
var specializationSchema = require('./../models/specilization');
var specializationIdSchema = require('./../models/specializationId');
var doctorListSchema = require('./../models/doctorList');
const Ajv = require("ajv")
const ajv = new Ajv()   
const operations = require('./../controllers/operations')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sos/specializations', function(req, res, next) {
  operations.getSpecilizations().then(function(rows) {
    res.json(rows);
  });
});
router.post('/sos/getDoctors', function(req, res, next) {
  var specilization= req.body;
  if(specilization && ajv.validate(specializationSchema,specilization)){
  operations.getDoctorList(specilization.id).then(function(rows) {
    res.json(rows);
  });
}
else{
  res.json("Invalid body.")
}
});

router.post('/sos/getSpecilizationId', function(req, res, next) {
  var specilization= req.body;
  if(specilization && ajv.validate(specializationIdSchema,specilization)){
  operations.getDoctorListBySpecilization(specilization.name).then(function(rows) {
    res.json(rows);
  });
}
else{
  res.json("Invalid body.")
}
});
router.post('/sos/registerDoctor', function(req, res, next) {
  var values= req.body;
  if(ajv.validate(doctorListSchema,values)){
  operations.registerDoctor(values).then(function(rows) {
    res.json(rows);
  });
}
else{
  res.json("Invalid body"+ ajv.errors)
}
});

module.exports = router;
