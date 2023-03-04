const redis = require("redis");
require("dotenv").config();

//* Connecting to Redis
const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
});

client.connect().catch((err) => {
  console.log(err);
});

const hashGet = (field, key) => {
  client
    .hGet(field, key)
    .then((reply) => {
      console.log(key, reply);
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
};

hashGet("january", "monthly_income");

const hashSet = (field, key, value) => {
  client
    .hSet(field, key, value)
    .then((reply) => {
      console.log(reply);
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
};

// hashSet("february", "total_assets", 9500);
