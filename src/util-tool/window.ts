/**
 * 获取页面高度
 * @return {Number}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * tools.getPageHeight() // 1080
 * ```
 */
export function getPageHeight() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
/**
 * 获取页面宽度
 * @return {Number}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * tools.getPageWidth() // 1920
 * ```
 */
export function getPageWidth() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

/**
 * 获取页面scrollLeft
 * @return {Number}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * tools.getPageScrollLeft() // 50
 * ```
 */
export function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}

/**
 * 获取窗体可见范围的宽与高
 * @return {Object} { X : number , Y : number}
 * ``` typescript
 * import tools form 'hjf-tool'
 *
 * tools.getViewportOffset() // { X : 1920 , Y : 1080 }
 * ```
 */
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      X: window.innerWidth,
      Y: window.innerHeight,
    };
  } else {
    //IE8及以下
    if (document.compatMode == "BackCompat") {
      //如果是怪异模式、混杂模式
      return {
        X: document.body.clientWidth,
        Y: document.body.clientHeight,
      };
    } else {
      return {
        X: document.documentElement.clientWidth, //标准模式
        Y: document.documentElement.clientHeight,
      };
    }
  }
}
