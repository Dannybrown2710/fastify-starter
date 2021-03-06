import fp from "fastify-plugin";
import Module1 from "./modules/module1/"
export default fp(async (server, opts, next) => {
    server.register(Module1);
});
