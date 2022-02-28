module.exports = (sequelize, Sequelize) => {
    const Organisation = sequelize.define("organisations", {
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