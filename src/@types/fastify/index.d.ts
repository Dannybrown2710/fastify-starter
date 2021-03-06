import { Module1Service } from "./modules/module1/Service/";
import { Mongoose } from "mongoose";

declare module "fastify" {
  export interface FastifyInstance {
    module1: Module1;
    functionalityService: Module1Service;
    db: Mongoose;
  }
}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      HOST: string;
      PORT: string;
      SALT: string;
      DATABASE_URI: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      STATIC_FOLDER: string;
      SESSION_TIMEOUT: string;
      MYSQL_PORT: string;
      MYSQL_HOST: string;
      MYSQL_DATABASE: string;
      MYSQL_USER: string;
      MYSQL_PASS: string;
    }
  }
}
