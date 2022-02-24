module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("tickets", {
      ticketId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      projectId: {
        type: Sequelize.STRING
      },
      projectName: {
        type: Sequelize.STRING
      },
      projectDescription: {
        type: Sequelize.STRING
      },
      ticketName: {
        type: Sequelize.STRING
      },
      ticketDescription: {
        type: Sequelize.STRING
      },
      ticketStarter: {
        type: Sequelize.STRING
      },
    });
    return Ticket;
  };