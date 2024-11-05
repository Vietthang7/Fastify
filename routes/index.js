import { index } from "../controllers/index.controller.js";
async function routes(fastify, options) {
  fastify.get('/', index);
}
export default routes;
