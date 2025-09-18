// import { Redis } from "ioredis";
// let redis: Redis;
// if (process.env.NODE_ENV === "production") {
//   redis = new Redis(process.env.REDIS_HOST);
// } else {
//   redis = new Redis({
//     host: "localhost",
//     port: 6379,
//   });
// }

// export default redis ;


// src/config/redis.ts
import { Redis } from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  username: "default",
  tls: {}, // Upstash requires TLS
});

   if(redis){
    console.log("redis is connect")
   }
export default redis;







// index.ts or server.ts
// import "dotenv/config";

// import { createClient } from 'redis';

// const redis = createClient({
//     username: 'default',
//     password: '6j1lEkmdLZhjC5KLUf1O2TrHCy5SQ0Xy',
//     socket: {
//         host: 'redis-12427.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 12427
//     }
// });

// redis.on('error', (err) => console.log('Redis Client Error', err));
// try{
//  await redis.connect();
//   console.log("redis is connect")
// }
// catch(err){
//     console.log("error",err);
// }
   
// export default redis;

// import { createClient } from 'redis';

// const redis = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASSWORD,
//     socket: {
//         host: process.env.REDIS_HOST,
//         port: Number(process.env.REDIS_PORT),
//     },
// });

// // Only add this listener once
// redis.on('error', (err) => console.log('Redis Client Error', err));

// let isConnected = false;

// // Export a connect function
// export const connectRedis = async () => {
//     if (!isConnected) {
//         await redis.connect();
//         isConnected = true;
//         console.log("✅ Redis connected");
//     }
// };

// export default redis;
