module.exports.badRequest = (response, message, data) => {
  return response.status(400).json({
    statusCode: 400,
    message: message,
    data: data,
    status: "Bad Request",
  });
};

module.exports.success = (response, message, data) => {
  return response.status(200).json({
    statusCode: 200,
    message: message,
    status: "Successful",
    data: data,
  });
};
