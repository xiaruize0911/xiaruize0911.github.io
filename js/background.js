// 获取标签
// 全局背景div
var web_bg = document.getElementById("web_bg");
// 公共父级
var content_inner = document.getElementById("content-inner");
// 获取Cookies
// 透明度
var opacity = Cookies.get("opacity");
// 背景
var bg = Cookies.get("bg");
// 动画
var animation = Cookies.get("animation");
// 背景类型
var type = Cookies.get("type");
// 声明遍历 用于记录当前color
// 设置背景
if (bg) {
  web_bg.style.background = bg;
  web_bg.setAttribute("data-type", type);
  if (animation) {
    web_bg.style.animation = animation;
  }
}
function setColor(opacity) {
  // style="--light_bg_color: rgb(255, 255, 255,.3);--dark_bg_color: rgba(18,18,18,.2);"
  var light_bg_color = "--light_bg_color: rgb(255, 255, 255," + opacity + ");";
  var dark_bg_color = "--dark_bg_color: rgba(18,18,18," + opacity + ");";
  content_inner.setAttribute("style", light_bg_color + dark_bg_color);
}
setColor(opacity);