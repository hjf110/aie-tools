export function isArray(value: any): value is Array<any> {
    return typeof value !== "undefined" && value instanceof Array;
}

export function isObject(value: any): value is Record<string, any> {
    return value !== null && typeof value === "object";
}

export function isNumber(value:any) :boolean {
    return typeof value === 'number' && !isNaN(value);
}
