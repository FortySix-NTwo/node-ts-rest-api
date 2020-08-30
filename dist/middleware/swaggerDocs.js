"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAPIDocs = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.handleAPIDocs = (router) => router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup());
//# sourceMappingURL=swaggerDocs.js.map