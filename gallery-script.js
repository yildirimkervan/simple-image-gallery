 $(document).on('click',".image-self", function() {
	var imgsrc = $(this).attr("src");
	var nextimgsrc = $(this).next().attr("src");
	var beforeimgsrc = $(this).prev().attr("src");
		if (nextimgsrc == '') {
			$(".next-button").attr("vid", '');
		} else {
			$(".next-button").attr("vid", nextimgsrc);
		}

		if (beforeimgsrc == '') {
			$(".prev-button").attr("vid", '');
		} else {
			$(".prev-button").attr("vid", beforeimgsrc);
		}

	$(".pop-shell").show();
	$(".black-shadow").show();
	$(".pop-image").attr("src", imgsrc);

});

$(document).on('click',".black-shadow", function() {
	$(".pop-shell").hide();
	$(".black-shadow").hide();
	$(".pop-image").attr("src", "");

});

$(document).on('click',".next-button", function() {
	var imgsrc = $(this).attr("vid");
	if (imgsrc == '') {
		$(".pop-shell").hide();
		$(".black-shadow").hide();
		$(".pop-image").attr("src", "");
	} else {

	$(".pop-image").attr("src", imgsrc);
		var nextimgsrc = $('.image-display-shell').find('img[src$="'+imgsrc+'"]').next().attr("src");
		if (nextimgsrc == undefined) {
			$(".next-button").attr("vid", '');
		} else {
			$(".next-button").attr("vid", nextimgsrc);
		}

		var beforeimgsrc = $('.image-display-shell').find('img[src$="'+imgsrc+'"]').prev().attr("src");
		if (beforeimgsrc == undefined) {
			$(".prev-button").attr("vid", '');
		} else {
			$(".prev-button").attr("vid", beforeimgsrc);
		}

	}

});

$(document).on('click',".prev-button", function() {
	var imgsrc = $(this).attr("vid");
	if (imgsrc == '') {
		$(".pop-shell").hide();
		$(".black-shadow").hide();
		$(".pop-image").attr("src", "");
	} else {

	$(".pop-image").attr("src", imgsrc);
		var nextimgsrc = $('.image-display-shell').find('img[src$="'+imgsrc+'"]').next().attr("src");
		if (nextimgsrc == undefined) {
			$(".next-button").attr("vid", '');
		} else {
			$(".next-button").attr("vid", nextimgsrc);
		}

		var beforeimgsrc = $('.image-display-shell').find('img[src$="'+imgsrc+'"]').prev().attr("src");
		if (beforeimgsrc == undefined) {
			$(".prev-button").attr("vid", '');
		} else {
			$(".prev-button").attr("vid", beforeimgsrc);
		}
	}

});
