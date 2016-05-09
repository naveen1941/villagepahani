var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


router.get('/quakes.csv', function(req, res, next) {
  var filePath = path.join(__dirname, 'data/quake.csv');
  fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            res.end(); 
        }
        else {
            res.writeHead(200, { 'Content-Type': "text/csv" });
            res.end(content, 'utf-8');
        }
    });
});

router.get('/sample1.csv', function(req, res, next) {
  var filePath = path.join(__dirname, 'data/Sample1.csv');
  fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            res.end(); 
        }
        else {
            res.writeHead(200, { 'Content-Type': "text/csv" });
            res.end(content, 'utf-8');
        }
    });
});

router.get('/sample2.csv', function(req, res, next) {
  var filePath = path.join(__dirname, 'data/Sample2.csv');
  fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            res.end(); 
        }
        else {
            res.writeHead(200, { 'Content-Type': "text/csv" });
            res.end(content, 'utf-8');
        }
    });
});

router.get('/sample3.csv', function(req, res, next) {
  var filePath = path.join(__dirname, 'data/Sample3.csv');
  fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            res.end(); 
        }
        else {
            res.writeHead(200, { 'Content-Type': "text/csv" });
            res.end(content, 'utf-8');
        }
    });
});



module.exports = router;
