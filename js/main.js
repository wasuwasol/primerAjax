let ok = document.getElementById('ok');

ok.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
        let contenido = ok.value;
        pedirData(contenido);
    }
});




const mostrarData = function (_respuestaDeAjax) { //API fetch
    let lista = document.getElementById('lista');
    
    if (lista.children.length != 0) {
        lista.innerHTML = '';
    }

    let objeto = JSON.parse(_respuestaDeAjax); 
    let valores = Object.values(objeto);
    let keys = Object.keys(objeto);



    valores.forEach((_element, _key) => {

        let li = document.createElement('li');
        if( _element.includes('https')){
            fetch(_element)
            .then(_respuesta => _respuesta.json()) // _respuesta.json() puede ser una callback
            .then(_obj => {
                if (keys[_key] === 'homeworld') li.append(keys[_key], ': ', _obj.name);
                else if (keys[_key] === 'url') li.append(keys[_key], ': ', _obj.url);
            })
        }else if(Array.isArray(_element)){
            let ul2 = document.createElement('ul');
            let h3 = document.createElement('h3');
            h3.innerText = keys[_key];
            ul2.append(h3);
            _element.forEach( _e => {
                fetch(_e)
                .then( _res => _res.json())
                .then( _obj => {
                    for (const key in _obj) {
                        let li2 = document.createElement('li');
                        li2.append(key,': ', _obj[key]);
                        ul2.append(li2);
                    }
                })
                li.append(ul2);
            })
            console.log('hay arrays en '+ keys[_key] );
        }else{
            li.append(keys[_key], ': ', valores[_key]);        
        }
        lista.append(li);
    });


}


