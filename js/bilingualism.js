//使用 LocalStorage 存储多语言设置
var ls = window.localStorage;

//定义一个感应并切换语言的定时器
var langInterval;

//获取浏览器语言以自动设置显示语言
var lang = navigator.language;
lang = lang.substring(0, 2);
if(!ls.lang){
    if(lang == "zh"){
        ls.lang = "zh";
    }else{
        ls.lang = "en";
    }
}

//存储当前网址路径名
var pathName = window.location.pathname;

//用于在不同语言文章间切换的正则
var isZhPost = /\b-zh\/$/;
var isEnPost = /\b-en\/$/;

//用于在不同语言网页标题间切换的正则
var isZhBlogName = /文字面试教材/;
var isEnBlogName = /WCD Interview/;

//页面 HTML 整体加载完毕后再执行下列代码
window.onload = function(){
    //语言切换按钮
    var i18nCn = document.getElementById("i18nCn");
    var i18nEn = document.getElementById("i18nEn");

    //遍历双语键值
    var keys = document.getElementsByClassName("keys");
    var navWelcome = document.querySelectorAll(".navlist a")[0];
    var navPrepare = document.querySelectorAll(".navlist a")[1];
    var navStart = document.querySelectorAll(".navlist a")[2];
    var navAfter = document.querySelectorAll(".navlist a")[3];
    var navSources = document.querySelectorAll(".navlist a")[4];
    var navFormats = document.querySelectorAll(".navlist a")[5];
    var navMp3 = document.querySelectorAll(".navlist a")[6];
    var navTranscodes = document.querySelectorAll(".navlist a")[7];
    var navTorrenting = document.querySelectorAll(".navlist a")[8];
    var navSpectral = document.querySelectorAll(".navlist a")[9];
    var navRipping = document.querySelectorAll(".navlist a")[10];
    var navRules = document.querySelectorAll(".navlist a")[11];
    var navLog = document.querySelectorAll(".navlist a")[12];
    var navCue = document.querySelectorAll(".navlist a")[13];
    var navClient = document.querySelectorAll(".navlist a")[14];

    //声明计数器，适用于 keys 数组
    var i;

    //按钮状态变化函数
    function btnChange(){
        if(ls.lang == "zh"){
            i18nEn.style.color = "";
            i18nEn.style.cursor = "";
            i18nCn.style.color = "unset";
            i18nCn.style.cursor = "default";
        }else if(ls.lang == "en"){
            i18nCn.style.color = "";
            i18nCn.style.cursor = "";
            i18nEn.style.color = "unset";
            i18nEn.style.cursor = "default";
        }
    }

    //网址自动切换函数
    function pathNameSwitcher(){
        if(ls.lang == "zh" && isEnPost.test(pathName)){
            window.location.pathname = pathName.replace(isEnPost, "-zh/");
        }else if(ls.lang == "en" && isZhPost.test(pathName)){
            window.location.pathname = pathName.replace(isZhPost, "-en/");
        };

        if(ls.lang == "zh" && pathName == "/WCDInterview/index-en/"){
            window.location.pathname = pathName.replace("/WCDInterview/index-en/", "/WCDInterview/index");
        }else if(ls.lang == "en" && pathName == "/WCDInterview/"){
            window.location.pathname = pathName.replace("/WCDInterview/", "/WCDInterview/index-en/");
        }else if(ls.lang == "en" && pathName == "/WCDInterview/index"){
            window.location.pathname = pathName.replace("/WCDInterview/index", "/WCDInterview/index-en/");
        }
    }

    //网页标题双语切换函数
    function htmlTitleSwitcher(){
        if(ls.lang == "zh"){
            if(isEnBlogName.test(document.title)){
                document.title = document.title.replace(isEnBlogName, "文字面试教材");
            };
        }else if(ls.lang == "en"){
            if(isZhBlogName.test(document.title)){
                document.title = document.title.replace(isZhBlogName, "WCD Interview");
            };
        };
    }

    //单键替代函数
    function replace(before, after){
        if(keys[i].innerHTML == before){
            keys[i].innerHTML = after;
        };
    };

    //中文切换按钮的单击响应函数
    i18nCn.onclick = function(){
        ls.setItem("lang", "zh");
        btnChange();
        switchToChinese();
    };

    //英文切换按钮的单击响应函数
    i18nEn.onclick = function(){
        ls.setItem("lang", "en");
        btnChange();
        switchToEnglish();
    };

    //用于遍历并替换成中文的函数
    function switchToChinese(){
        btnChange();

        navWelcome.href = "/WCDInterview/index";
        navPrepare.href = "/WCDInterview/prepare-zh/";
        navStart.href = "/WCDInterview/start-zh/";
        navAfter.href = "/WCDInterview/after-zh/";
        navSources.href = "/WCDInterview/sources-zh/";
        navFormats.href = "/WCDInterview/formats-zh/";
        navMp3.href = "/WCDInterview/mp3-zh/";
        navTranscodes.href = "/WCDInterview/transcodes-zh/";
        navTorrenting.href = "/WCDInterview/torrenting-zh/";
        navSpectral.href = "/WCDInterview/spectral-zh/";
        navRipping.href = "/WCDInterview/ripping-zh/";
        navRules.href = "/WCDInterview/rules-zh/";
        navLog.href = "/WCDInterview/log-zh/";
        navCue.href = "/WCDInterview/cue-zh/";
        navClient.href = "/WCDInterview/client-zh/";

        //若位于英文页面，直接跳对应中文页
        pathNameSwitcher();

        //切换网页标题语言
        htmlTitleSwitcher();

        //遍历替换
        for(i=0; i<keys.length; i++){
            replace("WCD Interview", "文字面试教材");
            replace("The Interviewing Process", "面试流程");
            replace("Welcome!", "欢迎参加");
            replace("Prepare for the Interview", "准备面试");
            replace("Starting the Interview", "开始面试");
            replace("After the Interview", "面试之后");
            replace("Knowledge", "所需知识");
            replace("Analog and Digital Music Sources", "模拟源与数字源");
            replace("Audio Formats", "音频格式");
            replace("Transcodes", "转码");
            replace("Torrenting", "种子相关");
            replace("Spectral Analysis", "频谱分析");
            replace("CD Burning and CD Ripping", "CD 抓轨与刻录");
            replace("What.CD Rules", "What.CD 规则");
            replace("Extras", "其他资料");
            replace("Sample Log File", "示例 Log 文件");
            replace("Sample Cue File", "示例 Cue 文件");
            replace("BitTorrent Client Whitelist", "BitTorrent 客户端白名单");
            replace("Follow Us on Twitter!", "在推特上关注我们！");
            replace("Follow <a href=\"https://twitter.com/whatcd\"><strong>@whatcd</strong></a> on Twitter", "在推特上关注 <a href=\"https://twitter.com/whatcd\">@whatcd</a>");
        };
    };

    //用于遍历并替换成英文的函数
    function switchToEnglish(){
        btnChange();

        navWelcome.href = "/WCDInterview/index-en/";
        navPrepare.href = "/WCDInterview/prepare-en/";
        navStart.href = "/WCDInterview/start-en/";
        navAfter.href = "/WCDInterview/after-en/";
        navSources.href = "/WCDInterview/sources-en/";
        navFormats.href = "/WCDInterview/formats-en/";
        navMp3.href = "/WCDInterview/mp3-en/";
        navTranscodes.href = "/WCDInterview/transcodes-en/";
        navTorrenting.href = "/WCDInterview/torrenting-en/";
        navSpectral.href = "/WCDInterview/spectral-en/";
        navRipping.href = "/WCDInterview/ripping-en/";
        navRules.href = "/WCDInterview/rules-en/";
        navLog.href = "/WCDInterview/log-en/";
        navCue.href = "/WCDInterview/cue-en/";
        navClient.href = "/WCDInterview/client-en/";

        //若位于中文页面，直接跳对应英文页
        pathNameSwitcher();

        //切换网页标题语言
        htmlTitleSwitcher();

        //遍历替换
        for(i=0; i<keys.length; i++){
            replace("文字面试教材", "WCD Interview");
            replace("面试流程", "The Interviewing Process");
            replace("欢迎参加", "Welcome!");
            replace("准备面试", "Prepare for the Interview");
            replace("开始面试", "Starting the Interview");
            replace("面试之后", "After the Interview");
            replace("所需知识", "Knowledge");
            replace("模拟源与数字源", "Analog and Digital Music Sources");
            replace("音频格式", "Audio Formats");
            replace("转码", "Transcodes");
            replace("种子相关", "Torrenting");
            replace("频谱分析", "Spectral Analysis");
            replace("CD 抓轨与刻录", "CD Burning and CD Ripping");
            replace("What.CD 规则", "What.CD Rules");
            replace("其他资料", "Extras");
            replace("示例 Log 文件", "Sample Log File");
            replace("示例 Cue 文件", "Sample Cue File");
            replace("BitTorrent 客户端白名单", "BitTorrent Client Whitelist");
            replace("在推特上关注我们！", "Follow Us on Twitter!");
            replace("在推特上关注 <a href=\"https://twitter.com/whatcd\">@whatcd</a>", "Follow <a href=\"https://twitter.com/whatcd\"><strong>@whatcd</strong></a> on Twitter");
        }
    };

    //根据 LocalStorage 存储的值判定当前应该显示的语言
    if(ls.lang == "zh"){
        switchToChinese();
    }else if(ls.lang == "en"){
        switchToEnglish();
    }
}