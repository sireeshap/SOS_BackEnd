var config = require('../config/db');
var pg = require('pg');
var fs = require('fs');
const { randomUUID } = require('crypto'); 
var moment = require('moment');

var specializationsModal = require('./../models/specilization');
function getSpecilizations(){
    return new Promise(function(resolve, reject) {
      config.query("SELECT SPECIALIZATION_ID as id, SPECIALIZATION_NAME as name FROM AppointmentSystemDB.SPECIALIZATION_DATA", function(err, rows, fields){
        if (err) {
            return reject(err);
        }
        resolve(rows);
      })
    });
}
function getDoctorList(input){
  return new Promise(function(resolve, reject) {
    config.query("SELECT * FROM AppointmentSystemDB.DOCTORS_DATA where SPECIALLIZATION='"+input+"'", function(err, rows, fields){
      if (err) {
          return reject(err);
      }
      resolve(rows);
    })
  });
}
function getDoctorListBySpecilization(input){
  return new Promise(function(resolve, reject) {
    let fetchQuery=fs.readFileSync(__dirname + '/getDoctorListBySpecilization.sql',{encoding:'utf8'}).toString();

    config.query(fetchQuery, [input], function(err, rows, fields){
      if (err) {
          return reject(err);
      }
      console.log("HHHHHH")
      console.log(rows)
      resolve(rows);
    })
  });
}
function getAppointments(input){
  return new Promise(function(resolve, reject) {
    config.query("SELECT * FROM AppointmentSystemDB.APPOINTMENT_DATA where DOCTOR_ID='"+input+"'", function(err, rows, fields){
      if (err) {
          return reject(err);
      }
      resolve(rows);
    })
  });
}
function registerDoctor(input){
  
  return new Promise(function(resolve, reject) {
  let insertQuery=fs.readFileSync(__dirname + '/registerDoctor.sql',{encoding:'utf8'}).toString();
  let dateFormat= 'YYYY-MM-DD hh:mm:ss'
  let uid= randomUUID()
    config.query(insertQuery,[uid,input.name, input.specialization, moment(input.start).format(dateFormat), moment(input.end).format(dateFormat), input.slotCount, input.available], function(err, rows, fields){
      if (err) {
          return reject(err);
      }
      resolve(rows);
    })
  });
}
module.exports ={
    getSpecilizations:getSpecilizations,
    getDoctorList:getDoctorList,
    getAppointments:getAppointments,
    registerDoctor:registerDoctor,
    getDoctorListBySpecilization:getDoctorListBySpecilization
}