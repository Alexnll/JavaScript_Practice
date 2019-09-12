window.onload = function(){
    var nav = document.getElementsByClassName('nav')[0];
    var ScrollBox = document.getElementsByClassName('Scroll-box')[0];
    var ScrollToTop = document.getElementsByClassName('Scroll-to-top')[0];
    
ScrollToTop.style.background = "transparent";

    window.onscroll = function(){
        if(window.pageYOffset > 100){
            nav.style.background = "#3498db";
            nav.style.boxShadow = "8px 4px 2px #2980b9";
            ScrollBox.style.background = "#3498db";
            ScrollBox.style.boxShadow ="8px 4px 2px #2980b9";
            ScrollToTop.textContent = "Scroll to Top";    
        }
        else {
            nav.style.background = "transparent";
            nav.style.boxShadow = "none";
            ScrollBox.style.background = "transparent";
            ScrollBox.style.boxShadow = "none";
            ScrollToTop.textContent = null;
        }
    } 
}
