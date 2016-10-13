/* Data and variables
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
var pageCount = 0;
var mainState=0;
var topState=0;
var bottomState=0;


const content = '{ '+

  ' "name" : [' +
  ' "Electric Sheep" ,' +
  ' "Bluntli" ,' +
  ' "Graphic Design" ],' +

  '  "logo" : [' +
  ' "img/electric_logo.svg" ,' +
  ' "img/bluntli_logo.svg" ,' +
  ' "img/design_logo.svg" ],' +

  ' "screens" : [' + 
  ' "img/sheep_screens/electric_screen" ,' + 
  ' "img/bluntli_screens/bluntli_screen" ,' + 
  ' "img/design_screens/design_screen" ],' + 

  ' "squares" : [' + 
  ' "img/sheep_screens/electric_square" ,' + 
  ' "img/bluntli_screens/bluntli_square" ,' + 
  ' "img/design_screens/design_square" ],' + 

  ' "bg" : [' + 
  ' "rgba(36,56,75,.5)" ,' + 
  ' "rgba(59,56,76,.5)",' + 
  ' "rgba(38,40,40,.5)" ],' + 

  ' "link" : [' + 
  ' "http://electricsheep.nfshost.com" ,' + 
  ' "http://bluntli.com/public",' +
  ' "index.html" ],' +

  ' "next" : [' + 
  ' "1" ,' + 
  ' "2" ,' +
  ' "3" ],' +

  ' "back" : [' + 
  ' "2" ,' + 
  ' "0" ,' +
  ' "1" ],' +

  '  "transformations" : [' +
  ' "scale(1.2,1.2) translate(100px,0px)" ,' +
  ' "scale(1.5,1.5) translate(-80px,50px)",' + 
  ' "scale(1,1)" ],' + 

  '  "paragraph" : [' +
  ' "Browser based isometric exploration game built with WebGL." ,' +
  ' "Animated marketing page built with node.js & React. Storytelling with isometric illustrations & CSS animations." ,' +
  ' "A graphic is worth a thousand words." ]}'
; 

var data = JSON.parse(content);


/* Page Swap
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
function switchPage(){
    var nextPage = data.next[pageCount];
    if(nextPage==2){
        document.getElementById("next-button-label").innerHTML = "ABOUT";
        document.getElementById("next-button-label").setAttribute("style" , "letter-spacing: 3px");
        document.getElementById("next-button-icon").setAttribute("src" , "img/ark_logo.svg");
        document.getElementById("next-button-icon").setAttribute("width" , "36px");
    }
    if (nextPage == 3 ){  
        goToAbout();
    }
    else{
        document.getElementById("name-template").innerHTML = data.name[nextPage];
        document.getElementById("logo-template").setAttribute("src", data.logo[nextPage]);
        document.getElementById("link-template1").setAttribute("onClick", "window.location='"+data.link[nextPage]+"'");
        document.getElementById("link-template2").setAttribute("href", data.link[nextPage]);
        document.getElementById("bg-template").style.backgroundColor = data.bg[nextPage];
        document.getElementById("link-template1").setAttribute("href", data.name[nextPage]);
        document.getElementById("paragraph-template").innerHTML = data.paragraph[nextPage];
        document.getElementById("grid-bg3").setAttribute("style", "transform: " + data.transformations[nextPage]+";");
        pageCount = nextPage;
        panelAnimation(nextPage);
    }
}

function backPage(){
        var nextPage = data.back[pageCount];

        if(nextPage==1){
            document.getElementById("next-button-label").innerHTML = "NEXT";
            document.getElementById("next-button-label").setAttribute("style" , "letter-spacing: 4px");
            document.getElementById("next-button-icon").setAttribute("src" , "img/next-button.svg");
            document.getElementById("next-button-icon").setAttribute("width" , "22px");
        }
        document.getElementById("name-template").innerHTML = data.name[nextPage];
        document.getElementById("logo-template").setAttribute("src", data.logo[nextPage]);
        document.getElementById("link-template1").setAttribute("onClick", "window.location='"+data.link[nextPage]+"'");
        document.getElementById("link-template2").setAttribute("href", data.link[nextPage]);
        document.getElementById("bg-template").style.backgroundColor = data.bg[nextPage];
        document.getElementById("link-template1").setAttribute("href", data.name[nextPage]);
        document.getElementById("paragraph-template").innerHTML = data.paragraph[nextPage];
        document.getElementById("grid-bg3").setAttribute("style", "transform: " + data.transformations[nextPage]+";");
        pageCount = nextPage;
        panelAnimation(nextPage);
    
}

function panelAnimation(input){
    var nextPage = input;
    if(mainState==2){
        document.getElementById("screen-template1").setAttribute("src", "" + data.screens[input] + "1.png" ); 
        slideMain(0);
    }
    else{
        document.getElementById("screen-template"+(mainState+2)).setAttribute("src", "" + data.screens[input] + "" +(mainState+2) + ".png" ); 
        slideMain(mainState+1);
    }
    if(topState==2){
        document.getElementById("top-template1").setAttribute("src", "" + data.squares[input] + "1.png" ); 
        slideTop(0);
    }
    else{
        document.getElementById("top-template"+(topState+2)).setAttribute("src", "" + data.squares[input] + "" +(topState+2) + ".png" ); 
        slideTop(topState+1);
    }
    if(bottomState==2){
        document.getElementById("bottom-template1").setAttribute("src", "" + data.squares[input] + "1.png" ); 
        slideBottom(0);
    }
    else{
        document.getElementById("bottom-template"+(bottomState+2)).setAttribute("src", "" + data.squares[input] + "" +(bottomState+2) + ".png" ); 
        slideBottom(bottomState+1);
    }

    setTimeout(function(){
        document.getElementById("screen-template1").setAttribute("src", "" + data.screens[nextPage] + "1.png" ); 
        document.getElementById("screen-template2").setAttribute("src", "" + data.screens[nextPage] + "2.png" ); 
        document.getElementById("screen-template3").setAttribute("src", "" + data.screens[nextPage] + "3.png" ); 

        document.getElementById("top-template1").setAttribute("src", "" + data.squares[nextPage] + "1.png" ); 
        document.getElementById("top-template2").setAttribute("src", "" + data.squares[nextPage] + "2.png" );
        document.getElementById("top-template3").setAttribute("src", "" + data.squares[nextPage] + "3.png" ); 

        document.getElementById("bottom-template1").setAttribute("src", "" + data.squares[nextPage] + "1.png" ); 
        document.getElementById("bottom-template2").setAttribute("src", "" + data.squares[nextPage] + "2.png" );
        document.getElementById("bottom-template3").setAttribute("src", "" + data.squares[nextPage] + "3.png" );
    }, 1000);

}

/* About Page
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
function aboutAnimation(){
    document.getElementById("about-section").setAttribute("style", "height:350% !important" ); 
}


function slideRight(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 100;
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("slide-right-action") ) {
            jQuery(this).addClass("slide-right-action");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).ready(function(){
    slideRight('.slide-right');
    // slideLeft('.slide-left');
});

// if the image in the window of browser when scrolling the page, show that image
jQuery(window).scroll(function() {
    slideRight('.slide-right');
    // slideLeft('.slide-left');
});


function goToAbout(){
    var target = document.getElementById("about");
    aboutAnimation();
    window.smoothScroll(target, 1500);
    // smoothScroll('about');
}

function goToContact(){
         aboutAnimation();
        var target = document.getElementById("contact");
        setTimeout(function(){
            window.smoothScroll(target, 2500);
            // smoothScroll('about');
        }, 300);
}

/* Panel Swap
// –––––––––––––––––––––––––––––––––––––––––––––––––– */

function switchOut(input){
    var oldMain = mainState;
    if (input == "top"){
        var oldTop = topState;
        slideMain(oldTop);
        slideTop(oldMain);
    }
    else if (input == "bottom"){
        var oldBottom = bottomState;
        slideMain(oldBottom);
        slideBottom(oldMain);
    }
}



function slideTop(input){
    var nextState = input;
    var size =  document.getElementById("top-template1").clientHeight;
    var magnitude = null;
    if (topState==0){
        if (nextState==1){
            magnitude= size; topState = 1;
        }
        if (nextState==2){
            magnitude=2*size; topState = 2;
        }
    }
    else if (topState==1){
        if (nextState==0){
            magnitude= 0; topState = 0;
        }
        if (nextState==2){
            magnitude= 2*size; topState = 2;
        }
    }
    else if (topState==2){
        if (nextState==0){
            magnitude= 0;topState = 0;
        }
        if (nextState==1){
            magnitude= size;topState = 1;
        }
    }
    if(magnitude!=null){
        document.getElementById("slide-top").setAttribute("style", " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
                    "-ms-transform: translate(0px, 0);transform: translate(0px, -" + magnitude + "px);");
    }
}

function slideBottom(input){
    var nextState = input;
    var size =  document.getElementById("top-template1").clientHeight;
    var magnitude = null;
    if (bottomState==0){
        if (nextState==1){
            magnitude= size; bottomState = 1;
        }
        if (nextState==2){
            magnitude=2*size; bottomState = 2;
        }
    }
    else if (bottomState==1){
        if (nextState==0){
            magnitude= 0; bottomState = 0;
        }
        if (nextState==2){
            magnitude= 2*size; bottomState = 2;
        }
    }
    else if (bottomState==2){
        if (nextState==0){
            magnitude= 0;bottomState = 0;
        }
        if (nextState==1){
            magnitude= size;bottomState = 1;
        }
    }
    if(magnitude!=null){
        document.getElementById("slide-bottom").setAttribute("style", " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
                    "-ms-transform: translate(0px, 0);transform: translate(0px, -" + magnitude + "px);");
    }
}

function slideMain(input){
    var nextState = input;
    var size =  document.getElementById("main-size").clientHeight;
    var magnitude = null;
    if (mainState==0){
        if (nextState==1){
            magnitude= size; mainState = 1;
        }
        if (nextState==2){
            magnitude=2*size; mainState = 2;
        }
    }
    else if (mainState==1){
        if (nextState==0){
            magnitude= 0; mainState = 0;
        }
        if (nextState==2){
            magnitude= 2*size; mainState = 2;
        }
    }
    else if (mainState==2){
        if (nextState==0){
            magnitude= 0; mainState = 0;
        }
        if (nextState==1){
            magnitude= size; mainState = 1;
        }
    }
    if(magnitude!=null){
        document.getElementById("slide-main").setAttribute("style", " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
                    "-ms-transform: translate(0px, 0);transform: translate(0px, -" + magnitude + "px);");
    }
}


function showImages(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            jQuery(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).ready(function(){
    slideMain(0);
    slideTop(1);
    slideBottom(2);
    setTimeout(function(){
        document.getElementById("grid-bg3").setAttribute("style","-webit-transform: scale(1,1); -o-transform: scale(1,1);"+
        "-ms-transform: scale(1,1);"+
        " transform: scale(1,1) translate(0px,0px);");
    }, 10);

    setTimeout(function(){
        document.getElementById("link-template1").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);");
    }, 100);

    setTimeout(function(){
        document.getElementById("text-block").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0); border-left: 1px solid #676868;"+
            "display: flex; align-items: center;justify-content: left;");
    }, 400);

    setTimeout(function(){
        document.getElementById("nav-bar").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);");
    }, 400);

    setTimeout(function(){
        document.getElementById("corner-container").setAttribute("style", "opacity:1;"+
            " -webkit-transform: translate(0px, 0);-o-transform: translate(0px, 0);"+
            "-ms-transform: translate(0px, 0);transform: translate(0px, 0);"+
            "display: flex; align-items: center;justify-content: left;");
    }, 500);
});

// if the image in the window of browser when scrolling the page, show that image
jQuery(window).scroll(function() {
    showImages('.fade');
});



