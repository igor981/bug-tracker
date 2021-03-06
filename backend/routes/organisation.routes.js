const { authJwt } = require("../middleware");
const controller = require("../controllers/organisation.controller");
module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/organisation/create", controller.create);
  app.post("/api/organisation/delete", controller.delete);
  app.post("/api/organisation/getall", controller.getAll);
}