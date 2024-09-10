var account_msg, changeLng, codeurl, curlng, currentLang, delCookie, device_type, getCookie, getEnglish, getHelpUrl,
    getQueryString, getVariant, getdeviceUrl, getiosIdUrl, getlanguage, homeText, homeshow, i, imgurl, is_exit,
    localize, login_msg, nowlng, poover, popspan, poptitle, remainTime, ru, setCookie, setVariant, showtip,
    tempcurrentLang, temphost, toggleLanguage, togglepoover, url_arr, zh, zh_tw;
for (i in $(window).outerWidth() < 768 && $.each($(".main .exchange"), function () {
    return $(this).attr({src: $(this).attr("datasrc")})
}), getQueryString = function (e) {
    var t, n;
    return n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), null !== (t = window.location.search.substr(1).match(n)) ? unescape(t[2]) : null
}, getCookie = function (e) {
    var t, n;
    return void 0, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), (t = document.cookie.match(n)) ? unescape(t[2]) : null
}, setCookie = function (e, t) {
    var n;
    return 3e5, (n = new Date).setDate(n.getDate() + 3e5), document.cookie = e + "=" + escape(t) + (null == !1 && {"": ";expires=" + n.toGMTString()})
}, delCookie = function (e) {
    var t, n;
    if ((n = new Date).setTime(n.getTime() - 1), null !== (t = getCookie(e))) return document.cookie = e + "=" + t + ";expires=" + n.toGMTString()
}, device_type = "", device_type = envDetector.isAndroid() ? "android" : envDetector.isIOs() ? "ios" : envDetector.isMac() ? "mac" : envDetector.isWindows() ? "windows" : "others", envDetector.isIE() ? ($.each($(".exchange"), function () {
    return $(this).attr({src: $(this).attr("datasrc")})
}), $(".ieShow").show(), $(".iehide").hide(), $(".appShow .svgimage").addClass("imgsvg")) : ($(".ieShow").hide(), $(".iehide").show()), localize = function (e) {
    console.log("device_type:"+device_type);
    return $.i18n.init({
        load: "current",
        getAsync: !0,
        preload: ["zh"],
        resGetPath: "locales/__lng__/__ns__.json?202001082048",
        ns: {namespaces: ["translation"], defaultNs: "translation"},
        useLocalStorage: !1
    })
}, curlng = "zh", popspan = poptitle = "", url_arr = [], codeurl = $.md5(location.hostname), imgurl = "", is_exit = !1, url_arr) if (codeurl === url_arr[i]) {
    is_exit = !0;
    break
}
is_exit || (codeurl = "57f57d9b3291b8d513c122cf5c539b85"), imgurl = "/assets/index/kuanlian/images/" + codeurl + ".png", (togglepoover = function () {
    return $('[data-toggle="popoveraz"]').attr("data-content", "<img src=" + imgurl + "><p>" + poptitle + "</p><i>" + popspan + "</i>")
})(), poover = {
    title: {
        zh: "���ֻ�ɨ���ά��<br/>��������APP",
    },
    detail: {
        zh: "�Ƽ�ʹ�������ɨ��",
    }
}, login_msg = {
    user: {zh: "�û���"},
    psw: {zh: "����"}
}, homeText = {
    tuned: {
        zh: "����ʦ����Ŭ�������У������ڴ���."
    }
}, temphost = "", getHelpUrl = {}, getiosIdUrl = {}, getdeviceUrl = {}, account_msg = {
    remain: {zh: "ʣ�� "},
    day: {zh: "��"},
    hour: {zh: "Сʱ"},
    minute: {zh: "����"},
    standard: {zh: "��ͭ��Ա"},
    platinum: {zh: "�����Ա"},
    expired: {zh: "�˻��ѹ���"},
    deviceid: {zh: "���� iOS �豸�� ID"},
    kicked: {zh: "������Ҫ�߳��豸��ID"}
}, remainTime = function (e) {
    return e = -e, 0 < Math.floor(e / 3600 / 24) ? [Math.floor(e / 3600 / 24), account_msg.day[curlng]] : 0 < Math.floor(e / 3600) ? [Math.floor(e / 3600), account_msg.hour[curlng]] : 0 < Math.floor(e / 60) ? [Math.floor(e / 60), account_msg.minute[curlng]] : [0, account_msg.minute[curlng]]
}, getVariant = function () {
    var e, t;
    return (e = getCookie("_gaexp")) ? (t = e.split("."))[t.length - 1] : null
}, setVariant = function () {
    var e;
    return (e = getVariant()) && "1" === e ? $(".iosorigin").hide() : $(".iosvariant").hide()
}, showtip = function (e) {
    return $("#tip .tiptext").text(e), $("#tip").show(), setTimeout(function () {
        return $("#tip").hide()
    }, 1e3)
}, $(".stopclose").on("click", function (e) {
    return e.stopPropagation()
}), homeshow = function () {
    return $(".tabhome").show()
}, $(window).resize(function () {
    if (768 <= $(this).outerWidth()) return $(".fixtop .fiximg").attr({src: "./assets/index/kuanlian/images/logo.png"}), $(".fixtop").removeClass("fixtopstyle"), $(".nav.dropdown.open").removeClass("open"), $("#wrapper").removeClass("dropmenu"), $(".headerbg").show(), $(".hiddendrop").show(), homeshow()
}), $(".visible-az").hide(), $(".visible-win").hide(),  $(".visible-win").css("display", "block") ,$(".visible-az").css("display", "block"), $("#wrapper .main,.footer,.tabhome").show(), $(".btn-mac").click(function () {
    return showtip(homeText.tuned[curlng])
}), $("body").click(function () {
    return $('[data-toggle="popoveraz"]').popover("hide")
});
