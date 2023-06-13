//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const https = require('https');
require('dotenv').config();

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.get("/success.html", function(req, res){
  res.sendFile(__dirname + "/success.html");
});

app.get("/failure.html", function(req, res){
  res.sendFile(__dirname + "/failure.html");
});

app.post("/", function(req, res){
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us13.api.mailchimp.com/3.0/lists/c284beb6e7";

  const options = {
    method: "POST",
    auth: process.env.API_KEY
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function(data){
      const responseData = JSON.parse(data);
      if (response.statusCode === 200 && responseData.error_count === 0) {
        res.redirect("/success.html");
      } else {
        res.redirect("/failure.html");
      }
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running...");
});


