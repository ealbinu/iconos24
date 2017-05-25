function rojo(e) {
	document.body.style.backgroundColor = 'red';
	document.body.style.color = 'white';
	console.log(e);
}

(function (d) {
	'use strict';

	var btnVerde = d.querySelector('#verde'),
		btnAzul = d.querySelector('#azul'),
		btnReset = d.querySelector('#resetear'),
		btns = d.querySelectorAll('button');

	function verde(e) {
		d.body.style.backgroundColor = 'green';
		d.body.style.color = 'white';

		console.log(e);

		e.target.textContent = 'He pulsado el botón verde';
		e.target.style.fontSize = '300%';
		e.target.style.backgroundColor = 'black';
		e.target.style.color = 'greenyellow';
	}

	function azul(e) {
		var el = e.target;

		d.body.style.backgroundColor = 'blue';
		d.body.style.color = 'white';

		console.log(e);

		el.textContent = 'He pulsado el botón azúl';
		el.style.fontSize = '300%';
		el.style.backgroundColor = 'white';
		el.style.color = 'navy';
	}

	//Manejador de eventos semántico
	btnVerde.onclick = verde;

	//Manejador de eventos múltiple
	btnAzul.addEventListener('click', azul);

	btnReset.addEventListener('click', function () {
		d.body.style.backgroundColor = '';
		d.body.style.color = '';

		console.log(
			btns,
			btns[4]
		);

		/*array.forEach(function (element){});*/
		btns.forEach(function (btn) {
			btn.style.backgroundColor = '';
			btn.style.color = '';
			btn.style.fontSize = '';
		});

		btnAzul.removeEventListener('click', azul);
	});
})(document);

(function (d, w) {
	'use strict';

	var fecha = new Date(),
		hora = fecha.getHours(),
		saludo = d.querySelector('#saludo'),
		hojaCSS = d.createElement('link');

	function saludar() {
		//alert('La ventana ha cargado');
		/*
			if(0-5) {
				No me jodas
			} else if(6-11) {
				Buenos días 
			} else if(12-18) {
				Buenas tardes
			} else {
				Buenas noches 19-23
			}
		*/
		//if ( hora < 6 ) { //Excluyo el valor de comparación
		if ( hora <= 5 ) { //Incluyo el valor de comparación
			saludo.innerHTML = '<h3>No me jodas</h3>';
			hojaCSS.href = './css/duermete.css';
		} else if ( hora > 5 && hora < 12 ) {
			saludo.innerHTML = '<h3>Buenos días</h3>';
			hojaCSS.href = './css/dia.css';
		} else if ( hora >= 12 && hora <= 18 ) {
			saludo.innerHTML = '<h3>Buenos tardes</h3>';
			hojaCSS.href = './css/tarde.css';
		} else {
			saludo.innerHTML = '<h3>Buenos noches</h3>';
			hojaCSS.href = './css/noche.css';
		}
		
		hojaCSS.rel = 'stylesheet';
		d.head.appendChild(hojaCSS);
	}

	//w.onload = saludar;
	saludar();
})(document, window);

(function (d, w){
		'use strict';

	var reloj = d.querySelector('#reloj'),
		//toLocaleString()  fecha y hora
		//toLocaleDateString() fecha
		//toLocaleTimeString() hora
		fechaFormato = new Date().toLocaleTimeString(),
		btnIniciarReloj = d.querySelector('#iniciar-reloj'),
		btnIniciarAlarma = d.querySelector('#iniciar-alarma'),
		btnDetenerReloj = d.querySelector('#detener-reloj'),
		//declaración y asignación
		btnDetenerAlarma = d.querySelector('#detener-alarma'),
		alarma = d.createElement('audio'),
		//declaración
		temporizadorReloj,
		temporizadorAlarma;

		/*
			1. Al dar clic al botón iniciar-reloj el reloj tiene que avanzar
			2. Al dar clic al botón detener-reloj el reloj tiene que detenerse
			3. Al dar clic al botón iniciar-alarma, después de cierto intervalo de tiempo tiene que sonar el archivo alarma.mp3
			4. Al dar clic al botón detener-alarma, el archivo alarma.mp3 no tiene que sonar
		*/

		/*
			Que necesitan:
				* Temporizadores
					setInterval y setTimeout
					clearInterval y clearTimeout
				* Reloj - setInterval y clearInterval
				* Alarma - setTimeout y clearTimeout
				* Para hacer sonar la alarma tendrán que generar un tag HTML <audio></audio>
			Tutoriales:
				Intervalos https://www.youtube.com/watch?v=1s7itmFVlBQ&index=3&list=PLvq-jIkSeTUaw9krmA6bf5inYcuvUNWI3
				Date https://www.youtube.com/watch?v=wkOwM8Tbrz0&index=9&list=PLvq-jIkSeTUaw9krmA6bf5inYcuvUNWI3
				Repaso de Eventos https://www.youtube.com/watch?v=PkV-_58-CeE
		*/

	w.addEventListener('load', function () {
		reloj.style.fontSize = '500%';
		reloj.innerHTML = fechaFormato;
		alarma.src = './audio/alarma.mp3';
		alarma.controls = true;
		d.body.appendChild(alarma);

		btnIniciarReloj.onclick = function () {
			temporizadorReloj = setInterval(function () {
				reloj.innerHTML = new Date().toLocaleTimeString();
				console.log('ejecutándose interval');
			}, 1000);
		}

		btnDetenerReloj.onclick = function () {
			clearInterval(temporizadorReloj);
		}

		btnIniciarAlarma.addEventListener('click', function () {
			temporizadorAlarma = setTimeout(function () {
				alarma.play();
			}, 3000);
		});

		btnDetenerAlarma.addEventListener('click', function () {
			clearTimeout(temporizadorAlarma);
		});
	});
})(document, window);