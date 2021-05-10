
$(document).ready(function(){

})	

function editWorkshop(workshop_id, type_edition) {

  if (type_edition == 'remove') {

     removeWorkshop(workshop_id);
  }
  else if (type_edition == 'grafico') {

    getWorkshopStatistics(workshop_id);

  }

}

function removeWorkshop(workshop_id) {

  var _this = this;

   $.ajax("workshops/remove.json?workshop_id="+workshop_id)
    .done(function(data) {

        console.log(data);

        if (data == 'success') {

            // _this.updateWorkshopsList(data.user_id);
        }

      })

    .fail(function(data) {
      console.log( "error" );
      console.log(data);
  });
   
}

function updateWorkshopsList(user_id) {

  

}

function getWorkshopStatistics(workshop_id) {

  var _this = this;

  $("#tale_list_workshops").fadeOut();

   $.ajax("workshops/get_workshop_statistics.json?workshop_id="+workshop_id)
    .done(function(data) {

        if (data.status == 'success') {

            _this.showWorkshopStatistics(data.workshop);

        } 

      })
    .fail(function(data) {
      console.log( "error" );
      console.log(data);
  });  

}

function showWorkshopStatistics(workshop) {

  if (workshop.note != null && workshop.note != undefined) {
    
     $("#media-label").html("Média: "+workshop.note);
  }
  else {

     $("#media-label").html("Média: 0");

  }

  $("#grafics-title").html(workshop.observation);
  $("#link-to-evaluation").html(workshop.evaluation_link);

  setTimeout(function(){ 
      $("#workshop-statistics").fadeIn();
  }, 500);
}

function goTocreateWorkshops() {
   window.location.href = 'create_workshops';
}

function goTolistWorkshops() {
   window.location.href = 'list_workshops';
}

function back_button() {

  $("#workshop-statistics").fadeOut();

  setTimeout(function(){ 
      $("#tale_list_workshops").fadeIn();
  }, 500);  
}