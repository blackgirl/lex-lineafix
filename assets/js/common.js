$(document).ready(function() {

// Плавная прокрутка к якорям
$('.nav a').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
});

// Слайдер популярных фактур
$('.invoices-slider').slick();

// Сетка Masonry 
var $container = $('.grid'); 
$container.imagesLoaded(function() {
	$container.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 30, 
		stamp: '.stamp'
	});
});

// Работа с формами
$('.call-form').click(function(e) {
	e.preventDefault();
	var formID = $(this).attr('href');
	var productID = $(this).attr('data-title');
	$('.product-title-input').val(productID);
	$(formID).fadeIn(); 
	$('.overlay').fadeIn();
	$('body').css('overflow', 'hidden');
});
$('.form-close').click(function() {
	$('.form-overlay').fadeOut();
	$('.overlay').fadeOut();
	$('body').css('overflow', 'initial');
});

// VIDEO
$('.video-link').click(function(e) {
	e.preventDefault();
	var iframe = $('.video iframe'),
    iframe_url = "https://www.youtube.com/embed/" + this.id + "&autoplay=1&autohide=1";
	iframe.attr('src', iframe_url);
	$('.overlay').fadeIn();
	$('.video iframe').fadeIn();
});
$('.overlay').click(function() {
	$('.form-overlay').fadeOut();
	$('.overlay').fadeOut();
	$('body').css('overflow', 'initial');
	$('.video iframe').fadeOut(); 
	var videoID = $('.video iframe').attr('src');
	$('.video iframe').attr('src', videoID);
}); 

// Обработка формы 
$(".form").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		window.location.replace("thank.html");
		$(".form").trigger("reset");
	});
	return false;
});

// Прокрутка наверх
$(window).scroll(function() {
	if ($(this).scrollTop() >= 500) {
		$('#totop').fadeIn();
	} else {
		$('#totop').fadeOut();
	}
});
$("a[href='#top']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

// WoW
new WOW().init(); 

});