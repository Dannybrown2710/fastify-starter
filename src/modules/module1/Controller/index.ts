import fp from "fastify-plugin";
import routes from "./CategorisedRoutes";
export default fp(async (server, opts, next) => {
  routes.forEach((route, index) => {
    server.route(route);
  });
});
