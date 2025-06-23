"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 8080),
    url: env('PUBLIC_URL', 'https://fyp-cms.up.railway.app'),
    app: {
        keys: env.array('APP_KEYS'),
    },
});
