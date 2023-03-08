const elementosATraducir = document.querySelectorAll('*[data-translate]');
elementosATraducir.forEach(elemento =>
    elemento.textContent = jsonTraducciones[elemento.dataset.translate]);


const peticion = function (url) {
    return fetch(url, {
        method: "GET",
        mode: "cors",
        //headers
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la peticion")
            }
        })
        .catch(error => {
            console.log(error);
        });
};


function translate(language) {
    if (language === "es") {
        peticion("./api/es.home.json")
    }
    else if(language === "en"){
        peticion("./api/en.home.json")
    }
}