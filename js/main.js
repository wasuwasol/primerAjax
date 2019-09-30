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
            .then(_respuesta => _respuesta.json())
            .then(_obj => {
                if (keys[_key] === 'homeworld') li.append(keys[_key], ': ', _obj.name);
                else if (keys[_key] === 'url') li.append(keys[_key], ': ', _obj.url);
            })
        }else if(Array.isArray(_element)){
            
            console.log('hay arrays en '+ keys[_key] );
        }else{
            li.append(keys[_key], ': ', valores[_key]);        
        }
        lista.append(li);
    });


}


