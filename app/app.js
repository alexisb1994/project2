const tableBody = document.querySelector("table tbody");

const agregarPelicula = (pelicula) => {
  const peliculaHTML = `
    <tr>
      <td data-label="PELÍCULA"><a href="${pelicula.url}" title="${pelicula.titulo}" target="_blank" style="color: aqua;"">${pelicula.titulo}</a></td>
      <td data-label="ESTRENO">${pelicula.estreno}</td>
      <td data-label="DIRECTOR">${pelicula.director}</td>
      <td data-label="CURSO">${pelicula.curso}</td>
      <td data-label="CLASIFICACIÓN">${pelicula.clasificacion}</td>
      <td data-label="DURACIÓN">${pelicula.duracion}</td>
    </tr>
  `;
  tableBody.innerHTML += peliculaHTML;
};



const peliculas = [
    {
      titulo: "Harry Potter y la piedra filosofal",
      url: "https://www.espinof.com/cuatro/harry-potter-piedra-filosofal-estupenda-aventura-que-conserva-todo-su-magico-encanto-20-anos-despues-su-estreno",
      estreno: "2001",
      director: "Chris Columbus",
      curso: "Primer Año",
      clasificacion: "PG",
      duracion: "152 minutos"
    },
    {
        titulo: "Harry Potter y la cámara secreta",
        url: "https://es.wikipedia.org/wiki/Harry_Potter_y_la_c%C3%A1mara_secreta_(pel%C3%ADcula)",
        estreno: "2002",
        director: "Chris Columbus",
        curso: "2do Año",
        clasificacion: "A partir de 7 años",
        duracion: "2h 41"
      },
      {
        titulo: "Harry Potter y la cámara secreta",
        url: "https://es.wikipedia.org/wiki/Harry_Potter_y_la_c%C3%A1mara_secreta_(pel%C3%ADcula)",
        estreno: "2002",
        director: "Chris Columbus",
        curso: "2do Año",
        clasificacion: "A partir de 7 años",
        duracion: "2h 41"
      },
      {
        titulo: "Harry Potter y el prisionero de Azkaban",
        url: "https://www.espinof.com/criticas/harry-potter-y-el-prisionero-de-azkaban-fantasmagorica-belleza",
        estreno: "2004",
        director: "Alfonso Cuarón",
        curso: "3er Curso",
        clasificacion: "A partir de 7 años",
        duracion: "2h 22min"
      },
      {
        titulo: "Harry Potter y el cáliz de fuego",
        url: "https://www.espinof.com/estrenos/harry-potter-y-el-caliz-de-fuego-mas-de-lo-mismo",
        estreno: "2005",
        director: "Mike Newell",
        curso: "4to Curso",
        clasificacion: "A partir de 10 años",
        duracion: "2h 23min"
      },
      {
        titulo: "Harry Potter y la Orden del Fénix",
        url: "https://www.espinof.com/criticas/harry-potter-y-la-orden-del-fenix-estirando-un-chicle-muy-rentable",
        estreno: "2007",
        director: "David Yates",
        curso: "5to Curso",
        clasificacion: "A partir de 10 años",
        duracion: "2h 18min"
      },
      {
        titulo: "Harry Potter y el misterio del príncipe",
        url: "https://www.espinof.com/criticas/harry-potter-y-el-misterio-del-principe-desastrosa-sexta-parte-de-la-famosa-saga",
        estreno: "2009",
        director: "David Yates",
        curso: "6to Curso",
        clasificacion: "A partir de 10 años",
        duracion: "2h 33min"
      },
      {
        titulo: "Harry Potter y las reliquias de la muerte - Parte 1",
        url: "https://www.espinof.com/criticas/harry-potter-y-las-reliquias-de-la-muerte-parte-1-la-mas-tensa-y-adulta-de-la-saga",
        estreno: "2010",
        director: "David Yates",
        curso: "Último Curso",
        clasificacion: "A partir de 10 años",
        duracion: "2h 26min"
      },
      {
        titulo: "Harry Potter y las reliquias de la muerte - Parte 2",
        url: "https://www.espinof.com/criticas/harry-potter-y-las-reliquias-de-la-muerte-parte-1-la-mas-tensa-y-adulta-de-la-saga",
        estreno: "2010",
        director: "David Yates",
        curso: "Último Curso",
        clasificacion: "A partir de 13 años",
        duracion: "2h 26min"
      },
    
  ];

  peliculas.forEach(pelicula => agregarPelicula(pelicula));

  document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.querySelector("#content-container");

