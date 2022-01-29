//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;

//计算加载状态距离顶部和左部的距离（加载状态的宽度为 215 px，高度为 61 px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;

//在页面未加载完毕之前显示的内容
// var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f8f9fa;z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #fff url(/Content/loading.gif) no-repeat scroll 5px 10px; border: 2px solid #95B8E7; color: #696969;">页面加载中，请等待...</div></div>';
var _LoadingHtml = '<div id="loadingDiv" style="display:flex;position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;z-index:10000;"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>';

//呈现加载效果
document.write(_LoadingHtml);

//不允许页面滚动
disableScroll();

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载完成时移除加载效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
        enableScroll();
    }
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}