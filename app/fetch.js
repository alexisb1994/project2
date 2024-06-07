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

<div class="character-profile">
<div>
<h3>Nombre:</h3>
<p>${personaje.name}</p>
</div>

<div>
<h3>Especie:</h3>
<p>${personaje.species}</p>
</div>

<div>
<h3>Año de nacimiento:</h3>
<p>${personaje.yearOfBirth}</p>
</div>

<div>
<h3>Actor:</h3>
<p>${personaje.actor}</p>
</div>

</div>
</div>
</div>
`


        });
    });
    
//  );

// });


