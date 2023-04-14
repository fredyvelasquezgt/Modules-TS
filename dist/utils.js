"use strict";
function add(x, y) {
    return x + y;
}
//acepta un tipo, recibe un array de ese tipo y devuelve algo de ese mismo tipo
function sample(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
const x = 1;
