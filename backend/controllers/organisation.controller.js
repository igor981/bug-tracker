const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Organisation = db.organisation;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    try {
         const userId = req.body.userId
        const organisation = await Organisation.create({
          organisationName: req.body.orgName,
          organisationDescription: req.body.orgDesc,
          organisationFounderId: userId
          })
 
        const user = await User.findByPk(req.body.userId)

        await user.setOrganisations(organisation)
        

        res.json({organisation})
        
    } catch (error) {
        res.json({message: error.message})
    }
    // Save User to Database

  };