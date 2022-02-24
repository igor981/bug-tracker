module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
    projectId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      projectName: {
        type: Sequelize.STRING
      },
      projectDescription: {
        type: Sequelize.STRING
      },
      projectFounderId: {
        type: Sequelize.STRING
      },
    });
    return Project;
  };