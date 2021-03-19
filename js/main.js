$(document).ready(function(){
    var classActive = 'active';
    var removerItem = $('.item');
    removerItem.removeClass();
	$('#add').addClass(classActive);
});

$('.menu a[href^="#History"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 2000);
});

$('a[href^="#Get"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $(document).ready(function(){
	    $('html, body').animate({
		    scrollTop: targetOffset
        }, 2000);
        $('#Get').removeClass('stop');
    });
});


// Mudar para active o menu de acordo com a área
// $('.barraTomato').each(function(){
// 	var height = $(this).height(),
// 			offsetTop = $(this).offset().top,
// 			menuHeight = $('.menu').innerHeight(),
// 			id = $(this).attr('id'),
// 			$itemMenu = $('a[href="#' + id + '"]');
	
// 	$(window).scroll(function(){
// 		var scrollTop = $(window).scrollTop();
// 		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
//             $itemMenu.addClass('active');
//             $('.menuLink').removeClass('active');
// 		} else {
//             $itemMenu.removeClass('active');
//             $('.menuLink').addClass('active');
// 		}
// 	});
// });

$('.logo, .menu a[href^="#Home"]').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});

$('.imgConfucio').click(function(){
    $('[data-id= card], .card2, .card3').addClass('activeText');
    $('.textAnimation').removeClass();
    $('.tituloAnimation').removeClass();
    $('.container3').addClass('activeConfucio');
    $('#anima').addClass('AnimationTitulo');
    $('#anima2').addClass('AnimationText');
    $('html, body').css({
        overflow:'hidden'});
});

$('.voltar').click(function(){
    $('[data-id= card], .card2, .card3').removeClass('activeText');
    $('#anima').removeClass('AnimationTitulo');
    $('#anima2').removeClass('AnimationText');
    $('#anima').addClass('textAnimation');
    $('#anima2').addClass('tituloAnimation');
    $('.container3').removeClass('activeConfucio');
    $('html, body').css({
        overflow:'auto'});
});

$('.imgSeneca').click(function(){
    $('[data-id= card],.card1, .card3').addClass('activeText');
    $('.textAnimation2').removeClass();
    $('.tituloAnimation2').removeClass();
    $('.container3').addClass('activeSeneca');
    $('#anima3').addClass('AnimationTitulo2');
    $('#anima4').addClass('AnimationText2');
    $('html, body').css({
        overflow:'hidden'});
});

$('.voltar').click(function(){
    $('[data-id= card],.card1, .card3').removeClass('activeText');
    $('.container3').removeClass('activeSeneca');
    $('#anima3').addClass('textAnimation2');
    $('#anima4').addClass('tituloAnimation2');
    $('#anima4').removeClass('AnimationTitulo2');
    $('#anima3').removeClass('AnimationText2');
    $('html, body').css({
        overflow:'auto'});
});

$('.imgAristoteles').click(function(){
    $('[data-id= card],.card1, .card2').addClass('activeText');
    $('.textAnimation3').removeClass();
    $('.tituloAnimation3').removeClass();
    $('.container3').addClass('activeAristoteles');
    $('#anima5').addClass('AnimationTitulo3');
    $('#anima6').addClass('AnimationText3');
    $('html, body').css({
        overflow:'hidden'});
});

$('.voltar').click(function(){
    $('[data-id= card],.card1, .card2').removeClass('activeText');
    $('.container3').removeClass('activeAristoteles');
    $('#anima6').addClass('textAnimation3');
    $('#anima5').addClass('tituloAnimation3');
    $('#anima5').removeClass('AnimationTitulo3');
    $('#anima6').removeClass('AnimationText3');
    $('html, body').css({
        overflow:'auto'});
});

$('.logomarca').on('mouseenter', function(){
    $(this).attr("src", "../img/logoTomato.svg");
});

$('.logomarca').on('mouseout', function(){
    $(this).attr("src", "./img/logo.svg");
});

$('.midiaFace').on('mouseenter', function(){
    $(this).attr("src", "../img/facebookTomato.svg");
});

$('.midiaFace').on('mouseout', function(){
    $(this).attr("src", "./img/facebook.svg");
});

$('.midiaInsta').on('mouseenter', function(){
    $(this).attr("src", "../img/instagramTomato.svg");
});

$('.midiaInsta').on('mouseout', function(){
    $(this).attr("src", "./img/instagram.svg");
});

$('.midiaTwi').on('mouseenter', function(){
    $(this).attr("src", "../img/twitterTomato.svg");
});

$('.midiaTwi').on('mouseout', function(){
    $(this).attr("src", "./img/twitter.svg");
});

// Slider
function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotateSlide, velocidade);
	
	$(sliderClass + ' > :first').addClass(activeClass);

	$(sliderClass).hover(function(){
		clearInterval(rotate);
	}, function() {
		rotate = setInterval(rotateSlide, velocidade);
	});
	
	function rotateSlide() {
		var activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		if(nextSlide.length == 0) {
			nextSlide = $(sliderClass + ' > :first');
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	} 
}

slider('introducao', 3000);

$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $('.textTrabalho').each(function(){
        var inner = 400;
        if(windowTop + inner > $(this).offset().top){
            $(this).addClass('anime-init');
            $('.menuLink').removeClass('active');
        }else{
            $(this).removeClass('anime-init');
        }
    });
});

$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $('.geral_img, .geral_img2').each(function(){
        var inner = 500;
        if(windowTop + inner > $(this).offset().top){
            $(this).addClass('anime-init2');
            $('.menuLink').removeClass('active');
        }else{
            $(this).removeClass('anime-init2');
        }
    });
});

$('.menuHistory').click(function(){
    $('.container3').removeClass('display');
    $('.container2').addClass('display');
});

$('.menuLink').click(function(){
    $('.container3').addClass('display');
    $('.container2').removeClass('display');
});

// function setTopo(){
//     $(window).scrollTop(0);
// }
// $(window).bind('scroll', setTopo);