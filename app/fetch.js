const $characters = document.querySelector("section.characters");

fetch("https://hp-api.onrender.com/api/characters")
  .then(respuesta => respuesta.json())
  .then(data => {
  
    const mostrarPersonajes = (personajes) => {
      $characters.innerHTML = ""; 

      personajes.forEach(personaje => {
        const characterHTML = `
          <div class="character">
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
                  <h3>Actor:</h3>
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
          </div>
        `;
        $characters.innerHTML += characterHTML; // 
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
  