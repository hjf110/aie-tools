/**
 * 存储localStorage
 * @param name
 * @param content
 * @returns
 */
export const setStoreLocal = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 * @param name
 * @return
 */
export const getStoreLocal = (name: string) => {
  if (!name) return {};
  let _val = window.localStorage.getItem(name) || "{}";
  if (_val === "{}") return {};
  let a = _val?.indexOf("{") ? _val?.indexOf("{") > -1 : false;
  let b = _val?.indexOf("}") ? _val?.indexOf("}") > -1 : false;
  if (a && b) {
    return JSON.parse(_val);
  }
  return _val;
};

/**
 * 存储sessionStorage
 * @param name
 * @param content
 */
export const setStoreSession = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 * @param name
 */
export const getStoreSession = (name: string) => {
  if (!name) return {};
  let _val = window.sessionStorage.getItem(name) || "{}";
  if (_val === "{}") return {};
  let a = _val?.indexOf("{") ? _val?.indexOf("{") > -1 : false;
  let b = _val?.indexOf("}") ? _val?.indexOf("}") > -1 : false;
  if (a && b) {
    return JSON.parse(_val);
  }
  return _val;
};

/**
 * 设置cookie
 * @param key 键名
 * @param value 值
 * @param expire 失效时间
 */
export const setCookie = (key: string, value: any, expire: any) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};

/**
 *  获取 Cookie
 * @param key 键名
 * @return
 */
export const getCookie = (key: string) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  if (cookieValue === "{}") return {};
  let a = cookieValue?.indexOf("{") ? cookieValue?.indexOf("{") > -1 : false;
  let b = cookieValue?.indexOf("}") ? cookieValue?.indexOf("}") > -1 : false;
  if (a && b) {
    return JSON.parse(cookieValue);
  }

  return cookieValue;
};

/**
 * 删除cookie
 * @param key
 */
export const delCookie = (key: string) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
