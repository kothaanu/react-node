const path = require('path');
require('dotenv').config();

const appIndex = function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
};


const UserProxySettings = {
    target: process.env.USERS_URL,
    changeOrigin: true,
    ws: true,
    secure: false,
    pathRewrite: function(path, req) {
        return path.replace('/api/users', '/users');
    },
};

exports.appIndex = appIndex;
exports.UserProxySettings = UserProxySettings;

