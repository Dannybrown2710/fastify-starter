import fp from "fastify-plugin";
import Functionality1Service from './Service';
import Functionality1Controller from './Controller';
export default fp(async (server, opts, next) => {
    server.register(Functionality1Service);
    server.register(Functionality1Controller);
});
