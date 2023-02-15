import { env } from 'env'
import fastify from 'fastify'
import { transactionsRoutes } from 'routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
