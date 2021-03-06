
import fastify from "fastify";
import bootstrap from "./bootstrap";
import dotenv from "dotenv";

const path = require("path");
// Define  Swagger Options
dotenv.config();

//define logger
const pino = require('pino');
//const logger = pino({level: process.env.LOG_LEVEL}, path.resolve(__dirname,process.env.LOG_FILE));

const logger = pino({level: process.env.LOG_LEVEL}, path.resolve(__dirname,process.env.LOG_FILE_LOCAL));

// Create fastify server
const server = fastify({
  logger,
});

server.register(bootstrap);
server.listen(Number(process.env.PORT), process.env.HOST);

process.on("uncaughtException", (error) => {
  console.error(error);
});
process.on("unhandledRejection", (error) => {
  console.error(error);
});

