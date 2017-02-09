(function (d) {
    'use strict';

    var lista = d.querySelector('#lista'),
        li = d.createElement('li'),
        txtLi = d.createTextNode('Lista 6'),
        p1 = d.querySelector('#uno'),
        p2 = d.querySelector('#dos'),
        container = d.querySelector('#container'),
        a = d.querySelector('.link');

    console.log(
        lista,
        lista.parentNode,
        lista.parentElement,
        lista.childNodes,
        lista.children,
        lista.firstChild,
		lista.firstElementChild,
		lista.lastChild,
		lista.lastElementChild,
		lista.previousSibling,
		lista.previousElementSibling,
		lista.nextSibling,
		lista.nextElementSibling
    );

    li.appendChild(txtLi);
    lista.appendChild(li);
    lista.removeChild(lista.firstElementChild);
    lista.type = 'decimal';
    lista.start = 4;

    p1.innerText = 'Este es el <b>párrafo</b> con el id 1';
    p2.innerHTML = 'Este es el <b>párrafo</b> con el id 2';

    console.log(
        container.id,
        container.classList,
        container.className,
        container.classList[1],
        container.classList.contains('fixed'),
        container.classList.contains('row')
    );

    container.classList.add('active');
    container.classList.remove('fixed');
    container.classList.toggle('round');
    container.classList.toggle('round');

    console.log(
        a,
        //getters
        a.href,
        a.getAttribute('target'),
        a.style,
        d.head.querySelector('title'),
        d.head,
        d.body,
        d.documentElement
    );

    //setters
    a.href = 'http://jonmircha.com';
    a.setAttribute('target', '_self');
    a.style.padding = '2rem';
    a.style.fontSize = '4vh';
    a.style.borderRadius = '.5rem';
    a.style.fontFamily = 'sans-serif';
    d.body.style.backgroundColor = '#000';
    d.body.style.color = '#FFF';
    d.head.querySelector('title').innerText = 'Hemos cambiado el Título del Documento';
    d.documentElement.lang = 'en';
    d.documentElement.setAttribute('lang', 'es-CL');
})(document);