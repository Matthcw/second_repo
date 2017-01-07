//MENU
$("#ThreeBars").click(function(){
$("nav, ul, li").toggleClass("showMenu");
$("#ThreeBars").toggleClass("ThreeBars_selected");

if($("#ThreeBars").hasClass("ThreeBars_selected")){
$("#ThreeBars").addClass("ThreeBars_selected");
}
else
{
$("#ThreeBars").removeClass("ThreeBars_selected");
}

});
$("#theMenu").click(function(){
$("nav, ul, li").toggleClass("showMenu");
$("#ThreeBars").toggleClass("ThreeBars_selected");
});
//PRODUCT PICS
var pic = ["Smile","Kiss","Laugh","Tounge","Hearts","Poo"]
$(".products_img").each(function(number){
	$(this).css("background","url(images/emoji"+(pic[number])+".jpg)");
});
//FAQ QUESTION OPEN AND CLOSE
$(".FAQ_question").click(function(){
$(this).parent(".FAQ_QnA").siblings().children(".FAQ_answer").slideUp();
$(this).siblings("div").slideToggle();
});
/*LINK TO PAGES*/

//HOME
$("#theMenu").children("li").eq(0).click(function(){
$("html, body").animate({scrollTop: 0},1000);
});
//HOW IT WORKS
$("#theMenu").children("li").eq(1).click(function(){
$("html, body").animate({scrollTop: ($("#Howitworks_page").offset().top)-40},1000);
});
//PRODUCTS
$("#theMenu").children("li").eq(2).click(function(){
$("html, body").animate({scrollTop: ($("#products_page").offset().top)-40},1000);
});
//REVIEW
$("#theMenu").children("li").eq(3).click(function(){
$("html, body").animate({scrollTop: ($("#reviews_page").offset().top)-40},1000);
});
//FAQ
$("#theMenu").children("li").eq(4).click(function(){
$("html, body").animate({scrollTop: ($("#FAQ_page").offset().top)-40},1000);
});
//PAY & SEND 
$("#theMenu").children("li").eq(5).click(function(){
$("html, body").animate({scrollTop: ($("#PaySend_page").offset().top)-40},1000);
});
//PRDOUCTS TO PAY AND SEND
$(".products_img").click(function(){
$("html, body").animate({scrollTop: ($("#PaySend_page").offset().top)-40},1000);
});