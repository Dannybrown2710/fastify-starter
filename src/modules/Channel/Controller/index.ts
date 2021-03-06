import fp from "fastify-plugin";
import routes from "./ChannelRoutes";
const channelRoutePrefix = '/channel';
export default fp(async (server, opts, next) => {
  routes.forEach((route) => {

    route.url = channelRoutePrefix + route.url;
    server.route(route);
  });
});

