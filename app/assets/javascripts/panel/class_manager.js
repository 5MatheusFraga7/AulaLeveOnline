$(document).ready(function(){

	

});

function showHoverImg(index_img) {

	if ( index_img == 1 ) {

		var img_to_hide = document.getElementById('tutorial_img1');
		var img_to_show = document.getElementById('tutorial_hover_img1');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';

	} 
	else if(index_img == 2) {

		var img_to_hide = document.getElementById('tutorial_img2');
		var img_to_show = document.getElementById('tutorial_hover_img2');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';	
	}

	else if(index_img == 3) {

		var img_to_hide = document.getElementById('tutorial_img3');
		var img_to_show = document.getElementById('tutorial_hover_img3');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';	
	}
	else if(index_img == 4) {

		var img_to_hide = document.getElementById('tutorial_img4');
		var img_to_show = document.getElementById('tutorial_hover_img4');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';	
	}

}


function hideHoverImg(index_img) {

	if ( index_img == 1 ) {

		var img_to_hide = document.getElementById('tutorial_hover_img1');
		var img_to_show = document.getElementById('tutorial_img1');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';

	} 
	else if(index_img == 2) {

		var img_to_hide = document.getElementById('tutorial_hover_img2');
		var img_to_show = document.getElementById('tutorial_img2');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';	
	}

	else if(index_img == 3) {

		var img_to_hide = document.getElementById('tutorial_hover_img3');
		var img_to_show = document.getElementById('tutorial_img3');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';	
	}
	else if(index_img == 4) {

		var img_to_hide = document.getElementById('tutorial_hover_img4');
		var img_to_show = document.getElementById('tutorial_img4');
	 
		img_to_hide.style.display = 'none';
		img_to_show.style.display = 'block';	
	}

}

function showWorkshos() {

	$("#workshops-container").fadeOut();

	setTimeout(function(){ 
		$(".list-workshops-container").fadeIn(); 
	}, 500);
	
}

function createWorkshos() {
	$("#workshops-container").fadeOut();

	setTimeout(function(){ 
		$(".list-workshops-container").fadeIn(); 
	}, 500);
}

function backToChoiceWorkshops() {

	$(".list-workshops-container").fadeOut();
	$(".create-new-workshops-container").fadeOut();

	setTimeout(function(){ 
		$("#workshops-container").fadeIn(); 
	}, 500);
	
}
