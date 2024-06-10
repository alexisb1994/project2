const $characters = document.querySelector("section.characters");

fetch("https://hp-api.onrender.com/api/characters")
  .then(respuesta => respuesta.json())
  .then(data => {

    const mostrarPersonajes = (personajes) => {
      $characters.innerHTML = ""; 

      personajes.forEach(personaje => {
        const actorEtiqueta = personaje.gender === "male" ? "Actor" : "Actriz";
        const nameForSearch = personaje.name.replace(/ /g, '+');

        const characterHTML = `
          <div class="character">
          <div class="character-link">
            <a href="https://www.google.com/search?q=${nameForSearch}&oq=harr&gs_lcrp=EgZjaHJvbWUqDwgAEEUYOxiDARixAxiABDIPCAAQRRg7GIMBGLEDGIAEMgYIARBFGDkyCggCEAAYsQMYgAQyDQgDEAAYgwEYsQMYgAQyCggEEAAYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD0yBggIEEUYQdIBCDEzNDFqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8" target="_blank" class="character-link">
            </div>
              <div class="character-img"> 
                <img src="${personaje.image}" alt="imagen de ${personaje.name}">
              </div>  
              <div class="character-title">
                <h2>${personaje.name}</h2>
                <div class="character-profile">
                  <div>
                    <h3>Nombre:</h3>
                    <p>${personaje.name}</p>
                  </div>
                  <div>
                    <h3>${actorEtiqueta}:</h3>
                    <p>${personaje.actor}</p>
                  </div>
                  <div>
                    <h3>Año de nacimiento:</h3>
                    <p>${personaje.yearOfBirth}</p>
                  </div>
                  <div>
                    <h3>Sexo:</h3>
                    <p>${personaje.gender}</p>
                  </div>
                  <div>
                    <h3>Especie:</h3>
                    <p>${personaje.species}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        `;
        $characters.innerHTML += characterHTML;
      });
    };

    mostrarPersonajes(data);

    const $inpDePersonajes = document.getElementById("inpDePersonajes");
    $inpDePersonajes.addEventListener("input", () => {
      const searchTerm = $inpDePersonajes.value.toLowerCase();
      const filteredCharacters = data.filter((personaje) =>
        personaje.name.toLowerCase().includes(searchTerm)
      );
      mostrarPersonajes(filteredCharacters);
    });
  })
  .catch(error => {
    console.error("Hubo un problema con la solicitud fetch:", error);
  });