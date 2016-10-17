

jQuery(document).ready(function(){

    setTimeout(function(){
        document.getElementById("text-block").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0); border-left: 1px solid #676868;"+
            "display: flex; align-items: center;justify-content: left;");
    }, 2600);

    setTimeout(function(){
        document.getElementById("nav-bar").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);");
        document.getElementById("projects-panel").setAttribute("style","-webit-transform: scale(1,1); -o-transform: scale(1,1);"+
            "-ms-transform: scale(1,1);"+
            " transform: scale(1,1);");
        document.getElementById("projects-panel-mobile").setAttribute("style","-webit-transform: scale(1,1); -o-transform: scale(1,1);"+
            "-ms-transform: scale(1,1);"+
            " transform: scale(1,1);");
    }, 2600);

    setTimeout(function(){
        document.getElementById("grid-bg2").setAttribute("style","-webit-transform: scale(1,1); -o-transform: scale(1,1);"+
        "-ms-transform: scale(1,1);"+
        " transform: scale(1,1);");
        document.getElementById("corner-container").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);"+
            "display: flex; align-items: center;justify-content: left;");
        document.getElementById("corner-container-mobile").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);"+
            "display: flex; align-items: center;justify-content: left;");
        document.getElementById("menu-container").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);"+
            "display: flex; align-items: center;justify-content: left;");
        document.getElementById("animation-container").setAttribute("style", " border-color: #676868;");
        document.getElementById("animation-container-mobile").setAttribute("style", " border-color: #676868;");
        document.getElementById("folding-animation").setAttribute("style", "opacity:0");
        document.getElementById("folding-animation-mobile").setAttribute("style", "opacity:0");
        document.getElementById("grid-bg1").setAttribute("style" , "opacity:0");
        document.getElementById("projects-panel-content").setAttribute("style","opacity:1");
        document.getElementById("projects-panel-content-mobile").setAttribute("style","opacity:1");
    }, 3100);
});

// if the image in the window of browser when scrolling the page, show that image
jQuery(window).scroll(function() {
    showImages('.fade');
});
