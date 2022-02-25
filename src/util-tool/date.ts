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
export function formatDate(format = "YYYY-MM-DD", timestamp: any = new Date()) {
  let date = new Date(timestamp);
  let dateInfo = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };
  let formatNumber = (n: number) => (n >= 10 ? n : "0" + n) + "";

  return format
    .replace("YYYY", String(dateInfo.YYYY))
    .replace("MM", formatNumber(dateInfo.MM))
    .replace("DD", formatNumber(dateInfo.DD))
    .replace("hh", formatNumber(dateInfo.hh))
    .replace("mm", formatNumber(dateInfo.mm))
    .replace("ss", formatNumber(dateInfo.ss));
}
