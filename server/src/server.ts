// import express, { Request, Response } from "express";
import express from "express";
import socketio from "socket.io";
import http from "http";
// import ejs from "ejs";

const app = express();
export const server = http.createServer(app);
export const socketServer = socketio(server);

// app.use(express.static("./dist"));
// app.set("views", "./dist");
// app.engine("html", ejs.renderFile);
// app.set("view engine", "html");

// app.use("/", (_req: Request, res: Response) => {
//   res.render("index.html");
// });

socketServer.on("connection", (socket) => {
  console.log(`Socket conectado: ${socket.id}`);
});

server.listen("8000", () => {
  console.log(`Servidor iniciado na porta: 8000`);
});
