jQuery.fn.fusionCalculateBlogEqualHeights=function(){var a=Math.round(1/(jQuery(this).children(":visible").first()[0].getBoundingClientRect().width/jQuery(this).width())),b=jQuery(this).find(".fusion-post-grid:visible").not(".invisible-after-ajax").length;jQuery(this).find(".invisible-after-ajax").hide().removeClass("invisible-after-ajax"),1<a&&1<b&&jQuery(this).find(".fusion-post-grid:visible").each(function(b){var c=parseInt(jQuery(this).css("top"),10),d=0;d=1==(b+1)%a?jQuery(this).parent().find(".fusion-post-grid:visible:eq("+(b+a)+")").length?parseInt(jQuery(this).parent().find(".fusion-post-grid:visible:eq("+(b+a)+")").css("top"),10)-c:parseInt(jQuery(this).parent().height(),10)-c:parseInt(jQuery(this).parent().find(".fusion-post-grid:visible:eq("+(b-1)+")").css("height"),10),jQuery(this).css("height",d+"px")})},jQuery(document).ready(function(){window.blogEqualHeightsResizeTimer,jQuery(window).on("resize",function(a,b){void 0!==b&&!0!==b||(jQuery(".fusion-blog-equal-heights").each(function(){jQuery(this).find(".fusion-post-grid").css("height","")}),jQuery(".fusion-blog-equal-heights").length&&(clearTimeout(window.blogEqualHeightsResizeTimer),window.blogEqualHeightsResizeTimer=setTimeout(function(){jQuery(".fusion-blog-equal-heights").isotope()},50)))})}),jQuery(window).load(function(){var a,b;jQuery().isotope&&jQuery(".fusion-blog-layout-grid").each(function(){var a=jQuery(this),b=".fusion-post-grid",c="packery";jQuery(this).hasClass("fusion-blog-layout-masonry")&&(b=".fusion-post-masonry"),jQuery(this).hasClass("fusion-blog-equal-heights")&&(c="fitRows"),jQuery(this).hasClass("fusion-blog-layout-masonry")&&!jQuery(this).hasClass("fusion-blog-layout-masonry-has-vertical")&&0<jQuery(this).find(".fusion-post-masonry:not(.fusion-grid-sizer)").not(".fusion-element-landscape").length&&jQuery(this).addClass("fusion-blog-layout-masonry-has-vertical"),a.isotope({layoutMode:c,itemSelector:b,isOriginLeft:!jQuery("body.rtl").length,resizable:!0,initLayout:!1}),a.on("layoutComplete",function(a,b){var c=jQuery(a.target);c.hasClass("fusion-blog-equal-heights")&&setTimeout(function(){c.find(".fusion-post-grid").css("height",""),c.fusionCalculateBlogEqualHeights()},300),c.css("min-height","")}),a.isotope(),setTimeout(function(){jQuery(window).trigger("resize",[!1])},250)}),a=jQuery(".fusion-blog-layout-timeline").find(".fusion-timeline-date").last().text(),b=!0,jQuery(".fusion-blog-layout-timeline").find(".fusion-timeline-date").click(function(){jQuery(this).next(".fusion-collapse-month").slideToggle()}),jQuery(".fusion-timeline-icon").find(".fusion-icon-bubbles").click(function(){b?(jQuery(this).parent().next(".fusion-blog-layout-timeline").find(".fusion-collapse-month").slideUp(),b=!1):(jQuery(this).parent().next(".fusion-blog-layout-timeline").find(".fusion-collapse-month").slideDown(),b=!0)}),jQuery(".fusion-posts-container-infinite").each(function(){var c,d,e,f,g=jQuery(this),h=jQuery(this).find(".post");jQuery(this).find(".fusion-blog-layout-timeline").length&&(g=jQuery(this).find(".fusion-blog-layout-timeline")),c="",g.parents(".fusion-blog-shortcode").length&&(c="."+g.parents(".fusion-blog-shortcode").attr("class").replace(/\ /g,".")+" "),jQuery(g).infinitescroll({navSelector:c+".fusion-infinite-scroll-trigger",nextSelector:c+"a.pagination-next",itemSelector:c+"div.pagination .current, "+c+"article.post:not( .fusion-archive-description ), "+c+".fusion-collapse-month, "+c+".fusion-timeline-date",loading:{finishedMsg:fusionBlogVars.infinite_finished_msg,msg:jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">'+fusionBlogVars.infinite_blog_text+"</div>")},maxPage:g.data("pages")?g.data("pages"):void 0,errorCallback:function(){g.find(".fusion-post-grid").css("height",""),jQuery(g).hasClass("isotope")&&jQuery(g).isotope()}},function(c){var f;jQuery(g).hasClass("fusion-blog-layout-timeline")&&(jQuery(c).first(".fusion-timeline-date").text()==a&&jQuery(c).first(".fusion-timeline-date").remove(),a=jQuery(g).find(".fusion-timeline-date").last().text(),jQuery(g).find(".fusion-timeline-date").each(function(){jQuery(this).next(".fusion-collapse-month").append(jQuery(this).nextUntil(".fusion-timeline-date",".fusion-post-timeline"))}),b||setTimeout(function(){jQuery(g).find(".fusion-collapse-month").hide()},200),setTimeout(function(){jQuery(g).find(".fusion-collapse-month").each(function(){jQuery(this).children().length||jQuery(this).remove()})},10),jQuery(g).find(".fusion-timeline-date").unbind("click"),jQuery(g).find(".fusion-timeline-date").click(function(){jQuery(this).next(".fusion-collapse-month").slideToggle()})),f="false"!==fusionBlogVars.flex_smoothHeight,jQuery(g).hasClass("fusion-blog-layout-grid")&&jQuery().isotope&&(jQuery(c).hide(),imagesLoaded(c,function(){jQuery(c).fadeIn(),jQuery(g).hasClass("isotope")&&(g.hasClass("fusion-portfolio-equal-heights")&&g.find(".fusion-post-grid").css("height",""),jQuery(g).isotope("appended",jQuery(c)),jQuery(g).isotope()),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})}),f=!1),jQuery(g).find(".flexslider").flexslider({slideshow:Boolean(Number(fusionBlogVars.slideshow_autoplay)),slideshowSpeed:fusionBlogVars.slideshow_speed,video:!0,smoothHeight:f,pauseOnHover:!1,useCSS:!1,prevText:"&#xf104;",nextText:"&#xf105;",start:function(a){a.removeClass("fusion-flexslider-loading"),void 0!==a.slides&&0!==a.slides.eq(a.currentSlide).find("iframe").length?(Number(fusionBlogVars.pagination_video_slide)?jQuery(a).find(".flex-control-nav").css("bottom","-20px"):jQuery(a).find(".flex-control-nav").hide(),Number(fusionBlogVars.status_yt)&&!0===window.yt_vid_exists&&window.YTReady(function(){new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"),{events:{onStateChange:onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"),a)}})})):Number(fusionBlogVars.pagination_video_slide)?jQuery(a).find(".flex-control-nav").css("bottom","0px"):jQuery(a).find(".flex-control-nav").show(),jQuery.waypoints("viewportHeight"),jQuery.waypoints("refresh")},before:function(a){0!==a.slides.eq(a.currentSlide).find("iframe").length&&(Number(fusionBlogVars.status_vimeo)&&-1!==a.slides.eq(a.currentSlide).find("iframe")[0].src.indexOf("vimeo")&&new Vimeo.Player(a.slides.eq(a.currentSlide).find("iframe")[0]).pause(),Number(fusionBlogVars.status_yt)&&!0===window.yt_vid_exists&&window.YTReady(function(){new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"),{events:{onStateChange:onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"),a)}})}))},after:function(a){0!==a.slides.eq(a.currentSlide).find("iframe").length?(Number(fusionBlogVars.pagination_video_slide)?jQuery(a).find(".flex-control-nav").css("bottom","-20px"):jQuery(a).find(".flex-control-nav").hide(),Number(fusionBlogVars.status_yt)&&!0===window.yt_vid_exists&&window.YTReady(function(){new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"),{events:{onStateChange:onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"),a)}})})):Number(fusionBlogVars.pagination_video_slide)?jQuery(a).find(".flex-control-nav").css("bottom","0px"):jQuery(a).find(".flex-control-nav").show(),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})}}),jQuery(c).each(function(){jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()}),d=g,jQuery(g).hasClass("fusion-blog-layout-timeline")&&(d=jQuery(g).parents(".fusion-posts-container-infinite")),e=d.find(".current").html(),d.find(".current").remove(),d.data("pages")==e&&(d.parent().find(".fusion-loading-container").hide(),d.parent().find(".fusion-load-more-button").hide()),"individual"!==fusionBlogVars.lightbox_behavior&&h.find(".fusion-post-slideshow").length||(window.avadaLightBox.activate_lightbox(jQuery(c)),h=g.find(".post")),window.avadaLightBox.refresh_lightbox(),jQuery(window).trigger("resize",[!1]),setTimeout(function(){jQuery(window).trigger("resize",[!1])},500),jQuery.isFunction(jQuery.fn.initWaypoint)&&jQuery(window).initWaypoint(),"undefined"!=typeof niceScrollReInit&&niceScrollReInit()}),(jQuery(g).hasClass("fusion-blog-archive")&&"load_more_button"===fusionBlogVars.blog_pagination_type||jQuery(g).hasClass("fusion-posts-container-load-more")||jQuery(g).hasClass("fusion-blog-layout-timeline")&&jQuery(g).parent().hasClass("fusion-posts-container-load-more"))&&(jQuery(g).infinitescroll("unbind"),f=jQuery(g).hasClass("fusion-blog-archive")?jQuery(g).parent().find(".fusion-load-more-button"):jQuery(g).parents(".fusion-blog-archive").find(".fusion-load-more-button"),f.on("click",function(a){a.preventDefault(),jQuery(g).infinitescroll("retrieve"),jQuery(g).hasClass("fusion-blog-layout-grid")})),d=g,jQuery(g).hasClass("fusion-blog-layout-timeline")&&jQuery(g).parents(".fusion-blog-layout-timeline-wrapper").length&&(d=jQuery(g).parents(".fusion-posts-container-infinite")),1===parseInt(d.data("pages"),10)&&(d.parent().find(".fusion-loading-container").hide(),d.parent().find(".fusion-load-more-button").hide())})});