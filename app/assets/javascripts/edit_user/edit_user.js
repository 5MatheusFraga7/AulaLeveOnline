
function sendUpdateDataUser() {

   $('#update_data_user').prop('disabled', true);
      
   var input_email  = document.getElementById("form_input_email").value;
   var input_name   = document.getElementById("form_input_name").value;

   $.ajax("edit_user/update.json?input_email="+input_email+"&input_name="+input_name)
        .done(function(data) {

          if (data.status == "success") {

            alert("Usuário salvo!");

          } else if (data.status == "missing_parameters") {

             alert("Para atualizar, selecione os campos de nome e email!");
          } 
          else if (data.status == "saving_error") {

             alert("Erro ao salvar dados");
          } 
          else {

            alert("Erro! "+data.status);
  	
          }

          })
        .fail(function(data) {
          console.log( "error" );
          console.log(data.status);
        }
   );  
}