
const express = require('express')
const cors = require('cors')
const db = require("./models");



const app = express();

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const Role = db.role;

// db.sequelize.sync(); production
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


app.get("/", (req, res) => {
    res.json({ message: "Hello world." });
  });
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });