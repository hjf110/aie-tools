/**
 * 存储localStorage
 * @param name
 * @param content
 * @returns
 */
import { isJSON } from "@/util-tool/is";

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
  const _val = window.localStorage.getItem(name) || "{}";
  if (isJSON(_val)) {
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
  const _val = window.sessionStorage.getItem(name) || "{}";
  if (isJSON(_val)) {
    return JSON.parse(_val);
  }
  return _val;
};

/**
 * 获取时间(设置cookie用)
 * @param str
 */
const getSec = (str: string) => {
  let str1 = str.substr(0, str.length - 1); //时间数值
  let str2 = str.substr(str.length - 1, 1); //时间单位
  if (str2 == "s") {
    return +str1 * 1000;
  } else if (str2 == "m") {
    return +str1 * 60 * 1000;
  } else if (str2 == "h") {
    return +str1 * 60 * 60 * 1000;
  } else if (str2 == "d") {
    return +str1 * 24 * 60 * 60 * 1000;
  }
};

/**
 * 设置cookie
 * @param key 键名
 * @param value 值
 * @param expire 失效时间
 */
export const setCookie = (key: string, value: any, expire: any) => {
  let strSec: any = getSec(expire);
  let exp: any = new Date();
  exp.setTime(exp.getTime() + strSec * 1);
  //设置cookie的名称、值、失效时间
  document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
};

/**
 *  获取 Cookie
 * @param key 键名
 * @return
 */
export const getCookie = (key: string) => {
  //获取当前所有cookie
  let strCookies = document.cookie;
  //截取变成cookie数组
  let array = strCookies.split(";");
  //循环每个cookie
  for (let i = 0; i < array.length; i++) {
    //将cookie截取成两部分
    let item = array[i].split("=");
    //判断cookie的name 是否相等
    if (item[0] == key) {
      return item[1];
    }
  }
  return null;
};

/**
 * 删除cookie
 * @param key
 */
export const delCookie = (key: string) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  //获取cookie是否存在
  let value = getCookie(key);
  if (value != null) {
    document.cookie = key + "=" + value + ";expires=" + exp.toUTCString();
  }
};
