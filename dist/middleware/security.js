"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const handleRateLimit = (router) => {
    const limit = express_rate_limit_1.default({
        max: 100,
        windowMs: 30 * 60 * 1000,
        message: `Request Limit per has been reached`,
    });
    router.use(limit);
};
const handleJSON = (router) => {
    router.use(express_1.default.json({ limit: '10kb' }));
};
const handleBodyParsing = (router) => {
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
};
const handleHTTPHeaders = (router) => router.use(helmet_1.default());
const handleCors = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
exports.default = {
    handleRateLimit,
    handleJSON,
    handleHTTPHeaders,
    handleCors,
    handleBodyParsing,
};
//# sourceMappingURL=security.js.map