const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const { getAdminJobs, getAllJobs, getJobById, postJob } = require("../controllers/jobcontroller.js");

const router = express.Router();

router.post("/post",isAuthenticated, postJob);
router.get("/get",isAuthenticated, getAllJobs);
router.get("/getadminjobs",isAuthenticated, getAdminJobs);
router.get("/get/:id",isAuthenticated, getJobById);

module.exports = router;
