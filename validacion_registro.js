$(document).ready(function (){

    $('#formulario-registro').validate({
        rules:{
            usuario:{
                minlength:3,
                required: true
            },
            correo:{
                required: true,
                email: true
            },
            contraseña:{
                required:true,
                minlength:8
            },
            
            contraseña2:{
                required:true,
                minlength:8,
                equalTo:"#contraseña"
            },
            fecha_naci:{
                required:true
            },
            genero:{
                required:true
            }
            
            
        },

        messages:{
            usuario:{
                required:"Ingrese su nombre",
                minlength: "El nombre debe tener más 3 caracteres"
            },

            email:{
                required:"Ingrese su email",
                email:"El email ingresado no es válido"
            },

            contraseña:{
                minlength:"La contresaña debe tener 8 caracteres",
                required:"Debe ingresar una contraseña"
            },

            contraseña2:{
                minlength:"La contresaña debe tener 8 caracteres",
                required:"Repita su contraseña",
                equalTo:"Las contreseñas ingresadas no son iguales"
            },
            fecha_naci:{
                required:"Debe ingresar su fecha de nacimiento"
            },
            genero:{
                required:"Debe selecionar alguna de las opciones"
            }
        },
        return :true
    });
});