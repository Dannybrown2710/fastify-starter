import { FastifyInstance } from "fastify";

export async function getData(request, reply) {
  try {
    const server: FastifyInstance = this;
    const users = server.functionalityService.function1();
    reply.code(200).send({ users });
  } catch (err) {
    console.log(err.message);
    reply.code(503).send({ message: "Service not available" });
  }
}
