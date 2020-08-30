"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = exports.registerMiddleware = exports.ErrorHandler = void 0;
var errorHandler_1 = require("./errorHandler");
Object.defineProperty(exports, "ErrorHandler", { enumerable: true, get: function () { return __importDefault(errorHandler_1).default; } });
var middlewareWrapper_1 = require("./middlewareWrapper");
Object.defineProperty(exports, "registerMiddleware", { enumerable: true, get: function () { return __importDefault(middlewareWrapper_1).default; } });
var routesWrapper_1 = require("./routesWrapper");
Object.defineProperty(exports, "registerRoutes", { enumerable: true, get: function () { return __importDefault(routesWrapper_1).default; } });
__exportStar(require("./httpError"), exports);
//# sourceMappingURL=index.js.map