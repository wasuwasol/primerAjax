const xhttp = new XMLHttpRequest();

const pedirData = (_parametro) => {
    let url;
    if (_parametro.includes('http')){
        url = `${_parametro}`;
    }else{
        url = `https://swapi.co/api/people/${_parametro}/`;
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            mostrarData(xhttp.response);
        }
    }
    
    xhttp.open('GET', url, true);
    xhttp.send();
};



// readyState 0 - 4
// 0 = unsent
// 1 = opened
// 2 = head recieved
// 3 = loading
// 4 = done

// status  200 - 500
// 200 = ok
// 300 = redireccion
// 400 = peticion invalida, recurso inexistente
// 500 = error del servidor


// GET = solicitar
// POST = crear
// PUT = modificar
// DELETE = eliminar