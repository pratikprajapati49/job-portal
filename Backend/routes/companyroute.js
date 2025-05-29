const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const { getCompany, getCompanyById, registerCompany, updateCompany } = require("../controllers/companycontroller.js");
const { singleUpload } = require("../middlewares/multer.js");

const router = express.Router();

router.post("/register",isAuthenticated,registerCompany);
router.get("/get",isAuthenticated,getCompany);
router.get("/get/:id",isAuthenticated,getCompanyById);
router.put("/update/:id",isAuthenticated,singleUpload,updateCompany);

module.exports = router;
