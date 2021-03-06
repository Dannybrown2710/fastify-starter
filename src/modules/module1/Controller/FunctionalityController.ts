export async function getData(request, reply) {
  try {
    console.log(request);
    const users = null;
    reply.code(200).send({ users });
  } catch (err) {
    console.log(err.message);
    reply.code(503).send({ message: "Service not available" });
  }
}
