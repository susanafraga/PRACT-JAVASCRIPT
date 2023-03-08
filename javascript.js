//funcion de la peticion con fetch en donde pondré mi url de la api que quiera

const peticion = function (url){
  return fetch(url, {
    method: "GET",
    mode:"cors",
    //headers
  })
  .then(response => {
    if(response.ok){
      return response.json();
    } else{
      throw new Error ("Error en la peticion")
    }
  })
  .catch(error => {
    console.log(error);
  });
};


//funcion de traduccion que le pasare el idioma que quiero

//en vez de hacer un if(language=="es") y else if(language=="en")
//puedo usar directamente esto : peticion(`./api/${language}.home.json`)

//mi función seria:
/*
const traducir = function(language) {
  console.log(language); //aquí veo si se me ha pasado correctamente el idioma
    peticion(`.${language}.home.json`)
    .then(objeto => {
      console.log(objeto);
      let elementosATraducir = document.querySelectorAll("[data-translate]");
      //itero sobre los elementos para que aparezca su texto correspondiente
      elementosATraducir.forEach(elemento => {
        let clave = elemento.getAttribute("data-translate");
        elemento.innerHTML = objeto[clave];
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
*/
const traducir = function(language) {
  console.log(language); //aquí veo si se me ha pasado correctamente el idioma
  if(language === "es") {
    peticion(".es.home.json")
    .then(objeto => {
      console.log(objeto);
      let elementosATraducir = document.querySelectorAll("[data-translate]");
      //itero sobre los elementos para que aparezca su texto correspondiente
      elementosATraducir.forEach(elemento => {
        let clave = elemento.getAttribute("data-translate");
        elemento.innerHTML = objeto[clave];
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  else if(language === "en"){
    peticion(".en.home.json")
    .then(objeto => {
      console.log(objeto);
      let elementosATraducir = document.querySelectorAll("[data-translate]");
      //itero sobre los elementos para que aparezca su texto correspondiente
      elementosATraducir.forEach(elemento => {
        let clave = elemento.getAttribute("data-translate");
        elemento.innerHTML = objeto[clave];
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
};
  
