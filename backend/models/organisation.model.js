module.exports = (sequelize, Sequelize) => {
    const Organisation = sequelize.define("organisations", {
      organisationId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      organisationName: {
        type: Sequelize.STRING
      },
      organisationDescription: {
        type: Sequelize.STRING
      },
      organisationFounderId: {
        type: Sequelize.STRING
      },
    });
    return Organisation;
  };