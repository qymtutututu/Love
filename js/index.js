
function transY() {
    document.getElementById('Triangle').classList.add('TriangleY');
    setTimeout(function() {
        document.getElementById('bg1').classList.add('bgY')
        document.getElementById('bg2').classList.add('bgY')
    },2000)
}

var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta > 0 || e.wheelDelta < 0) { //当滑轮向上滚动时
            transY();
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0 || e.detail< 0) { //当滑轮向上滚动时
            transY();
        }
    }
    ScrollText(direct);
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = document.onmousewheel = scrollFunc;  

$(function(){
    $('.Triangle').offset();
})

function phone(){
    if(window.screen.width<720){/* 当进入手机端时,取消滑轮,进入touch界面 */
        console.log('您当前处于手机端');
        console.log(window.screen.width);

        document.ontouchstart = function(){
            transY();
        }
    }
    else{
        console.log('您当前属于PC端');
        console.log(window.screen.width);
    }
}
phone();