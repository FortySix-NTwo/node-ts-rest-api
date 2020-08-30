"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const NotFoundError = (router) => {
    router.use((_req, _res) => {
        utils_1.ErrorHandler.notFoundError();
    });
};
const ClientError = (router) => {
    router.use((err, _req, res, next) => {
        if (err.code === 'UnauthorizedError') {
            err = new utils_1.HTTP401Error();
        }
        else if (err.code === 'ForbiddenError') {
            err = new utils_1.HTTP403Error();
        }
        else {
            err = new utils_1.HTTP400Error();
        }
        utils_1.ErrorHandler.clientError(err, res, next);
    });
};
const ServerError = (router) => {
    router.use((err, _req, res, next) => {
        utils_1.ErrorHandler.serverError(err, res, next);
    });
};
exports.default = [NotFoundError, ClientError, ServerError];
//# sourceMappingURL=handleErrors.js.map