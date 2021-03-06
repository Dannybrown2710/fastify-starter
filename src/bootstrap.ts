import fp from "fastify-plugin";
import Channel from "./modules/Channel/"
export default fp(async (server, opts, next) => {
    server.register(Channel);
});
