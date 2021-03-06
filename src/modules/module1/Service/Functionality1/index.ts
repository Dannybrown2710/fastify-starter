export interface Functionality1Service {
  function1: (param1: string, param2: any) => string;
}

export default (server, opts, next) => {
  async function function1(param1, param2) {
    try {
      //   return await server.db.models.User.findOneAndUpdate(
      //     { userId },
      //     { $set: { address } },
      //     { upsert: true, new: true }
      //   );
      return await Promise.resolve();
    } catch (err) {
      throw err;
    }
  }
  return {
    function1,
  };
};
