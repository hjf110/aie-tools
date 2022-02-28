/**
 * 前端分页
 * @param data
 * @param page
 * @param count
 * @return {*[]}
 */
export const jsPaging = (data = [], page = 1, count = 10): any[] => {
  const end = page * count;
  const start = end - count < 0 ? 0 : end - count;
  return data.slice(start, end);
};

/**
 * 截取字符串
 * @param str 需要截取的字符串
 * @param start 开始截取的位置(包含)
 * @param end 截取结束的位置(包含)
 * @return {String}
 * ``` typescript
 * tools.onSubstring('123456789',5,8)  // 5678
 * ```
 */
export const onSubstring = (str: string, start: number, end: number) => {
  let _start = start - 1 <= 0 ? 0 : start - 1;
  return str.substring(_start, end);
};

/**
 * 通过 base64 下载图片
 * @param data 需要下载的图片的base64
 * @param filename 文件名称 ( 默认今天的日期 如 2022-02-24-img.png )
 */
export const downloadFile = (data: string, filename?: string) => {
  if (!filename) {
    let date = new Date();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    filename = `${date.getFullYear()}-${m < 10 ? `0${m}` : m}-${
      d < 10 ? `0${d}` : d
    }-img`;
  }
  let _doc: any = document;
  let downloadLink = _doc.createElement("a");
  if (downloadLink) {
    _doc.body.appendChild(downloadLink);
    downloadLink.style = "display: none";
    downloadLink.download = filename;
    downloadLink.href = data;
    if (_doc.createEvent) {
      let downloadEvt = _doc.createEvent("MouseEvents");
      downloadEvt.initEvent("click", true, false);
      downloadLink.dispatchEvent(downloadEvt);
    } else if (_doc.createEventObject) {
      downloadLink.fireEvent("onclick");
    } else if (typeof downloadLink.onclick == "function") {
      downloadLink.onclick();
    }
    _doc.body.removeChild(downloadLink);
  }
};

/**
 * 防抖函数
 * @param {function} func - 执行函数
 * @param {number} wait - 等待时间
 * @param {boolean} immediate - 是否立即执行
 */
export const debounce = (func: any, wait = 300, immediate = false) => {
  let timer: any, ctx: any;
  let later = (arg: any) =>
    setTimeout(() => {
      func.apply(ctx, arg);
      timer = ctx = null;
    }, wait);
  return function (...arg: any[]) {
    if (!timer) {
      timer = later(arg);
      // @ts-ignore
      ctx = this;
      if (immediate) {
        func.apply(ctx, arg);
      }
    } else {
      clearTimeout(timer);
      timer = later(arg);
    }
  };
};

/**
 * 对象属性剔除
 * @param object 目标对象
 * @param props 需要剔除的属性
 * @default props = []
 * @return {Object}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * let data = {
 *     id: 1,
 *     title: "xxx",
 *     comment: [],
 *   };
 * console.log(tools.omit(data, ["id"])); // => {title: "xxx", comment: []}
 * console.log(tools.omit(data, ["id", "comment"])); // => {title: "xxx"}
 * ```
 */
export function omit(object: any, props: string[] = []) {
  let res: any = {};
  Object.keys(object).forEach((key) => {
    if (props.includes(key) === false) {
      res[key] =
        typeof object[key] === "object" && object[key] !== null
          ? JSON.parse(JSON.stringify(object[key]))
          : object[key];
    }
  });
  return res;
}

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
function chooseField(object: any, props: string[] = []) {
  let res: any = {};
  let tempArr = Object.keys(object);
  props.forEach((key) => {
    if (tempArr.includes(key) === true) {
      res[key] =
        typeof object[key] === "object" && object[key] !== null
          ? JSON.parse(JSON.stringify(object[key]))
          : object[key];
    } else {
      res[key] = "";
    }
  });
  return res;
}

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
function getUrlParam() {
  let url = document.location.toString();
  let arrObj = url.split("?");
  let params = Object.create(null);
  if (arrObj.length > 1) {
    arrObj = arrObj[1].split("&");
    arrObj.forEach((item: any) => {
      item = item.split("=");
      params[item[0]] = item[1];
    });
  }
  return params;
}

/**
 * 浏览器全屏
 *
 */
export function fullScreen() {
  let elem: any = document.body;
  elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert("浏览器不支持全屏");
}

/**
 * 退出全屏
 */
export function fullscreenExit() {
  let elem: any = parent.document;
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert("切换失败,可尝试Esc退出");
}

/**
 * 千分位显示，常用于价格显示
 * @param num
 * @return {string}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * tools.toThousands(1000000)  // 1,000,000.00
 * ```
 */
export function toMoney(num: string | number) {
  return parseFloat(num + "")
    .toFixed(2)
    .replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
}
