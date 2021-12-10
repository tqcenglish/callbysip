console.log("csdn 阅读优化");
// 自动阅读更多
$(".hide-article-box").remove();
// 修正内容高度
$(".article_content").css("height", "100%");
//删除广告
$(".p4course_target").remove();

setTimeout(() => {
  //广告拦截提示
  $(".adblock").remove();
  //登录注册提示
  $(".pulllog-box").remove();
}, 2000);
