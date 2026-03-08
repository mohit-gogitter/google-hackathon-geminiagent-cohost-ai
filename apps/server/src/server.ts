import Fastify from "fastify";
import { WebSocketServer } from "ws";

const fastify = Fastify();

const server = fastify.server;

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("🎙 Podcast client connected");

  ws.on("message", (data) => {
    if (Buffer.isBuffer(data)) {
      console.log("Received audio chunk:", data.length);
    } else if (Array.isArray(data)) {
      const totalSize = data.reduce((acc, buf) => acc + buf.length, 0);
      console.log("Received audio chunk array:", totalSize);
    } else {
      console.log("Received non-buffer data");
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

fastify.get("/", async () => {
  return { status: "server running" };
});

const start = async () => {
  await fastify.listen({ port: 4000 });
  console.log("Server running on port 4000");
};

start();
