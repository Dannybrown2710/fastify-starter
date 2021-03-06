import { getData } from "./FunctionalityController";

const routes = [
  {
    method: "GET",
    url: "/blog",
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
