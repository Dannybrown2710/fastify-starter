import functionality1, { Functionality1Service } from "./Functionality1";
import fp from "fastify-plugin";

export interface Module1Service extends Functionality1Service {}

export default fp(async (server, opts, next) => {
  const services = [functionality1];
  let registeredService = {};
  services.forEach((service) => {
    const serviceInstance = service(server, opts, next);
    registeredService = { ...registeredService, ...serviceInstance };
  });
  server.decorate("functionalityService", registeredService);
});
