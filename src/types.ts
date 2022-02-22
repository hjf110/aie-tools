import { isNumber, isObject } from "@/util-tool/is";
import { jsPaging } from "@/util-tool/other";

interface Env {
  /**
   *
   * 判断当前浏览器是移动端还是pc端
   * @return {boolean} pc: true; mobile: false
   * @author hjf
   * ``` typescript
   * const env = utils.getEnv()
   * ```
   */
  getEnv(): boolean;
}

interface Is {
  /**
   *
   * 判断是否是数组
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author hjf
   * ``` typescript
   * utils.isArray([1, 2])    // true
   * ```
   *
   */
  isArray(value: any): boolean;

  /**
   * 判断是否是对象
   * @param value
   * @return {boolean} true | false
   * @author hjf
   * ``` typescript
   * utils.isObject({a:1})  //true
   * ```
   */
  isObject(value: any): boolean;

  /**
   * 判断是否是数字
   * @author hjf
   * @param value
   * @return {Boolean}
   * ``` typescript
   * utils.isNumber(1)  //true
   * ```
   */
  isNumber(value: any): boolean;
}

interface Other {
  /**
   * 前端JS 分页
   * @author hjf
   * @param data 需要分页的数组
   * @param page 当前页数
   * @param count 每页显示多少条
   * @return {Array} any[]
   */
  jsPaging(data: any[], page: number, count: number): any[];
}
export interface Types extends Env, Is, Other {}
