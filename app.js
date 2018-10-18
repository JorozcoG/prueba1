function validar(id){
var elemento = document.getElementById(id);
   if (elemento.checkValidity()){
       elemento.style.borderColor="green";

   }else{
        elemento.style.borderColor="red";
   }
}

function enviarValidar(){

      var nombrevalido = document.getElementById('nombre').checkValidity();
      var apellidovalido = document.getElementById('apellido').checkValidity();
      var edadvalido = document.getElementById('edad').checkValidity();
      var domivalido = document.getElementById('domi').checkValidity();
      var telvalido = document.getElementById('tel').checkValidity();

      if (nombrevalido && apellidovalido && edadvalido && domivalida && telvalido) {
         alert("Formulario procesado exitosamente");

     }else{
         alert("No se ha podido procesar el formulario");
     }

}
