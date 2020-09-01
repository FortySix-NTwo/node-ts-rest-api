"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
const jsonwebtoken = __importStar(require("jsonwebtoken"));
const config_1 = require("../../config");
const { jwt } = config_1.config;
class AuthToken {
    constructor(user) {
        if (!jwt)
            throw new Error('Internal error');
        this.value = jsonwebtoken.sign({ email: user.email }, jwt, {
            expiresIn: '12h',
        });
    }
    static verify(token) {
        if (!jwt)
            throw new Error('Internal error');
        return jsonwebtoken.verify(token, jwt);
    }
    verify() {
        return AuthToken.verify(this.value);
    }
}
exports.AuthToken = AuthToken;
//# sourceMappingURL=authoenticationRepository.js.map