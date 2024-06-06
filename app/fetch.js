const $main=document.querySelector("main");


fetch("https://hp-api.onrender.com/api/characters")
 .then(response => response.json())
    .then(data => {
        data.forEach(personaje => {
            console.log(personaje);
$main.innerHTML+=`
<div class="character">
<img src="${personaje.image}" alt="imagen de ${personaje.name}">
<h2>${personaje.name}</h2>
<h2>Nombre: ${personaje.name}</h2>
<h3>Especie: ${personaje.species}</h3>

</div>
`


        });
    });
    
//  );

// });


