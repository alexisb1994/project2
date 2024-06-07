const $characters=document.querySelector("section.characters");


fetch("https://hp-api.onrender.com/api/characters")
 .then(response => response.json())
    .then(data => {
        data.forEach(personaje => {
            console.log(personaje);
$characters.innerHTML+=`
<div class="character">
<img src="${personaje.image}" alt="imagen de ${personaje.name}">
<div class="character-title">
<h2>${personaje.name}</h2>
<h3><b>Nombre:</b> ${personaje.name}</h3>
<h3><b>Especie:</b> ${personaje.species}</h3>
</div>
</div>
`


        });
    });
    
//  );

// });


