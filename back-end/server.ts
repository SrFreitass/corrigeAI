import fastify from 'fastify';
import { Router } from './src/routers/router';

// Instace Fastify
const app = fastify();

// Initialization Routes
const router = new Router();
app.register(router.handle);

app.listen({ port: 8080 }, (err, address) => {
  try {
    console.log('Listen', address);
  } catch (err) {
    process.exit(1);
  }
});
