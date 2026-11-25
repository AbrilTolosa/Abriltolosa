// funcion para cambiar el color del titulo//
            function cambiarColor(elemento){
                elemento.style.color = "cornsilk"; //cambiar el color del texto a Azul
                
            }

            // funcion para restaurar el color del titulo//
            function restaurarColor(elemento){
                elemento.style.color = "indianred"; //cambiar el color del texto a rojo
                
            }

    // obtener el elemento del titulo por su id//
            const titulo = document.getElementById("Título");
            

            
    //agregar eventos cuando se pasa el mouse y restaurar color cuando se saca el mouse//
    titulo.addEventListener("mouseover", function (){

        cambiarColor(titulo);
    });

    titulo.addEventListener("mouseout", function (){

        restaurarColor(titulo);
    });