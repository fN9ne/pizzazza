$(document).ready(function() {
	$('.delivery-type').on('click', function() {
		let showedBlock = $('.delivery-courier');
		if ($('input[value=courier]').is(':checked')) {
			showedBlock.addClass('_active');
		} else {
			showedBlock.removeClass('_active');
		}
	});
	$('.delivery-time').on('click', function() {
		let showedBlock = $('.delivery-current-time');
		if ($('input[value=current-time]').is(':checked')) {
			showedBlock.addClass('_active');
		} else {
			showedBlock.removeClass('_active');
		}
	});
});