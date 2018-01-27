"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    // port
    port: process.env.PORT || 3000,
    // database
    db: 'mongodb://localhost/node-api',
    // test enviroment
    test_env: 'test',
    test_db: 'mongodb://localhost/node-api-test',
    test_port: 3001
};
exports.default = config;
//# sourceMappingURL=main.js.map