const redis = require("redis");

const connectRedis = async () => {
    const client = redis.createClient("redis://localhost:6379");
    client.on("error", (err) => {
        console.log(err);
    })
    await client.connect();
    return client;
};
module.exports = connectRedis;