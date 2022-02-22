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
        "iPod"
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
