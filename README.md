# PRACT-JAVASCRIPT

He realizado la práctica del multi idioma con la página creada en la práctica anterior. En este caso, los archivos que se han visto modificados son:

-	INDEX.HTML: En este archivo simplemente he añadido dos botones que hacen referencia a los dos idiomas a los que quiero traducir mi página (español e inglés). Estos llaman a la función traducir(“idioma”) de js. Además, para crearme mi propio api con las traducciones, he tenido que identificar a cada elemento que quería traducir usando data-translate = “id correspondiente a cada cosa”.

-	CARPETA API: Esta carpeta contiene mis archivo .json con las traducciones correspondientes. He añadido el id introducido en el html para identificar a cada cosa y realizar en un archivo las traducciones al español (es.home.json) y en otro en inglés (en.home.json).

-	JAVASCRIPT.JS: En este archivo tengo toda la lógica de javascript. Incluye por un lado la petición a la api realizada con fetch (como queremos coger información de la api, usamos un GET). Por otro lado, se ha creado una función traducir, a la cual se le pasa como argumento el idioma a traducir y con ello se realiza la petición a la api y consigo los elementos a traducir haciendo un inner.html.

