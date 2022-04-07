$(function() {

	$(".nav ul li a:last").css("border","none");
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: '菜单',
		},
		navbars		: [
			 {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			} 
		]
	});
	/*index*/
	
    $('.banner').slick({
		dots: true,
        autoplay:true,
        arrows:false, 
        autoplaySpeed:3000,
    });
		
	 $('.syzz_con .left').slick({
		dots: true,
        autoplay:true,
        arrows:true, 
        autoplaySpeed:3000,
    });


		$(".links").hover(function(){
			$(".links ul").slideDown(500)
			
		},
		function(){
				$(".links ul").slideUp(500)
		})
		
		
		$(".er_a").hover(function(){
			$(".er_img").show();		
		},
		function(){
			$(".er_img").hide();
		
		})
		
				
		$(".f_da").slick({
			fade: true,
			useTransform: true,
			arrows: false,
			asNavFor:".f_xiao"
		})	
		$('.f_xiao').slick({
		  slidesToShow: 3,	
		  slidesToScroll: 1,
		  arrows:true,	  
		  focusOnSelect: true,
		 useTransform: true,
		 asNavFor:".f_da"
	
		});
		
		var left_img = $(".left img").attr("src");
		$(".pic_li").hover(function(){
			var img_src = $(this).find("img").attr("src");
			$(".left img").attr("src",img_src);
		},function(){
		
		})
		$(".nav li").hover(function(){
			$(this).find("ul").fadeIn()
		},function(){
			$(this).find("ul").fadeOut()
		})
		
		/* campous view top_qie start */

		$(".top_qie>a").click(function(){
			$(".top_qie>a").removeClass("active")
			$(this).addClass("active")
			$index = $(this).index()
			//$(".tra_ul>div").eq($index).addClass("invasible")
			//$(".tra_ul> div").eq($index).removeClass("invasible")
			$(".campusIndex"+$index).siblings().addClass("invisable")
			$(".campusIndex"+$index).removeClass("invisable")
		})
		$flag = false//判断广告是否被点击关闭
		$(window).scroll(function(){
			$offset = $("html,body").scrollTop()
			if($offset >1000 && $flag == false){
				$(".gq_left").show(500)
				$(".gq_right").show(500)				
			}
		}) 

		$(".power").click(function(){
			$flag = true//被点击关闭后不再弹出该广告
			$(".gq_left").hide(200)
			$(".gq_right").hide(200)
		})
});

  