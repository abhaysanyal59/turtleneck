const router = require("express").Router();
const chartRoutes = require("./chart")


router.use("/chart", chartRoutes);

module.exports = router;
