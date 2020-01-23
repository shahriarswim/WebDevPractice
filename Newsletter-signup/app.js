const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/77cd10437e",
    method: "POST",
    headers: {
      Authorization: "Shahriar 11dd83ba0fd441b5cdff6dcf8e2b4ff8-us4"
    },
    body: jsonData
  };

  request(options, function(error, response, body) {
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html");
    } else if (error) {
      res.sendFile(__dirname + "/failure.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("server is running on port 3000.");
});
