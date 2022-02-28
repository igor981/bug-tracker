/* const db = require("./models");


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
   */