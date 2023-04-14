"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
//acepta un tipo, recibe un array de ese tipo y devuelve algo de ese mismo tipo
function sample(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
exports.sample = sample;
