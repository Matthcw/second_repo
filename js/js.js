/*init();
function init(){

$(window).load(function(){
$("body").css("display","block");
});
*/
//page content boxes
$("#main-content").animate({opacity:"1"},'fast');
$("#select-page").css("color",colour_bright);
$("#select-page").css("border-top","3px solid " + colour_bright);
$("#select-page").css("background-color","rgba(0,0,0,0.5)");
//page url colours
$(".ext_url").css("color",colour_bright);
var boxes = document.getElementsByClassName("contentbox");

//page colour
$("#sub_title").css("color",colour_bright);

//colour of content box background an
for(var i=0; i<boxes.length; i++){
var currentbox = boxes[i];
$(currentbox).css("border","3px solid " + colour_dull);
//$(currentbox).css("box-shadow","3px 3px 30px " + colour_bright);
}

//check for page resize
window.onresize = checkPageSize;
checkPageSize();
function checkPageSize(){
if($(window).width() > 668){
//colour of content boxes and boxshadow border on mouse hover and on mouse leave
$(".contentbox").bind("mouseover touchstart",function(){
$(this).css("border","3px solid " + colour_bright);
$(this).css("box-shadow","3px 3px 30px " + colour_bright);
$(this).css("background-color","rgba(0,0,0,0.3)");
});
$(".contentbox").bind("mouseout touchmove touchend",function(){
$(this).css("border","3px solid " + colour_dull);
$(this).css("box-shadow","3px 3px 30px black");
$(this).css("background-color","rgba(128,128,128,0.3)");
$(this).children(".ext_url").css("color",colour_bright);
});
}
}
//Make highlights of elements translucent when activate - for menu and box containers
$("li").bind("mousedown touchstart",function(){
$(this).addClass("menuactivated");
});
$("li").bind("mouseout mouseup touchend",function(){
$(this).removeClass("menuactivated");
});
$(".page_Home_PageLink").bind("mousedown touchstart",function(){
$(this).addClass("boxactivated");
});
$(".page_Home_PageLink").bind("mouseout mouseup touchend",function(){
$(this).removeClass("boxactivated");
});
//Reset For Mobile
$(window).scroll(function(){
$("li").removeClass("menuactivated");
$(".page_Home_PageLink").removeClass("boxactivated");
});

//content box effects (when the content box is in the middle of the page)
$(window).scroll(function(){
if($(window).width() <=668){
var minHeight = $(window).scrollTop()+0
var maxHeight = $(window).scrollTop()+260

for(var i=0; i<boxes.length; i++){
var currentbox = boxes[i];
if (( minHeight < boxes[i].offsetTop) && ( maxHeight > boxes[i].offsetTop)){
$(currentbox).css("border","3px solid " + colour_bright);
$(currentbox).css("box-shadow","3px 3px 30px " + colour_bright);
$(currentbox).css("background-color","rgba(0,0,0,0.3)");

if($(currentbox).hasClass("page_Portfolio")){
$(currentbox).css("border","3px solid #FF0000");
$(currentbox).css("box-shadow","3px 3px 30px #FF0000");
$(currentbox).children(".ext_url").css("color","#FF0000");
}

if($(currentbox).hasClass("page_Blog")){
$(currentbox).css("border","3px solid #FFFF00");
$(currentbox).css("box-shadow","3px 3px 30px #FFFF00");
$(currentbox).children(".ext_url").css("color","#FFFF00");
}

if($(currentbox).hasClass("page_About")){
$(currentbox).css("border","3px solid #0066FF");
$(currentbox).css("box-shadow","3px 3px 30px #0066FF");
$(currentbox).children(".ext_url").css("color","#0066FF");
}

if($(currentbox).hasClass("page_Contact")){
$(currentbox).css("border","3px solid #FF00FF");
$(currentbox).css("box-shadow","3px 3px 30px #B200B2");
$(currentbox).children(".ext_url").css("color","#FF00FF");
}

}
else
{
$(currentbox).css("border","3px solid " + colour_dull);
$(currentbox).css("box-shadow","3px 3px 30px black");
$(currentbox).css("background-color","rgba(128,128,128,0.3)");
$(currentbox).children(".ext_url").css("color",colour_bright);
}
}
}
});

//Change the page

$("li").eq(0).click(function(){
$("#main-content").css("opacity","0");
setTimeout(goFolio,500);
});
$(".page_Portfolio").click(function(){
$("#main-content").css("opacity","0");
setTimeout(goFolio,500);
});
function goFolio(){
document.location =  "portfolio.html"
}
$("li").eq(1).click(function(){
$("#main-content").css("opacity","0");
setTimeout(goBlog,500);
});
$(".page_Blog").click(function(){
$("#main-content").css("opacity","0");
setTimeout(goBlog,500);
});
function goBlog(){
document.location =  "myblog.html"
}
$("li").eq(2).click(function(){
$("#main-content").css("opacity","0");
setTimeout(goIndex,500);
});
function goIndex(){
document.location =  "index.html"
}
$("li").eq(3).click(function(){
$("#main-content").css("opacity","0");
setTimeout(goAbout,500);
});
$(".page_About").click(function(){
$("#main-content").css("opacity","0");
setTimeout(goAbout,500);
});
function goAbout(){
document.location =  "about.html"
}
$("li").eq(4).click(function(){
$("#main-content").css("opacity","0");
setTimeout(goContact,500);
});
$(".page_Contact").click(function(){
$("#main-content").css("opacity","0");
setTimeout(goContact,500);
});
function goContact(){
document.location =  "contact.html"
}

/*}*/
