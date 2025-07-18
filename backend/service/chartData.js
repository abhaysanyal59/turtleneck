const Controller = require("../controller/chartData");
const Response = require("../response/utils");
const Lang = require("../locales/en.json");

exports.viewChartCount = async (request, response) => {
  console.log("🚀 Hit viewChartCount API"); // <== Add this
    try {
    const result = await Controller.viewChartCount(request.body);
    return Response.success(response, Lang.SUCCESS, result);
  } catch (error) {
    return Response.success(response, Lang.FAILURE);
  }
};

exports.viewEvents = async (request, response) => {
  try {
    const result = await Controller.viewEvents(request.body);
    return Response.success(response, Lang.SUCCESS, result);
  } catch (error) {
    return Response.success(response, Lang.FAILURE);
  }
};

exports.listData = async (request, response) => {
  try {
    const result = await Controller.listData(request.body);
    return Response.success(response, Lang.SUCCESS, result);
  } catch (error) {
    return Response.success(response, Lang.FAILURE);
  }
};