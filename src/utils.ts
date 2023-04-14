export function add(x:number,y:number) {
    return x + y;
} 

//acepta un tipo, recibe un array de ese tipo y devuelve algo de ese mismo tipo
export function sample<T>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx]
}



