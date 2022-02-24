
const express = require("express");
const cors = require("cors");
const db = require("./models");

const corsOptions = {
  origin: "http://localhost:8081",
};
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

/* db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
}); */

/* 
Use sync with no parameters when in production 
*/
db.sequelize.sync()



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});