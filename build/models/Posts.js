"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        requiered: true
    },
    content: {
        type: String,
        default: '',
        requiered: true
    }
});
exports.default = mongoose.model('Post', PostSchema);
//# sourceMappingURL=Posts.js.map