const router = require("express").Router();
const {
  getCurrentWorks,
  getCurrentProject,
  getCurrentProfile,
  getCurrentExperience,
} = require("../controllers/index.js");

router.get("/worked", getCurrentWorks);
router.get("/projects", getCurrentProject);
router.get("/aboutMe", getCurrentProfile);
router.get("/experiences", getCurrentExperience);

module.exports = router;
