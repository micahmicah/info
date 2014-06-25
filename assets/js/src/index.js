// write JavaScript here
$('.drawer-activator').click(function(){
	$('nav').toggleClass('drawer');
})

$(window).scroll(function(){
	if($(window).scrollTop() > 30){
		$('.logo').addClass('shrink');
	} else if ($(window).scrollTop()< 10){
		$('.logo').removeClass('shrink');
	}
})

console.log($('p').text());