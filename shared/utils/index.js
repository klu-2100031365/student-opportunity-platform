"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.formatDate = void 0;
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};
exports.formatDate = formatDate;
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalize = capitalize;
