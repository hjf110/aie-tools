/**
 * 前端分页
 * @param data
 * @param page
 * @param count
 * @return {*[]}
 */
export const jsPaging = (data = [], page = 1, count = 10): any[] => {
  let end = page * count;
  let start = end - count < 0 ? 0 : end - count;
  return data.slice(start, end);
};
