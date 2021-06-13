$(document).ready(function(){

	$("#video_1").fadeIn();



})	

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

function showWorkshops() {

	$("#workshops-container").fadeOut();
	 window.location.href = 'list_workshops';
	
}

function createWorkshops() {

	$("#workshops-container").fadeOut();
	 window.location.href = 'create_workshops';
}

function backToChoiceWorkshops() {

	$(".list-workshops-container").fadeOut();
	$(".create-new-workshops-container").fadeOut();

	setTimeout(function(){ 
		$("#workshops-container").fadeIn(); 
	}, 500);
	
}

function changeVideoPicker(video) {

	$(".picker").unbind("click", showVideo(video));

}

function showVideo(video) {

	if (video == 1) {

  		$(".overview-control").removeClass("picker-selected");
  		$(".change-video").removeClass("picker-selected");		
  		$(".google-meet").removeClass("picker-selected");
  		$(".example-pratics").removeClass("picker-selected");
  		$(".steps-control").removeClass("picker-selected");

  		$(".introduction-control").addClass("picker-selected");

		$("#video_2").fadeOut();		
		$("#video_3").fadeOut();
		$("#video_4").fadeOut();		
		$("#video_5").fadeOut();
		$("#video_6").fadeOut();

		setTimeout(function(){ 
			$("#video_1").fadeIn();	 
		}, 500);				
	}
	else if (video == 2) {

  		$(".introduction-control").removeClass("picker-selected");
  		$(".change-video").removeClass("picker-selected");		
  		$(".google-meet").removeClass("picker-selected");
  		$(".example-pratics").removeClass("picker-selected");
  		$(".steps-control").removeClass("picker-selected");

  		$(".overview-control").addClass("picker-selected");


		$("#video_1").fadeOut();		
		$("#video_3").fadeOut();
		$("#video_4").fadeOut();		
		$("#video_5").fadeOut();
		$("#video_6").fadeOut();	

		setTimeout(function(){ 
			$("#video_2").fadeIn();	 
		}, 500);			
	}
	else if (video == 3) {

  		$(".introduction-control").removeClass("picker-selected");
  		$(".change-video").removeClass("picker-selected");		
  		$(".overview-control").removeClass("picker-selected");
  		$(".example-pratics").removeClass("picker-selected");
  		$(".steps-control").removeClass("picker-selected");

  		$(".google-meet").addClass("picker-selected");

		$("#video_1").fadeOut();		
		$("#video_2").fadeOut();
		$("#video_4").fadeOut();		
		$("#video_5").fadeOut();
		$("#video_6").fadeOut();

		setTimeout(function(){ 
			$("#video_3").fadeIn();	 
		}, 500);

	}
	else if (video == 4) {

  		$(".introduction-control").removeClass("picker-selected");
  		$(".change-video").removeClass("picker-selected");		
  		$(".overview-control").removeClass("picker-selected");
  		$(".example-pratics").removeClass("picker-selected");
  		$(".google-meet").removeClass("picker-selected");

  		$(".steps-control").addClass("picker-selected");

		$("#video_1").fadeOut();		
		$("#video_2").fadeOut();
		$("#video_3").fadeOut();		
		$("#video_5").fadeOut();
		$("#video_6").fadeOut();
				
		setTimeout(function(){ 
			$("#video_4").fadeIn();	 
		}, 500);

	}

	else if (video == 5) {

  		$(".introduction-control").removeClass("picker-selected");
  		$(".steps-control").removeClass("picker-selected");		
  		$(".overview-control").removeClass("picker-selected");
  		$(".example-pratics").removeClass("picker-selected");
  		$(".google-meet").removeClass("picker-selected");

  		$(".change-video").addClass("picker-selected");

		$("#video_1").fadeOut();		
		$("#video_2").fadeOut();
		$("#video_3").fadeOut();		
		$("#video_4").fadeOut();
		$("#video_6").fadeOut();
				
		setTimeout(function(){ 
			$("#video_5").fadeIn();	 
		}, 500);

	}

	else if (video == 6) {

  		$(".introduction-control").removeClass("picker-selected");
  		$(".steps-control").removeClass("picker-selected");		
  		$(".overview-control").removeClass("picker-selected");
  		$(".change-video").removeClass("picker-selected");
  		$(".google-meet").removeClass("picker-selected");

  		$(".example-pratics").addClass("picker-selected");

		$("#video_1").fadeOut();		
		$("#video_2").fadeOut();
		$("#video_3").fadeOut();		
		$("#video_4").fadeOut();
		$("#video_5").fadeOut();
				
		setTimeout(function(){ 
			$("#video_6").fadeIn();	 
		}, 500);

	}
	else {
		$("#video_1").fadeIn();			
	}

}

function setModalItems() {

  var modal = document.getElementById("myModal");
  var btn   = document.getElementById("myBtn");
  var span  = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function setErrorMessageModal(message) {
	$(".errors_message").text(message);
}

function setTitleModal(message) {
	$(".label_modal_title").text(message);
}

