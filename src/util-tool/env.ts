/**
 *
 * @ignore
 * @return {boolean} 判断当前浏览器是移动端(false)还是pc端(true)
 *
 */
export function getEnv(): boolean {
  const userAgent = navigator.userAgent;
  const device: string[] = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;
  for (let i = 0; i < device.length; i++) {
    if (userAgent.indexOf(device[i]) !== -1) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * 判断是否为移动端
 * @returns {boolean}
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry|SymbianOS|Windows Phone/i.test(
    navigator.userAgent
  );
}

/**
 * 判断是否为微信
 * @returns {boolean}
 */
export function isFromWeiXin() {
  const ua: any = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === "micromessenger") {
    return true;
  }
}

/**
 * 是否为安卓
 * @return {boolean}
 */
export function isAndroid() {
  return /android/i.test(navigator.userAgent);
}

/**
 * 是否为IOS
 * @return {boolean}
 */
export function isIOS() {
  /ipad|iphone|mac/i.test(navigator.userAgent);
}
