$(function() {
	$('.footer').click(function() {
		$('.box-mensagem').show();
	});

	$('.box-mensagem i').click(function() {
		$('.box-mensagem').hide();
	});

	/* $('.footer')
	.mouseover(function() {
		setTimeout(function() {
			$('.legenda').css('display', 'block').animate({
				'display' : 'block',
			});;
		}, 500);
	})
	.mouseout(function() {
		setTimeout(function() {
			$('.legenda').css('display', 'none').animate({
				'display' : 'none',
			});;
		}, 500);
	});; */
});