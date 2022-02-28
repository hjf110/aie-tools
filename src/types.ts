interface Env {
  /**
   *
   * 判断当前浏览器是移动端还是pc端
   * @return {boolean} pc: true; mobile: false
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * const env = tools.getEnv()
   * ```
   */
  getEnv(): boolean;
  /**
   * 判断是否为移动端
   * @returns {boolean}
   */
  isMobile(): boolean;
  /**
   * 判断是否为微信
   * @returns {boolean}
   */
  isFromWeiXin(): boolean;
  /**
   * 是否为安卓
   * @return {boolean}
   */
  isAndroid(): boolean;
  /**
   * 是否为IOS
   * @return {boolean}
   */
  isAndroid(): boolean;
  [key: string]: any;
}

interface Is {
  /**
   *
   * 判断是否是数组
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.isArray([1, 2])    // true
   * ```
   *
   */
  isArray(value: any): boolean;

  /**
   * 判断是否是对象
   * @param value
   * @return {boolean} true | false
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.isObject({a:1})  //true
   * ```
   */
  isObject(value: any): boolean;

  /**
   * 判断是否是数字
   * @param value
   * @return {Boolean}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.isNumber(1)  //true
   * ```
   */
  isNumber(value: any): boolean;
  [key: string]: any;
}

interface Hide {
  /**
   * 手机号脱敏
   * @param phone
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.hidePhone('13482354550')  // 134****4550
   * ```
   */
  hidePhone(phone: string): string;
  /**
   * 姓名脱敏
   * @param name
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.hideName('李思思')  // *思思
   * ```
   */
  hideName(name: string): string;
  /**
   * 邮箱脱敏
   * @param email
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.hideEmail('7385600001@qq.com')  // 73856000*****.com
   * ```
   */
  hideEmail(email: string): string;
  /**
   * 身份证脱敏
   * @param card
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.hideIdCard('512326199102115645')  // 5123****5645
   * ```
   */
  hideIdCard(card: string): string;
  /**
   * 脱敏任意字符串
   * @param str
   * @param front 默认 3
   * @param back 默认 4
   * @param _hideStr 默认 '****'
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.hideStr('123456789')  // 123****6789
   * tools.hideStr('123456789',2,3,'---')  // 12---789
   * ```
   */
  hideStr(
    str: string,
    front?: number,
    back?: number,
    _hideStr?: string
  ): string;
}

interface Other {
  /**
   * 前端JS 分页
   * @param data 需要分页的数组
   * @param page 当前页数
   * @param count 每页显示多少条
   * @return {Array} any[]
   */
  jsPaging(data: any[], page: number, count: number): any[];
  /**
   * 截取字符串
   * @param str 需要截取的字符串
   * @param start 开始截取的位置(包含)
   * @param end 截取结束的位置(包含)
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.onSubstring('123456789',5,8)  // 5678
   * ```
   */
  onSubstring(str: string, start: number, end: number): string;
  /**
   * 通过 base64 下载图片
   * @param data 需要下载的图片的base64
   * @param filename 文件名称 ( 默认今天的日期 如 2022-02-24-img.png )
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.downloadFile('base64数据')  // 5678
   * ```
   */
  downloadFile(data: string, filename?: string): void;

  /**
   * 防抖函数
   * @param {function} func - 执行函数
   * @param {number} wait - 等待时间
   * @default wait = 300
   * @param {boolean} immediate - 是否立即执行
   * @default immediate = false
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.debounce(()=>{},300,true)
   * ```
   */
  debounce(func: any, wait?: number, immediate?: boolean): void;
  [key: string]: any;
}

