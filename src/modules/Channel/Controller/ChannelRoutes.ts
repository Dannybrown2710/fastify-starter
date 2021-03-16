import { RouteType } from "GenericTypes/RouteType";
import { getData } from "./ChannelController";

const routes :[RouteType] = [
  {
    method: "GET",
    url: "/demo",
    handler: getData,
  },
//   {
//     method: "GET",
//     url: "/blogs/:id",
//     handler: null,
//   },
//   {
//     method: "POST",
//     url: "/blogs",
//     handler: null,
//   },
//   {
//     method: "PUT",
//     url: "/blogs/:id",
//     handler: null,
//   },
//   {
//     method: "DELETE",
//     url: "/blogs/:id",
//     handler: null,
//   },
];

export default routes;
