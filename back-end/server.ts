import fastify from 'fastify';
import { Router } from './src/routers/router';
import cors from '@fastify/cors';
import { Console } from 'console';

// Instace Fastify
const app = fastify();

// Initialization Routes
const router = new Router();
app.register(router.handle);
app.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'DELETE', 'POST'],
});

app.listen({ port: 8080 }, (err, address) => {
  console.log('Listen', address);

  console.log(err);
});
