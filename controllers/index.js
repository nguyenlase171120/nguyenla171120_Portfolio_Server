const {
  workModel,
  miniModel,
  aboutModel,
  projectModel,
} = require("../models/index.js");

const userController = {
  getCurrentWorks: async (req, res) => {
    try {
      const result = await workModel.find();
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  getCurrentProject: async (req, res) => {
    try {
      const result = await miniModel.find();
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  getCurrentProfile: async (req, res) => {
    try {
      const result = await aboutModel.find();
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  getCurrentExperience: async (req, res) => {
    try {
      const result = await projectModel.find();
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = userController;
