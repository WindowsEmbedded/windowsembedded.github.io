/**
 * Sys46 WebOS Framework
 */ 
var Sys46 = {} 
Sys46.Var = {} //系统变量
Sys46.System = {}
Sys46.documents = {} //HTML操作
Sys46.Var.SystemName = "Windows 90";
Sys46.Var.SystemVersion = "Milestone 1: 0.5.1000";
document.oncontextmenu = function(e){ //禁用常规右键菜单
    return false;
}
document.addEventListener("selectstart",function(e){
    e.preventDefault(); //禁止选中文字
})

Sys46.documents.GetHTMLObject = function(DivID){ //返回对象
    return document.getElementById(DivID);
}
Sys46.documents.setCookie = function(name,value,expirday) { //设置cookie
    var cookie = name + "=" + value;
    if (typeof expirday == "number") {
        cookie += "; max-age=" + (expirday * 24 * 60 * 60);
    }
    document.cookie = cookie;
}
Sys46.documents.getCookie = function(name) { //读取cookie
    var cname = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++) {
        var c = ca[i].trim();
        if (c.indexOf(cname)==0) return c.substring(cname.length,c.length);
    }
    return "";
}

Sys46.documents.isIE = function() { //判断浏览器是不是IE
    if (!! window.ActiveXObject || "ActiveXObject" in window) return true;
    else return false;
}

Sys46.Var.toBoolean = function(str) {
    if (str == "true") {return true;}
    else if (str == "false") {return false;}
    else {return undefined;}
}

document.ondragstart = function(ev) {
	ev.preventDefault();
};
document.ondragend = function(ev) {
	ev.preventDefault();
};
