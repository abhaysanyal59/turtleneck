const express = require("express");

const jsonMiddleware = express.json();

const loggerMiddleware = (request, response, next) => {
  const start = Date.now();

  response.on("finish", () => {
    const duration = Date.now() - start;
    const log = `[${request.method}] ${request.originalUrl} → ${response.statusCode} (${duration}ms)`;
    console.log(log);
  });

  next();
};

module.exports = {
  loggerMiddleware,
  jsonMiddleware,
};

