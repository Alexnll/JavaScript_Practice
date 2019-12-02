var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
var container = document.querySelector(".container");
var dots = document.getElementsByTagName("span");

var index = 0;
var timer = null;

function nex_pic(){
    var newLeft = parseInt(wrap.style.left) - 600;
    if(wrap.style.left === "-3000px"){
        newLeft = -600;
    }
    wrap.style.left = newLeft + "px";

    index++;
    if(index > 4){
        index = 0;
    }
    showCurrentDot();
}

function pre_pic(){
    var newLeft = parseInt(wrap.style.left) + 600;
    if(wrap.style.left === "-600px"){
        newLeft = -3000;
        }
    wrap.style.left = newLeft + "px";

    index--;
    if(index < 0){
        index = 4;
    }
    showCurrentDot();
}

next.onclick = function(){
    nex_pic();
}

prev.onclick = function(){
    pre_pic();
}

function autoPlay(){
    timer = setInterval(function(){
        nex_pic()
    }, 2000)
}

container.onmouseenter = function(){
    clearInterval(timer);
}

container.onmouseleave = function(){
    autoPlay();
}

function showCurrentDot(){
    for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
    }
    dots[index].className = "on";
}

for (var i = 0, len = dots.length; i< len; i++){
    (function(i){
        dots[i].onclick = function(){
            var distance = index - i;
            
            wrap.style.left = (parseInt(wrap.style.left) + distance * 600) + "px";
            index = i;
            showCurrentDot();
            }
        })(i);
}

autoPlay();