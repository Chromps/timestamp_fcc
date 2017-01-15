const express = require('express');
const app = express();


app.get('/:timestamp', function(req, res){
  var date;
  var timestamp = req.params.timestamp;
    if(+timestamp > 0){
      date = new Date(+timestamp)
    }
    else if(Date.parse(timestamp)){
      date = new Date(timestamp)
    }
    else{
      res.status(500)
      res.send({
        unix: null,

        natural: null
      })
      return
    }


    var dateObj = {};
    dateObj.unix = date.getTime()
    var nat = `${date.getUTCMonth()} ${date.getDate()}, ${date.getFullYear()}`
    dateObj.natural = date.toLocaleString('en-us', { month: 'long', day:'numeric', year:'numeric' });
    res.status(200)
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(dateObj))





}).listen(8080)
