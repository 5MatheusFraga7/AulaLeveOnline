
$(document).ready(function(){

  // document.getElementById("myBtn").addEventListener("click", displayDate);


})	

function editWorkshop(workshop_id, type_edition) {

  if (type_edition == 'pencil') {

  		console.log('Belo');

  }
  else if (type_edition == 'remove') {

      removeWorkshop(workshop_id);
  }
  else if (type_edition == 'grafico') {

  		console.log('Belo3');

  }

}

function goTocreateWorkshops() {
	window.location.href = 'create_workshops';
}

function goTolistWorkshops() {
  window.location.href = 'list_workshops';
}

function removeWorkshop(workshop_id) {

   $.ajax("workshops/remove.json?workshop_id="+workshop_id)
    .done(function(data) {
      console.log(data);   
      })
    .fail(function(data) {
      console.log( "error" );
      console.log(data);
  });
   
}


// function displayDate() {
//   document.getElementById("myBtn").innerHTML = Date();
// }

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  })
