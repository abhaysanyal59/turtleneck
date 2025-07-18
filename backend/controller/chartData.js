const LogModel = require("../schema/log.model"); // Adjust path as needed

exports.viewChartCount = () => {
  return new Promise((resolve, reject) => {
    LogModel.aggregate([
      {
        $group: {
          _id: "$event_type",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          event_type: "$_id",
          count: 1,
        },
      },
    ])
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

exports.viewEvents = () => {
  return new Promise(async (resolve, reject) => {
    const aggregationQuery = [
      {
        $project: {
          hour: { $hour: "$timestamp" },
        },
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          hour: "$_id",
          count: 1,
        },
      },
      {
        $sort: { hour: 1 },
      },
    ];

    LogModel.aggregate(aggregationQuery)
      .then((data) => {
        const eventData = Array.from({ length: 24 }, (_, hour) => {
          const found = data.find((item) => item.hour === hour);
          return {
            hour,
            count: found ? found.count : 0,
          };
        });
        resolve(eventData);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.listData = async (payload) => {
  const page = payload.page || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  try {
    const [result, totalCount] = await Promise.all([
      LogModel.aggregate([
        {
          $project: {
            _id: 1,
            event_type: 1,
            count: 1,
            username: 1,
            source_ip: 1,
            destination_ip: 1,
            details: 1,
            timestamp: 1,
          },
        },
        { $skip: skip },
        { $limit: limit },
      ]),
      LogModel.countDocuments({}),
    ]);

    return { result, totalCount };
  } catch (error) {
    throw error;
  }
};
