const Response = require("../response/utils");
const Lang = require("../locales/en.json");

module.exports.listData = (request, response, next) => {
  if (!request.body.page) {
    return Response.badRequest(response, Lang.PAGE_REQUIRED,null);
  }
  if (!request.body.limit) {
    return Response.badRequest(response, Lang.LIMIT_REQUIRED,null);
  }
  next();
};
