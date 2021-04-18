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

 var title  = document.getElementById("validationCustom01").value;
 var date   = document.getElementById("validationCustom02").value;
 var matter = document.getElementById("validationCustomUsername").value;
 var cidade = document.getElementById("validationCustom03").value;
 var estado = document.getElementById("validationCustom04").value;

  $.ajax("workshops/create.json?title=" +title+"&date="+date)
  .done(function(data) {
      console.log(data);
    })
    .fail(function() {
      console.log( "error" );
    });
}



