//Basic required imports for NodeJS
var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")

//Get port
const port = process.env.PORT || 4000

//Create an instance of express for app and instantiate bodyParser and cors
var app = module.exports = express()
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
  res.render('index.html')
})



//GET call to return JSON that formats natural and unix dates
app.get('/api/timestamp/:dateVal', (req, res) => {
  //Gets request data for date
  var dateVal = req.params.dateVal

  if (isNaN(dateVal)) {
    var utcDate = new Date(dateVal)
    utcDate = utcDate.toUTCString()
    var unixDate = new Date(dateVal).getTime()/1000;
  } else {
    var utcDate = new Date(dateVal * 1000)
    var unixDate = dateVal
    utcDate = utcDate.toUTCString()
  }

  res.json({unix: unixDate, utc: utcDate})
})

app.listen(port, function() {
  console.log("Working")
})