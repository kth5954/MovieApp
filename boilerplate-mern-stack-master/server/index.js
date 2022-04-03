const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
// 자신이 속하지 않은 다른 도메인, 다른 프로토콜, 혹은 다른 포트에 있는 리소스를 요청하는 cross-origin HTTP 요청 방식



// DB-Connect
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/api/favorite', require('./routes/favorite')) // 이걸 안하면 모든 서비스의 API를 index.js에 다 넣어줘야 함
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  app.use(express.static("client/build"));

  // index.html for all page routes html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});