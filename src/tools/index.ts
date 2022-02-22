export function mixin<T, U>(to: any, from: Array<U>): T {
    from.forEach((obj:any) => {
        Object.getOwnPropertyNames(obj).forEach(key => {
            to[key] = obj[key];
        });
    });
    return to;
}
