$(document).ready(function (){

    $('#formulario-login').validate({
        rules:{
            usuario:{
                minlength:3,
                required: true
            },
            contraseña:{
                required:true,
                minlength:8
            }          
            
        },

        messages:{
            usuario:{
                minlength:"El nombre del usuario debe tener más 3 caracteres",
                required:"Ingrese su nombre de usuario"
            },
            contraseña:{
                minlength:"La contresaña debe tener 8 caracteres",
                required:"Debe ingresar su contraseña"
            }
        },
        return :true
    });
});