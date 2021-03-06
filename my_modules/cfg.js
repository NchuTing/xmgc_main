/*所有设置参数
必须在app文件夹外面有合法的xcfg.json用以保存私密参数
xcfg文件json的读写功能
*/

var _cfg = {};

//全局app路径
global.__path=$path.dirname(require.main.filename);

/*全局错误代码*/
var __errCode = global.__errCode = {
    APIERR: 8788, //API接口异常，未知错误
    NOTFOUND: 4312, //找不到目标
};


//正则表达式
_cfg.regx = {
    phone: /^1\d{10}$/,
    phoneCode: /^\d{6}$/,
    pw: /^[0-9a-zA-Z]{32}$/, //md5之后的格式
    nick: /^[a-zA-Z\u0391-\uFFE5]+[0-9a-zA-Z\u0391-\uFFE5\.]{2,17}$/, //昵称，非数字开头3~18位
    color: /^#[a-fA-F0-9]{6}$/, //颜色值，#开头十六进制
    icon: /^fa-[\w-]{1,32}$/, //fa图标值
    ukey: /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/, //user.ukey的格式
    crossDomains:/^\w*\.?\w*\.?xmgc360\.com$/,//接收跨域的请求
};


//导出模块
module.exports = _cfg;
