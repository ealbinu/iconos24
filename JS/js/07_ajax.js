(function (d, w) {
	'use strict';

	var READY_STATE_COMPLETE = 4,
		OK = 200,
		NOT_FOUND = 404,
		ajax = new XMLHttpRequest(),
		preload = d.querySelector('#preload'),
		country = d.querySelector('#country'),
		linksMenu = d.querySelectorAll('.menu a');

		//console.log(linksMenu)

		function ajaxRequest(e) {
			//alert('He pulsado un enlace');
			e.preventDefault();

			ajax.open('GET', e.target.href, true);
			ajax.onreadystatechange = function() {
				preload.innerHTML = '<i class="fa  fa-refresh  fa-spin  fa-5x"></i>';

				if ( ajax.readyState === READY_STATE_COMPLETE ) {
					console.log(ajax);
					if ( ajax.status === OK ) {
						preload.innerHTML = '';
						country.innerHTML = ajax.response;
					} else if ( ajax.status === NOT_FOUND ) {
						preload.innerHTML = '';
						country.innerHTML = `<h3>El servidor NO responde. Error N° ${ajax.status}: ${ajax.statusText}</h3>`;
					}
				}
			}
			ajax.setRequestHeader('Content-Type', 'text/html');
			ajax.send();
		}

		linksMenu.forEach(function (link) {
			link.onclick = ajaxRequest;
		});
})(document, window);