interface Storage {
  /**
   * 存储localStorage
   * @param name 键名
   * @param content 值
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.setStoreLocal('name',123)
   * tools.setStoreLocal('name',{a:1,b:2})
   * ```
   */
  setStoreLocal(name: string, content: any): void;
  /**
   * 获取localStorage
   * @param name 键名
   * @return
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getStoreLocal('name')
   * ```
   */
  getStoreLocal(name: string): any;
  /**
   * 存储sessionStorage
   * @param name 键名
   * @param content 值
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.setStoreSession('name',123)
   * tools.setStoreSession('name',{a:1,b:2})
   * ```
   */
  setStoreSession(name: string, content: any): void;
  /**
   * 获取localStorage
   * @param name 键名
   * @return
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getStoreSession('name')
   * ```
   */
  getStoreSession(name: string): any;
  /**
   * 设置cookie
   * @param key 键名
   * @param value 值
   * @param expire 失效时间
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.setCookie('name',123,30)
   * ```
   */
  setCookie(key: string, value: any, expire: any): void;
  /**
   *  获取 Cookie
   * @param key 键名
   * @return
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getCookie('name',123,30)
   * ```
   */
  getCookie(key: string): any;
  /**
   * 删除cookie
   * @param key
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.delCookie('name')
   * ```
   */
  delCookie(key: string): void;
  /**
   * 对象属性剔除
   * @param object 目标对象
   * @param props 需要剔除的属性
   * @default props = []
   * @return {Object}
   * ``` typescript
   * import tools form 'hjf-tool'
   * let data = {
   *     id: 1,
   *     title: "xxx",
   *     comment: [],
   *   };
   * console.log(tools.omit(data, ["id"])); // => {title: "xxx", comment: []}
   * console.log(tools.omit(data, ["id", "comment"])); // => {title: "xxx"}
   * ```
   */
  omit(object: any, props: string[]): Object;

  /**
   * 对象属性的筛选
   * @param object 目标对象
   * @param props 需要删选的属性
   * @default props = []
   * @return {Object}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * let data = {
   *     a: 1,
   *     b: "xxx",
   *     c: [],
   *     d() {},
   *     e: "",
   *     f: 0,
   *     g: null,
   *     h: undefined,
   *     i: NaN,
   *     j: false,
   *   };
   * console.log(tools.chooseField(data, ["a", "c", "d", "e", "i", "z"])); // => {a: 1, c: Array(0), e: "", i: NaN, d: ƒ, z: ""}
   * ```
   */
  chooseField(object: any, props: string[]): Object;
  /**
   * 浏览器全屏
   */
  fullScreen(): void;
  /**
   * 退出全屏
   */
  fullscreenExit(): void;
}

interface Date {
  /**
   * 日期格式化
   * @description 一个很灵活的日期格式化函数，可以根据使用者给定的格式进行格式化，能应对大部分场景。
   * @param format 要格式化的格式
   * @param timestamp
   * @default format = 'YYYY-MM-DD'
   * @default timestamp = new Date()
   * @return {String}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * console.log(tools.formatDate()); // => 2021-07-23 10:56:01
   * console.log(tools.formatDate("YYYY年MM月DD日 hh:mm:ss")); // => 2021年07月23日 10:56:41
   * console.log(tools.formatDate("YYYY年MM月Dd日 hh:mm")); // => 2021年07月23日 10:57
   * console.log(tools.formatDate("MM月DD日 h:m")); // =>07月23日 11:00
   * console.log(tools.formatDate("hh:mm YYYY-MM-DD", 1627009064020)); // => 10:57 2021-07-23
   * console.log(tools.formatDate("hh:mm YYYY/MM/DD", 1627009064020)); // => 10:57 2021/07/23
   * ```
   */
  formatDate(format?: string, timestamp?: any): string;

  /**
   * 获取Url参数，返回一个对象
   * @constructor
   * @return {Object}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.GetUrlParam() // http://www.baidu.com/demo?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
   * ```
   */
  getUrlParam(): Object;
}

interface Window {
  /**
   * 获取页面高度
   * @return {Number}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getPageHeight() // 1080
   * ```
   */
  getPageHeight(): number;
  /**
   * 获取页面宽度
   * @return {Number}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getPageWidth() // 1920
   * ```
   */
  getPageWidth(): number;
  /**
   * 获取页面scrollLeft
   * @return {Number}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getPageScrollLeft() // 50
   * ```
   */
  getPageScrollLeft(): number;
  /**
   * 获取页面滚动距离
   * @return {Number}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getScrollOffset() // 800
   * ```
   */
  getScrollOffset(): number;
  /**
   * 获取页面scrollLeft
   * @return {Number}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getPageScrollLeft() // 50
   * ```
   */
  getPageScrollLeft(): number;
  /**
   * 获取窗体可见范围的宽与高
   * @return {{X:Number,Y:Number}}
   * ``` typescript
   * import tools form 'hjf-tool'
   *
   * tools.getViewportOffset() // { X : 1920 , Y : 1080 }
   * ```
   */
  getViewportOffset(): { X: number; Y: number };
}

export interface Types extends Env, Is, Other, Storage, Date, Window {}
