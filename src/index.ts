
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

//register Swagger

// const start = async () => {
//   try {
//     await server.listen(Number(server.envConfig.PORT), server.envConfig.HOST);
//   } catch (err) {
//     //process.exit(1);
//     server.log.info(err);
//     console.log(err);
//   }
//   console.log('Fastify Servicer Started at PORT=', Number(server.envConfig.PORT),'Server IP=', server.envConfig.HOST);
// };

// server.register(fastifyenv, envSchema).after(() => {
  
// });
server.register(bootstrap);
server.listen(Number(process.env.PORT), process.env.HOST);

process.on("uncaughtException", (error) => {
  console.error(error);
});
process.on("unhandledRejection", (error) => {
  console.error(error);
});

