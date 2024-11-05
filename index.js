import Fastify from 'fastify'
import routes from "./routes/index.js"
const fastify = Fastify({
  logger: true
})
// CommonJs
// const fastify = require('fastify')({
//   logger: true
// })
// Đăng ký các route  
fastify.register(routes);  
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()