//     const libros = [
//         {
//             titulo: "Harry Potter y la Piedra Filosofal",
//             imagen: "./assets/image/Harry Potter y la Piedra Filosofal.jpeg",
//             año: "1997",
//             resumen: "El viaje comienza con 'Harry Potter y la piedra filosofal', donde conocemos a Harry, un huérfano que vive con sus desagradables tíos y su primo Dudley. Todo cambia en su undécimo cumpleaños, cuando descubre que es un mago y asiste a la Escuela de Magia y Hechicería Hogwarts. Entre hacer amigos y descubrir su fama en el mundo mágico, Harry se enfrenta al misterio de la Piedra Filosofal."
//         },
//         {
//             titulo: "Harry Potter y la Cámara Secreta",
//             imagen: "./assets/image/Harry Potter y la Cámara Secreta.jpg",
//             año: "1998",
//             resumen: "El segundo año de Harry en Hogwarts está plagado de nuevos desafíos en 'Harry Potter y la cámara secreta'. La Cámara de los Secretos ha sido abierta, dejando a los estudiantes en peligro. Harry, Ron y Hermione deben usar su ingenio para desentrañar la historia de la cámara y detener la amenaza que acecha en las sombras."
//         },
//         {
//             titulo: "Harry Potter y el prisionero de Azkaban",
//             imagen: "./assets/image/harry-potter-prisionero-azkaban.jpg",
//             año: "1999",
//             resumen: "'Harry Potter y el prisionero de Azkaban' eleva la tensión cuando un peligroso prisionero, Sirius Black, escapa de Azkaban y todos creen que va tras Harry. A lo largo de este libro, Harry explora más sobre su pasado y se enfrenta a criaturas aterradoras como los dementores, aprendiendo en el camino valiosas lecciones sobre la amistad y el coraje."
//         },
//         {
//             titulo: "Harry Potter y el Cáliz de Fuego",
//             imagen: "./assets/image/harry-potter-caliz-fuego.jpg",
//             año: "2000",
//             resumen: "La competición llega a Hogwarts con el Torneo de los Tres Magos en 'Harry Potter y el cáliz de fuego'. Harry, inesperadamente seleccionado para competir, debe superar peligrosas pruebas. Este libro marca un punto de inflexión en la saga, con un tono más oscuro y la revelación de que Lord Voldemort está cerca de recuperar su poder."
//         },
//         {
//             titulo: "Harry Potter y la Orden del Fénix",
//             imagen: "./assets/image/harry-potter-orden-fenix.jpg",
//             año: "2003",
//             resumen: "Las cosas se ponen más serias en 'Harry Potter y la Orden del Fénix'. El Ministerio de Magia se niega a reconocer el regreso de Voldemort, y Harry debe luchar contra la desinformación y el miedo. Este tomo introduce a la Orden del Fénix, un grupo secreto que lucha contra las fuerzas oscuras, y muestra cómo Harry asume más responsabilidades y desafíos."
//         },
//         {
//             titulo: "Harry Potter y el Misterio del Príncipe",
//             imagen: "./assets/image/harry-potter-misterio-principe.jpg",
//             año: "2005",
//             resumen: "Secretos del pasado salen a la luz en 'Harry Potter y el misterio del príncipe'. Mientras Voldemort gana fuerza, Harry y Dumbledore buscan la manera de detenerlo. Descubrimientos sobre el pasado de Voldemort y los Horrocruxes son clave en este penúltimo libro, preparando el escenario para la batalla final."
//         },
//         {
//             titulo: "Harry Potter y las Reliquias de la Muerte",
//             imagen: "./assets/image/harry-potter-reliquias-muerte.jpg",
//             año: "2007",
//             resumen: "Todo culmina en 'Harry Potter y las reliquias de la Muerte'. Harry, Ron y Hermione deben encontrar y destruir los Horrocruxes restantes para derrotar a Voldemort. En su viaje, enfrentan desafíos físicos y emocionales que pondrán a prueba su amistad y coraje. Es una conclusión épica y emocionante para la saga."
//         }
//     ];

//     const crearContenido = (titulo, imagenSrc, publicado, descripcion) => {
//         const listItem = document.createElement('li');

//         const listTitle = document.createElement('div');
//         listTitle.classList.add('list-title');
//         listTitle.textContent = titulo;

//         const list = document.createElement('div');
//         list.classList.add('list');

//         const listImg = document.createElement('div');
//         listImg.classList.add('list-img');
//         const img = document.createElement('img');
//         img.src = imagenSrc;
//         img.alt = titulo;
//         listImg.appendChild(img);

//         const listDescription = document.createElement('div');
//         listDescription.classList.add('list-description');
//         const publicadoP = document.createElement('p');
//         publicadoP.textContent = `Publicado en ${publicado}`;
//         const descripcionP = document.createElement('p');
//         descripcionP.textContent = descripcion;

//         listDescription.appendChild(publicadoP);
//         listDescription.appendChild(descripcionP);

//         list.appendChild(listImg);
//         list.appendChild(listDescription);

//         listItem.appendChild(listTitle);
//         listItem.appendChild(list);

//         contentContainer.appendChild(listItem);
//     };

//     libros.forEach(libro => {
//         crearContenido(libro.titulo, libro.imagen, libro.año, libro.resumen);
//     });
});