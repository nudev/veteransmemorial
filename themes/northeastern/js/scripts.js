var debug=!1,mobileMenu=700,inMotion=!1,clickTot=0,colsVisible=15.5,direction="",findNumPos="",hashValue=location.hash,Theme={};function updatePlaceholder(e){e.classList.toggle("unselected",!e[e.selectedIndex].value)}[].forEach.call(document.querySelectorAll("select"),function(e){updatePlaceholder(e),e.addEventListener("change",function(){updatePlaceholder(this)})}),function(e,r,t){"use strict";r(function(){function i(e,t){inMotion=!0,r("#slider").animate({left:e+t+"vw"},500,function(){inMotion=!1,4==clickTot?r(".js__wall-scroll.right").css({"pointer-events":"none"}):r(".js__wall-scroll.right").css({"pointer-events":"all"}),parseInt(r("#slider").css("left"))<0?r(".js__wall-scroll.left").css({"pointer-events":"all"}):(r(".js__wall-scroll.left").css({"pointer-events":"none"}),clickTot=0)})}function a(){r("#slider").css({left:"0px"}),direction="-=";var e=100/r(window).width(),t=r("ul.tags > li").outerWidth()*e,l=0;findNumPos<=14?clickTot=0:15<=findNumPos&&findNumPos<27?l=t*(colsVisible*(clickTot=1)):28<=findNumPos&&findNumPos<40?l=t*(colsVisible*(clickTot=2)):41<=findNumPos&&findNumPos<53?l=t*(colsVisible*(clickTot=3)):53<=findNumPos&&findNumPos<=57&&(clickTot=4,l=t*(3*colsVisible)+4.6*t),i(direction,l)}if(r("#wallblock").on("click",".js__wall-scroll",function(){if(!inMotion){r(this).blur(),"-="==(direction=r(this).hasClass("right")?"-=":"+=")&&clickTot++,colsVisible=clickTot<=3?15.5:4.6,"+="==direction&&clickTot--;var e=100/r(window).width(),t,l=r("ul.tags > li").outerWidth()*e*colsVisible,s=parseInt(r("#slider").css("left"));i(direction,l)}}),r("#thewall").is(":hidden"))if(0==hashValue.length);else{var e=hashValue=hashValue.replace(/^#/,"").toLowerCase(),t=r("a.js__vet[data-id="+e+"]").offset().top-144;n(hashValue),r(window).scrollTop(parseInt(t))}else if(0==hashValue.length);else{hashValue=hashValue.replace(/^#/,"");var t=r("#thewall").offset().top-144;o(hashValue),r(window).scrollTop(parseInt(t))}function n(e){var t=e.split("-");findNumPos=t[1],r("[data-id='"+e.toLowerCase()+"']").addClass("selected");var l=r("[id='"+e.toLowerCase()+"']").find("a").attr("data-fname"),s=r("[id='"+e.toLowerCase()+"']").find("a").attr("data-lname"),i=r("[id='"+e.toLowerCase()+"']").find("a").attr("data-mname");name=(""!=s?s:"")+(""!=l?", "+l:"")+(""!=i?" "+i:""),r("form.search-container > div > input#search-bar").val(name+" ("+t[0]+t[1]+")")}function o(e){var t=e.split("-");findNumPos=t[1],r("[id='"+e.toLowerCase()+"']").addClass("selected"),a();var l=r("[id='"+e.toLowerCase()+"']").find("a").attr("data-fname"),s=r("[id='"+e.toLowerCase()+"']").find("a").attr("data-lname"),i=r("[id='"+e.toLowerCase()+"']").find("a").attr("data-mname");name=(""!=s?s:"")+(""!=l?", "+l:"")+(""!=i?" "+i:""),r("form.search-container > div > input#search-bar").val(name+" ("+t[0]+t[1]+")")}function l(){r(this).blur(),r(".active").removeClass("selected"),r(".flex-table > a.selected").removeClass("selected")}function s(){r("#search-bar").val(""),r("#search-bar").focus(),r("#datafetch > ul").remove()}if(r("div#datafetch").on("click","ul > li a.js__noreload",function(e){if(e.preventDefault(),r("#thewall").is(":hidden")){var t=r("div#datafetch ul li a").html();r("form.search-container > div > input#search-bar").val(t),r("div#datafetch > ul").css({display:"none"});var l=(i=r(this).attr("href").split("#"))[1].toLowerCase();n(i[1]);var s=r("a.js__vet[data-id="+l+"]").offset().top-144;r("html,body").animate({scrollTop:r("a.js__vet[data-id="+l+"]").offset().top-184})}else{var i=r(this).attr("href").split("#"),t=r("div#datafetch ul li a").html();r("form.search-container > div > input#search-bar").val(t),r("div#datafetch > ul").css({display:"none"}),o(i[1]),r("html,body").animate({scrollTop:r("#thewall").offset().top-184})}}),r("#wallblock").on("click","ul.tags > li.active",function(){l(),r("#search-bar").val("")}),r("#wallblock").on("click",".js__wall-scroll",function(){l()}),r("#search-bar").click(function(){l(),r("#slider").css({left:0})}),r("form.search-container > div > input#search-bar").keypress(function(e){10!==e.keyCode&&13!==e.keyCode||e.preventDefault()}),r("button.reset").click(function(){s(),l(),r("#slider").css({left:0})}),0<r(".js__video").length&&r(".js__video").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>'},closeMarkup:'<button title="%title%" aria-label="Close (Esc)" type="button" class="mfp-close">CLOSE</button>',closeOnContentClick:!1,closeOnBgClick:!0,enableEscapeKey:!1,removalDelay:300,mainClass:"mfp-fade"}),r(".js__vet").magnificPopup({type:"ajax",closeMarkup:'<button title="%title%" aria-label="Close (Esc)" type="button" class="mfp-close">CLOSE</button>',closeOnContentClick:!1,fixedContentPos:"auto",closeOnBgClick:!0,enableEscapeKey:!1,removalDelay:300}),r(".flex-table > a").click(function(){r(".flex-table > a.selected").removeClass("selected"),r("#search-bar").val("")}),r(".js-hideshowmobilenav").click(function(){r("html, body").toggleClass("noscroll"),r(".nav-wrapper").toggleClass("expanded"),r("nav.mainnav ul").toggleClass("show"),r(this).toggleClass("active")}),r("body").hasClass("home")&&(r(".neu__slick").slick({centerMode:!0,slidesToShow:1,focusOnSelect:!0,focusOnChange:!0,variableWidth:!0,arrows:!0,appendArrows:r(".neu__slick"),prevArrow:'<button type="button" class="slick-arrow slick-prev" title="View previous slide" aria-label="View previous slide">Previous</button>',nextArrow:'<button type="button" class="slick-arrow slick-next" title="View next slide" aria-label="View next slide">Next</button>'}),r(".neu__slick").on("init reInit",function(e,t){var l=t.currentSlide,s=r(t.$slides[l]).attr("data-src");s&&r(t.$slides[l]).attr("href",s)}),r(".neu__slick").on("beforeChange",function(e,t,l,s){r(".slick-slide").removeClass("neu__slick_item--zoomed")}),r(".neu__slick").on("afterChange",function(e,t,l){r(".slick-next").is(":hover")?r(".slick-track .slick-current").next().addClass("neu__slick_item--zoomed"):r(".slick-track .slick-current").next().removeClass("neu__slick_item--zoomed"),r(".slick-prev").is(":hover")?r(".slick-track .slick-current").prev().addClass("neu__slick_item--zoomed"):r(".slick-track .slick-current").prev().removeClass("neu__slick_item--zoomed"),r(t.$slides).each(function(e){r(this).attr("href","javascript:void(0);")});var s=t.currentSlide,i=r(t.$slides[s]).attr("data-src");i&&r(t.$slides[s]).attr("href",i)}),Theme.SlickHandler={arrows:r(".slick-arrow"),container:r(".neu__slick"),_init:function(){Theme.SlickHandler.arrows.on("mouseenter mouseleave",Theme.SlickHandler._doHoverHandler),Theme.SlickHandler.container.on("click",".slick-arrow",Theme.SlickHandler._doClickArrowHandler)},_doClickArrowHandler:function(e){r(e.target).hasClass("slick-next")?r(".slick-track .slick-current").next().addClass("neu__slick_item--zoomed"):r(".slick-track .slick-current").prev().addClass("neu__slick_item--zoomed")},_doHoverHandler:function(e){"mouseenter"===e.type?r(e.target).hasClass("slick-next")?r(".slick-track .slick-current").next().addClass("neu__slick_item--zoomed"):r(".slick-track .slick-current").prev().addClass("neu__slick_item--zoomed"):"mouseleave"===e.type&&(r(e.target).hasClass("slick-next")?r(".slick-track .slick-current").next().removeClass("neu__slick_item--zoomed"):r(".slick-track .slick-current").prev().removeClass("neu__slick_item--zoomed"))}},Theme.SlickHandler._init()),debug){var c=r(window).width();r("p.testp").text("Screen width is currently: "+c+"px."),r(window).resize(function(){var e=r(window).width();e<=576?r("p.testp").text("Screen width is less than or equal to 576px. Width is currently: "+e+"px."):e<=680?r("p.testp").text("Screen width is between 577px and 680px. Width is currently: "+e+"px."):e<=1024?r("p.testp").text("Screen width is between 681px and 1024px. Width is currently: "+e+"px."):e<=1500?r("p.testp").text("Screen width is between 1025px and 1499px. Width is currently: "+e+"px."):r("p.testp").text("Screen width is greater than 1500px. Width is currently: "+e+"px.")})}r(window).resize(function(){inMotion=!0,r("#slider").animate({left:"0px"},250,function(){inMotion=!1,r(".js__wall-scroll.left").css({"pointer-events":"none"}),r(".js__wall-scroll.right").css({"pointer-events":"all"}),clickTot=0}),"none"==r("#thewall").css("display")?console.log("hidden"):console.log("shown")})})}(this,jQuery);