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

        // _this.DrawModalResponse(data.status);

      }   

      })
    .fail(function(data) {
      console.log( "error" );
      console.log(data.status);
  });

}


// function DrawModalResponse(status) {

//   var container    = $('<div/>', { class: 'container' }); 

//   var modal        = $('<div/>', { class: 'modal fade', id: 'myModal', role: 'dialog' }); 
//   var modal_dialog = $('<div/>', { class: 'modal-dialog' }); 
  
//   var modal_header = $('<div/>', { class: 'modal-header' }); 
//   var button_close = $('<div/>', { class: 'close' }); 
//   var modal_title  = $('<h4/>',  { class: 'modal-title' }); 
  
//   var modal_body   = $('<h4/>',  { class: 'modal-body' }); 
//   var modal_footer = $('<h4/>',  { class: 'modal-footer' }); 

//   var button_close_default = $('<div/>', { class: 'btn btn-default', value: 'Close' }); 
  
//   container.append(modal);
//   modal.append(modal_dialog);

//   modal_dialog.append(modal_header);
//   modal_header.append(button_close);
//   modal_header.append(modal_title);

//   modal_dialog.append(modal_body);
//   modal_dialog.append(modal_footer);
//   modal_footer.append(button_close_default);

//   $(".container_form_workshops").append(container);

// }
