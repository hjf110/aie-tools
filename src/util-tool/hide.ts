/**
 * 手机号脱敏
 * @param phone
 * @return {String}
 */
export const hidePhone = (phone: string) => {
  return phone.slice(0, 3) + "****" + phone.slice(phone.length - 4);
};

/**
 * 姓名脱敏
 * @param name
 * @return {String}
 */
export const hideName = (name: string) => {
  return "*" + name.substring(name.length - 2);
};

/**
 * 邮箱脱敏
 * @param email
 * @return {String}
 */
export const hideEmail = (email: string) => {
  let str = email.split("@");
  return str[0].substr(0, str[0].length - 2) + "*****" + str[1].substr(2);
};

/**
 * 身份证脱敏
 * @param card
 * @return {String}
 */
export const hideIdCard = (card: string) => {
  return card.slice(0, 4) + "****" + card.slice(card.length - 4); // "5123****5645"
};

/**
 * 脱敏任意字符串
 * @param str
 * @param front 默认 3
 * @param back 默认 4
 * @param _hideStr 默认 ****
 * @return {String}
 */
export const hideStr = (str: string, front = 3, back: 4, _hideStr = "****") => {
  return str.slice(0, front) + _hideStr + str.slice(str.length - back);
};
