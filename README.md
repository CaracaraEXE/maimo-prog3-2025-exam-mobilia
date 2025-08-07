# Examen Programación 3 - Agosto/2025
Profesor: Lic. Leandro Amaro García.

## Condiciones
- Esta totalmente prohbido el uso herramientas de AI como chatGPT o Copilot. Así como también utilizar examenes de años anteriores. - El material que pueden consultar es Internet, o actividades realizadas en clase, no TPs con código resuelto.
- Por último esta prohibido usar el celular y conversar entre ustedes en ninguna plataforma. Cualquier minima sospecha de que no se cumplen las condiciones propuestas, será motivo de invalidez del final y nota 2.
- Se aprueba con: 7 (siete)
- Tiempo disponible: 3 hrs

## Consigna
El proyecto consiste en el armado de una app de películas. La cual cuenta con una grilla de películas, un detalle de cada película.
Tu objetivo es completar el código para que se puedan visualizar correctamente las películas tanto en la grilla, como en el detalle de cada una.

Dicho esto comencemos =)

## Repositorio y entrega
- Debes clonar este repositorio en tu computadora.
- Crear un repositorio publico y vacio en Github. Copiá en el portapapeles la url

Abrir el proyecto y escribir:
- `` git remote -v `` (para chequear la url remota)
- `` git remote set-url origin [la url de tu repositorio] ``
- `` git remote -v `` (para chequear que haya cambiado y sea la tuya)

Cuando termines el examen, haces
-  `` git add . ``
-  `` git commit -m "examen prog 3 Apellido" ``
-  `` git push origin main ``

Ingresar a https://docs.google.com/spreadsheets/d/1wufMCeK-glnSJHEdSsuE2nkMGYyWSID36lSb-EctenY/edit?usp=sharing
En la columna I pegar el link de tu repo


## Puntos

### 1) Fetch de películas - 3 puntos
Utilizando los siguientes endpoints

Todas las peliculas:

``https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32 ``

y

Una película por id: 

``https://api.themoviedb.org/3/movie/[ID_MOVIE]?api_key=eb7e3fd7272143562cec959061b5eb32 ``


Deberás completar las funciones fetchMovies (MoviesGridContainer) y fetchMovieDetail (MovieDetail.js), usando axios, para obtener la información. Recordá usar siempre try/catch para detectar posibles errores y loadings para manejar la interface. 


### 2) Card de movie - 2 puntos
- En MoviesGrid.js es una grilla de peliculas que deberia mostrar cada card de película. Tu tarea es recorrer mediante map el array de movies y mostrar el componente llamado Card. No modifiques nombres de variables. Recordá el uso de loading para conditional rendering. Si lo hiciste correctamente, deberias ver una grilla de posters de películas.
- En el componente Card.js reemplazá los valores dinámicamente

### 3) Generos de la película - 1 punto
- Nuevamente en MovieDetail.js vas a encontrar un ul con clase generos. Tu tarea es armar el loop que te permita mostrar todos los generos que corresponden a esa película.


### 4) Página de About del alumno - 4 puntos
Deberás utilizar la página /about y completarle:
- Tu nombre y apellido. 
- Una foto tuya o una imagen que te guste (usar link relativo, subirla a la carpeta public. No pierdas mucho tiempo buscando imagenes). 
La imagen debe venir oculta por defecto y se debe mostrar un botón que diga Ver imagen. Al clickearlo, debera reemplazar ese boton con la imagen. Para esto deberás usar useState y el evento onclick y conditional rendering.
- Un breve parrafo acerca tuyo.
- Un link a linkedin o alguna red social tuya
- Un listado de hobbies o gustos. Los hobbies deben estar cargados en un array y mostrarse mediante el uso de map. Cada hobbie deberá ser un objeto que contenga el nombre y un número expresando cuanto te gusta ese hobbie. En el listado, deberás agregarle el signo % Ej: Música 50%. Películas 20%
- No olvides agregar el link a la pagina de about en el componente Navbar.
- Esta página deber ser responsive.

En este punto se evaluará el correcto uso de html, sus etiquetas semánticas y estilos css. Para los estilos debés usar Tailwind. 
Lo más importante es la jerarquia de los contenidos, grilla o display de los elementos.



Mucha suerte y welcome to the machine!