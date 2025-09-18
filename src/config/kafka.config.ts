import { Kafka, logLevel } from "kafkajs";
import dotenv from "dotenv";

dotenv.config();

export const kafka = new Kafka({
  clientId: "chat-app",
  brokers: [process.env.KAFKA_BROKER!],
  ssl: {
   ca: [process.env.KAFKA_CA!],
 },
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_USERNAME!,
    password: process.env.KAFKA_PASSWORD!,
  },
  logLevel: logLevel.ERROR,
});

console.log(process.env.KAFKA_CA)
export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "chats" });

export const connectKafkaProducer = async () => {
  await producer.connect();
  console.log("✅ Kafka Producer connected");
};


// src/config/kafka.config.ts

// index.ts or server.ts
// import "dotenv/config";

// import { Kafka } from "kafkajs";
// import fs from "fs";
// import path from "path";

// const caPath = path.resolve(process.cwd(), "ca.pem"); // project root

// export const kafka = new Kafka({
//   clientId: "chat-app",
//   brokers: ["kafka-1bdbd659-singhkarishma418-345f.i.aivencloud.com:27453"],
//   sasl: {
//     mechanism: "plain",
//     username: "avnadmin",
//   },
//   ssl: {
//     ca: [fs.readFileSync(caPath, "utf-8")],
//   },
// });

// // console.log("kafak->",process.env.KAFKA_BROKERS);

// export const producer = kafka.producer();
// export const consumer = kafka.consumer({ groupId: "chats" });

// export const connectKafkaProducer = async () => {
//   await producer.connect();
//   console.log("✅ Kafka Producer connected");
// };
