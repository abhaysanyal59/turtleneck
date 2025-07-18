const router = require("express").Router();
const Service = require("../service/chartData");
const Validator = require("../validator/chart.validator");

router.post("/event-count", Service.viewChartCount);
router.post("/events-by-hour", Service.viewEvents);
router.post("/events", Validator.listData, Service.listData);

module.exports = router;
