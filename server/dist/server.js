"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketServer = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
exports.server = http_1.default.createServer(app);
exports.socketServer = socket_io_1.default(exports.server);
exports.socketServer.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);
});
exports.server.listen("8000", () => {
    console.log(`Servidor iniciado na porta: 8000`);
});
//# sourceMappingURL=server.js.map