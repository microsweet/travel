

// JavaScript Document
lastScrollY = 0;
function heartBeat() {
    var diffY;
    if (document.documentElement && document.documentElement.scrollTop)
        diffY = document.documentElement.scrollTop;
    else if (document.body)
        diffY = document.body.scrollTop
    else
    { /*Netscape stuff*/ }

    //alert(diffY);
    percent = .1 * (diffY - lastScrollY);
    if (percent > 0) percent = Math.ceil(percent);
    else percent = Math.floor(percent);
    document.getElementById("lovexin12").style.top = parseInt(document.getElementById("lovexin12").style.top) + percent + "px";
    document.getElementById("lovexin14").style.top = parseInt(document.getElementById("lovexin12").style.top) + percent + "px";

    lastScrollY = lastScrollY + percent;
    //alert(lastScrollY);
}
suspendcode12 = "<DIV id=\"lovexin12\" style='left:20px;POSITION:absolute;TOP:100px;'><a href='#' target='_blank'><img border=0 src=images/nic/news1.png ><br><a href=JavaScript:; onclick=\"lovexin12.style.visibility='hidden'\"><img border=0 src=images/nic/close.gif></a></div>"

suspendcode14 = "<DIV id=\"lovexin14\" style='right:20px;POSITION:absolute;TOP:100px;'><a href='#' target='_blank'><img border=0 src=images/nic/news1.png ><br><a href=JavaScript:; onclick=\"lovexin14.style.display = 'none'\"><img border=0 src=images/nic/close.gif></div>"

document.write(suspendcode12);
document.write(suspendcode14);
window.setInterval("heartBeat()", 1);
