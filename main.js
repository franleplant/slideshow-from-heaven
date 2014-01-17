$(function () {
	var figures = $('figure'),
		pointer = 0;




	$('.forward').click(function () {
		figures.eq(pointer).hide();
		pointer = (pointer + 1) % 3;
		figures.eq(pointer).show();
	});


	$('.backward').click(function () {
		figures.eq(pointer).hide();
		pointer = (pointer - 1) % 3;
		figures.eq(pointer).show();
	});
})