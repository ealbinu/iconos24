(function (d, w, j) {
	'use strict';

	var ajax = new XMLHttpRequest(),
		movies = d.querySelector('#movies'),
		moviesInfo,
		moviesTemplate = '';

	ajax.open('GET', './js/movies.json', true);
	ajax.onload = function () {
		if ( ajax.status >= 200 && ajax.status < 400 ) {
			/*console.log(
				ajax.response,
				j.parse(ajax.response)
			);*/

			moviesInfo = j.parse(ajax.response);
			console.log(moviesInfo);
			/*moviesTemplate = `
				<article>
					<h2>${moviesInfo.title}</h2>
					<p><b>${moviesInfo.year}</b></p>
					<p><i>${moviesInfo.genres}</i></p>
					<img src="${moviesInfo.poster}">
				</article>
			`;*/

			moviesInfo['movies'].forEach(function (movie) {
				moviesTemplate += `
					<article class="Movie">
						<h2>${movie.title}</h2>
						<p><b>${movie.year}</b></p>
						<p><i>${movie.genres}</i></p>
						<img src="${movie.poster}">
					</article>
				`;
			});

			movies.innerHTML = moviesTemplate;
		}
	};
	ajax.send();
})(document, window, JSON);