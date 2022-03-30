/**
 * 是否是数组
 * @param value
 * @returns
 */
export function isArray(value: any): value is Array<any> {
  return typeof value !== "undefined" && value instanceof Array;
}

/**
 * 是否是对象
 * @param value
 * @returns
 */
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === "object";
}

/**
 * 是否是数字
 * @param value
 * @returns
 */
export function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

/**
 * 是否是JSON格式数字
 * @param value
 * @return {Boolean}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * tools.isJSON('123') // false
 * tools.isJSON('{a:1}') // true
 * ```
 */
export function isJSON(value: any) {
  if (typeof value == "string") {
    try {
      const obj = JSON.parse(value);
      return !!(typeof obj == "object" && obj);
    } catch (e) {
      return false;
    }
  }
}
