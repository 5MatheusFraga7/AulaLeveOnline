(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function saveNewWorkshop() {

 var _this = this;

 var type_institution = document.getElementById("type_institution_input").value;
 var observation      = document.getElementById("observation_input").value;
 var ministry_at      = document.getElementById("ministry_at_input").value;
 var matter           = document.getElementById("matter_input").value;
 var institution      = document.getElementById("institution_input").value;
 var state            = $('#state_input :selected').val();

  $.ajax("workshops/create.json?type_institution=" +type_institution+"&observation="+observation+"&ministry_at="+ministry_at+"&matter="+matter+"&institution="+institution+"&state="+state)
    .done(function(data) {

      if (data.status == "success") {

         console.log(data.status);

      }   

      })
    .fail(function(data) {
      console.log( "error" );
      console.log(data.status);
  });

}

function setNoteforWorkshop(note) {

    document.getElementById("note_for_workshop").value = note;

    $('.buttons_notes').prop('disabled', true);

    $('#buton_note'+note).css("background-color", "red");

}


function sendEvaluation() {

   $('#send_evaluation').prop('disabled', true);
      
   var workshop_hash       = document.getElementById("workshop_hash").value;
   var student_name        = document.getElementById("student_name").value;
   var student_email       = document.getElementById("student_email").value;
   var student_observation = document.getElementById("student_observation").value;
   var note_for_workshop   = document.getElementById("note_for_workshop").value;

   $.ajax("evaluation/create.json?workshop_hash=" +workshop_hash+"&student_name="+student_name+"&student_email="+student_email+"&student_observation="+student_observation+"&note_for_workshop="+note_for_workshop)
        .done(function(data) {

          if (data.status == "success") {

            alert("Sua avaliação, foi salva!");

          } else if (data.status == "missing_parameters") {

             alert("Para enviar sua avaliação, selecione os campos de nome, nota e email!");
          } 

          })
        .fail(function(data) {
          console.log( "error" );
          console.log(data.status);
        }
   );  
}
