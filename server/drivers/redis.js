const redis = require("redis");

const connectRedis = async () => {
    const client = redis.createClient();
    client.on("error", (err) => {
        console.log(err);
    })
    await client.connect();
    return client;
};
module.exports = connectRedis;