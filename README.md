# hjf-tools

## 项目开始
```
npm i hjf-tool
```
```
import tools form 'hjf-tool'
```
### 使用
```
import tools form 'hjf-tool'

//判断当前浏览器是移动端(false)还是pc端(true)
tools.getEnv() // true or false

//isArray 判断是否是数组
tools.isArray([1,2,3]) //true
tools.isArray('1') //false

//isObject 判断是否是对象
tools.isObject({a:1}) //true
tools.isObject('1') //false

//isNumber 判断是否是数字
tools.isNumber(1) //true
tools.isNumber('1') //false

//前端分页
let dataList = [1,2,3,4,5,6,7,8,9,10];
                               // data   page  count
let _dataList = tools.jsPaging( dataList , 1 , 2 ); //  [1,2]
```

### 所有方法

<span style="font-size: xx-small; ">

| 方法名称         | 描述               | 入参                                                                                                                          | 返回      | 备注  |
|--------------|------------------|-----------------------------------------------------------------------------------------------------------------------------|---------|-----|
| getEnv       | 判断当前浏览器是移动端还是pc端 | 无                                                                                                                           | boolean |     |
| isArray      | 判断是否是数组          | (any)                                                                                                                       | boolean |     |
| isObject     | 判断是否是对象          | (any)                                                                                                                       | boolean |     |
| isNumber     | 判断是否是数字          | (any)                                                                                                                       | boolean |     |
| hidePhone    | 手机号脱敏            | (string)                                                                                                                    | string  |     |
| hideName     | 姓名脱敏             | (string)                                                                                                                    | string  |     |
| hideEmail    | 邮箱脱敏             | (string)                                                                                                                    | string  |     |
| hideIdCard   | 身份证脱敏            | (string)                                                                                                                    | string  |     |
| hideStr      | 脱敏任意字符串          | ( str: string , front?: number , back?: number , _hideStr?: string )  <br> <br>  ( 需要脱敏的字符串 , 前面显示几位 , 后面显示几位 , 脱敏后显示的字符串 ) | string  |     |
| jsPaging     | 前端JS 分页          | ( data: any[] , page: number , count: number )     <br> <br>   ( 需要分页的数组 , 当前页数 , 每页显示多少条 )                                 | any[]   |     |
| onSubstring  | 截取字符串            | ( str: string , start: number , end: number )     <br> <br>   ( 需要截取的字符串 , 开始截取的位置(包含) , 截取结束的位置(包含) )                      | string  |     |
| downloadFile | 通过 base64 下载图片   | ( data : string , filename ?: string )   <br> <br> ( base64字符串 , 下载的文件名称 )                                                  | void    |     |

</span>
#### 持续更新中...
