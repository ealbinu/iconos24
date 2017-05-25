//alert('Hola');
/*
    comentario 
    de
    varias 
    líneas
*/
//Función Anónima Auto Ejecutable
(function (d, w, n) {
    'use strict';

    //console.log(d, w, n);

    //Objetos Literales
    var perro = {
        nombre: 'kEnAi',
        edad: 4,
        raza: 'Criollo',
        genero: 'Macho',
        esterilizado: true,
        ladrar: function () {
            alert( 'Guau guau!!!' );
        },
        comer: function ( comida ) {
            alert( this.nombre + ' come ' + comida );
        },
        aparecer: function(imagen) {
            d.write('<img src="' + imagen + '">');
        }
    };

    console.log(
        perro,
        perro.nombre,
        perro.raza,
        perro.edad,
        perro.esterilizado,
        perro.genero
    );

    perro.ladrar();
    perro.comer('tacos');
    perro.aparecer('https://camo.githubusercontent.com/b77a181ad750ac763cf3effac9857e6373000b41/687474703a2f2f626578746c616e2e636f6d2f696d672f706172612d637572736f732f6b656e61692e6a7067');
    

   //Clases 
   class Perro {
       constructor(nombre, edad, raza, esterilizado, genero) {
           this.nombre = nombre;
           this.edad = edad;
           this.raza = raza;
           this.esterilizado = esterilizado;
           this.genero = genero;
       }

       ladrar() {
            alert( 'Guau guau!!!' );
       }

       comer(comida) {
            //alert( this.nombre + ' come ' + comida );
            //Template String - Interpolacion de Variables
            alert( `${this.nombre} come ${comida}` );
       }

       aparecer(imagen) {
            //d.write('<img src="' + imagen + '">');
            d.write( `<img src="${imagen}">` );
       }
    }//cierra class

    var perro2 = new Perro('Boni', 8, 'Boxer', false, 'Hembra');

    console.log(
        perro2,
        perro2.nombre,
        perro2.raza,
        perro2.edad,
        perro2.esterilizado,
        perro2.genero
    );

    perro2.ladrar();
    perro2.comer('croquetas');
    perro2.aparecer('http://de10.com.mx/sites/default/files/styles/detalle_nota/public/field/image/shutterstock_122056762-boxer.jpg?itok=7ZKh-CgR');

    var perro3 = new Perro('Cachito', 3, 'Chihuahua', true, 'Macho');

    console.log(
        perro3,
        perro3.nombre,
        perro3.raza,
        perro3.edad,
        perro3.esterilizado,
        perro3.genero
    );

    perro3.ladrar();
    perro3.comer('zapato');
    perro3.aparecer('http://www.laparadadigital.com/fotos/perro%20chihuahua.jpg');
})(document, window, navigator);

//console.log(d, w, n);
/*console.log(
    document,
    window,
    navigator
);*/