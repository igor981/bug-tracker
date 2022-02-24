module.exports = (sequelize, Sequelize) => {
    const JobTitle = sequelize.define("jobtitles", {
      jobTitleId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      jobTitleName: {
        type: Sequelize.STRING
      },
      organisationId: {
        type: Sequelize.STRING
      },
    });
    return JobTitle;
  };