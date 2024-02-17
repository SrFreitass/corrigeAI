import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import console from "console";
import fastify from "fastify";
import path from "path";
import { Router } from "./src/routers/router";

// Instace Fastify
const app = fastify();

// Initialization Routes
const router = new Router();
app.register(router.handle);
app.register(cors, {
  origin: "*",
  methods: ["GET", "PUT", "DELETE", "POST"],
});

app.register(fastifyStatic, {
  root: path.join(__dirname, "static/ilustrations/essays"),
  prefix: "/ilustrations/essays/",
});

app.listen({ port: 8080 }, (err, address) => {
  console.log("Listen", address);

  console.log(err);
});
