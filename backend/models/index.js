const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.jobtitle = require("../models/jobtitle.model.js")(sequelize, Sequelize);
db.organisation = require("../models/organisation.model.js")(sequelize, Sequelize);
db.project = require("../models/project.model.js")(sequelize, Sequelize);
db.ticket = require("../models/ticket.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// Organisations User
db.user.belongsToMany(db.organisation, {
  through: "user_organisations",
  foreignKey: "userId",
  otherKey: "organisationId"
});
db.organisation.belongsToMany(db.user, {
  through: "user_organisations",
  foreignKey: "organisationId",
  otherKey: "userId"
});


// User Projects
db.user.belongsToMany(db.project, {
  through: "user_projects",
  foreignKey: "userId",
  otherKey: "projectId"
});
db.project.belongsToMany(db.user, {
  through: "user_projects",
  foreignKey: "projectId",
  otherKey: "userId"
});

// User Tickets
db.user.belongsToMany(db.ticket, {
  through: "user_ticket",
  foreignKey: "userId",
  otherKey: "ticketId"
});
db.ticket.belongsToMany(db.user, {
  through: "user_ticket",
  foreignKey: "ticketId",
  otherKey: "userId"
});

// User jobtitle
db.user.belongsToMany(db.jobtitle, {
  through: "user_jobtitle",
  foreignKey: "userId",
  otherKey: "jobtitleId"
});
db.jobtitle.belongsToMany(db.user, {
  through: "user_jobtitle",
  foreignKey: "jobtitleId",
  otherKey: "userId"
});



db.ROLES = ["user", "admin", "moderator"];
module.exports = db;