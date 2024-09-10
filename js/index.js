var data, i, j, linkEle, liwidth, num, setenname, svgnum, svgtimer, tablist, tabnum, tabsvg, weixinTip;
for (envDetector.isIE() || ($(".showsvg").text(3), $(".hiddensvg").hide(), svgnum = 3, svgtimer = setInterval(tabsvg = function () {
  return 0 === --svgnum && (clearInterval(svgtimer), $(".showsvg").hide(), $(".hiddensvg").show(), $(".ellipop").attr({fill: "url(#successbot)"}), $(".elliptop").attr({fill: "url(#successbot)"})), $(".showsvg").text(svgnum)
}, 1e3), setTimeout(function () {
  var e, t, i, a, n, s;
  if ("200pt" === $(".blingcircle image").eq(0).attr("x")) {
    for (n = [], t = i = 0, a = (e = [{x: "32pt", y: "80pt"}, {x: "320pt", y: "100pt"}, {
      x: "0pt",
      y: "160pt"
    }, {x: "312pt", y: "240pt"}, {
      x: "40pt",
      y: "272pt"
    }]).length; i < a; t = ++i) s = e[t], n.push($(".blingcircle image").eq(t).attr({x: s.x, y: s.y}));
    return n
  }
}, 4e3)), 768 <= $(window).outerWidth() && (/msie [6|7|8|9]/i.test(navigator.userAgent) || (window.scrollReveal = new scrollReveal({reset: !0}))), $(window).scroll(function () {
  var e;
  if (e = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, $(this).outerWidth() < 768) return 750 < e ? ($(".fixtop .fiximg").attr({src: "./assets/index/kuailian/images/logom.jpg"}), $("#wrapper .fixtop").addClass("fixtopstyle")) : ($(".fixtop .fiximg").attr({src: "./assets/index/kuailian/images/logo.png"}), $("#wrapper .fixtop").removeClass("fixtopstyle"))
}), data = [
  "用着非常棒，界面看着好舒服，也没有广告很良心，感谢又能让我联系到facebook上的朋友了，用来玩外服游戏也很顺畅。",
  "简单好用速度快，简直神奇，连接速度极快，玩坦克世界闪电战贼稳，断了还能自动连接,这个vpn帮了大忙了。",
  "终于找到了，竟然还没有流量限制，每天都离不开google和YouTube，最最最大的福利是tumblr看视频一点都不卡，老司机懂的！",
  "快连这个软件非常良心，界面操作简便不繁琐一用就会了，链接速度稳定不断线，看视频打游戏都很好用，偶尔上ins找我的男神表白，太爽了。",
  "我覺得這個軟件非常的好，也不知道為什麼，我覺得他的界面十分的整潔，讓我看的一目了然，不像某些vpn軟件說的挺好，可是用起來卻不行，我覺得以後我是不會卸載這款vpn軟件了。",
  "真的是很棒了 價格能接受 速度超級快的vpn 不出意外會一直用下去的 服務器也很穩定 棒棒噠。",
  "作者簡直太良心了，速度比同類軟件快上不止一倍啊，用過最好最舒心的vpn，給作者一個大大的讚！",
  "一直在用快連vpn，網絡挺穩定的，一直以為這些軟件都是一樣卡頓，快連就是不一樣，好軟件，超信賴！也推薦給了朋友了，一直都用這個，好評！ ！ ！",
  "This app is really super strong! Big push. NetEase Cloud Gray Song all turn black can listen, do not exaggerate.",
  "it's been seamless running on my Huawei Mate 20 phone. I don't feel any wall at all. I tested this app with my previous provider Fatiaoyun. Lets VPN is a clear winner on speed and connectivity.",
  "Download a bunch of software can not be connected to the mainland, only this will not have to pay, so I am also very happy to pay a little reward amount, thank you this VPN so that I can use a lot of music app to listen to songs, there is support for Google payment, powerful.",
  "Extremely powerful! Mom no longer have to worry I can't see the limit TV series!",
  "Super easy to use VPN some can only look at the anime in China ヽ (′? ') Hinoko anime fans to express a satisfaction.",
  "Единственное приложение работающее в Туркмении, открывает инстаграм, вк, твитер и все заблокированные сайты. Мне нравится",
  "Всё хорошо работает даже супер??",
  "Super! Thank you for programmer! Tm-da i?ley?r.",
  "Самый лучший ВПН супер",
  "Благодарю разработчиков за данный впн",
  "I gowy vpn gatygowysowz?zok i bet bet vpn",
  "Normalno 1 gun bolsada bolya??",
  "Cok guzel tkmda calisyor ??????",
  "相对于榜首的各大软件，价格相对而言算是便宜。下载后就像看见新大陆一样，十分好用，希望可以继续保留住这块净土和小确幸，直到阳光照到你们~",
  "雪中送炭呀，特别赞，对于我这个需要经常翻墙的人简直就是救星，看1080p的YouTube视频毫无压力，也不限速，非常好。"
], i = j = 0; j <= 26; i = ++j) $(".imglist li.item").eq(i).find("img").attr({src: "/assets/index/kuanlian/images/user" + (i + 1) + ".png"});
setenname = function (e) {
  var t;
  if (t = $(".carousel .imglist li").eq(e).find(".carousel-caption span"), "zh-tw" === curlng) {
    if ("Personal User" === t.text() || "AAA" === t.text()) return t.text("BBB")
  } else if ("zh" === curlng) {
    if ("Personal User" === t.text() || "CCC" === t.text()) return t.text("DDD")
  } else if ("EEEE" === t.text() || "FFFFF" === t.text()) return t.text("Personal User")
}, num = 0, num = $("#wrapper").outerWidth() < 768 ? 1 : 2, setenname(num), $(".carousel .imglist li").eq(num).addClass("active"), $(".evaluation>.evacont").html(data[num]), $(".carousel .imglist li").eq(num).find(".carousel-caption").show(), tablist = function (e, t, i) {
  return setenname(e + 1), $(".carousel .imglist").css(t, 0), "left" === t ? $(".evaluation .evaimg ul li").eq(i).appendTo($(".evaluation .evaimg ul .imglist")) : "right" === t && $(".evaluation .evaimg ul li").eq(i).prependTo($(".evaluation .evaimg ul .imglist")), $(".carousel .imglist li").eq(e).addClass("active").siblings("li").removeClass("active"), $(".carousel .imglist li").find(".carousel-caption").hide(), $(".carousel .imglist li").eq(e).find(".carousel-caption").show()
}, $(".carousel").carousel({
  interval: 8e3,
  pause: "hover"
}), liwidth = -$(".carousel .imglist li").eq(0).outerWidth(!0), $(".carousel").on("slide.bs.carousel", function () {
  return tabnum()
}), tabnum = function () {
  return data.push(data[0]), data = data.slice(1, data.length + 1), $(".evaluation>.evacont").html(data[num]), $(".carousel .imglist li").find(".carousel-caption").hide(), $(".carousel .imglist").animate({left: liwidth + "px"}, function () {
    return tablist(num, "left", 0)
  })
}, $(".carright").click(function () {
  return tabnum()
}), $(".carleft").click(function () {
  return $(".carousel .imglist li").find(".carousel-caption").hide(), data.unshift(data[data.length - 1]), data = data.slice(0, data.length - 1), $(".evaluation>.evacont").html(data[num]), $(".carousel .imglist").animate({right: liwidth + "px"}, function () {
    var e;
    return e = $(".evaluation .evaimg ul li").length - 1, tablist(num, "right", e)
  })
}), (weixinTip = function (e) {
  e.click(function (e) {
    var t;
    t = !1, ($(this).hasClass("btn-win") || $(this).hasClass("btn-az")) && (t = !0), (envDetector.isIOs() && !t && envDetector.isWeibo() || t && (envDetector.isWeChat() || 0 != ~navigator.appVersion.indexOf("QQ/"))) && (envDetector.isDesktop() && $("#weixinTip").addClass("pc"), window.event ? window.event.returnValue = !1 : e.preventDefault(), $("#weixinTip").css("display", "block"))
  }), $("#weixinTip").click(function () {
    $(this).css("display", "none")
  })
})(linkEle = $(".btn-down"));
