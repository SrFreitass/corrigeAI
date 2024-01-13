import fastify from 'fastify';
import { Router } from './src/routers/router';
import { PrismaClient } from '@prisma/client';

// Instace Fastify
const app = fastify();

// Initialization Routes
new Router(app).handle();

app.listen({ port: 8080 }, (err, address) => {
  try {
    console.log('Listen', address);
  } catch (err) {
    process.exit(1);
  }
});
