var x = '';

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

 var type_institution = document.getElementById("type_institution_input").value;
 var observation      = document.getElementById("observation_input").value;
 var ministry_at      = document.getElementById("ministry_at_input").value;
 var matter           = document.getElementById("matter_input").value;
 var institution      = document.getElementById("institution_input").value;
 var state            = $('#state_input :selected').val();

  $.ajax("workshops/create.json?type_institution=" +type_institution+"&observation="+observation+"&ministry_at="+ministry_at+"&matter="+matter+"&institution="+institution+"&state="+state)
    .done(function(data) {
      console.log(data);   
      })
    .fail(function(data) {
      console.log( "error" );
      console.log(data);
  });

}



