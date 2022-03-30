/**
 * 手机号脱敏
 * @param phone
 * @return {String}
 */
export const hidePhone = (phone: string) => {
  if (!phone) return "";
  return phone.slice(0, 3) + "****" + phone.slice(phone.length - 4);
};

/**
 * 姓名脱敏
 * @param name
 * @param _hideStr
 * @return {String}
 */
export const hideName = (name: string, _hideStr = "*") => {
  if (!name) return "";
  if (name.length <= 2) {
    return hideStr(name, 1, 0, _hideStr);
  } else {
    return hideStr(name, 1, 1, _hideStr);
  }
};

/**
 * 邮箱脱敏
 * @param email
 * @return {String}
 */
export const hideEmail = (email: string) => {
  if (!email) return "";
  let str = email.split("@");
  return str[0].substr(0, str[0].length - 2) + "*****" + str[1].substr(2);
};

/**
 * 身份证脱敏
 * @param card
 * @return {String}
 */
export const hideIdCard = (card: string) => {
  if (!card) return "";
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
export const hideStr = (
  str: string,
  front = 3,
  back = 4,
  _hideStr = "****"
) => {
  if (!str) return "";
  return str.slice(0, front) + _hideStr + str.slice(str.length - back);
};
