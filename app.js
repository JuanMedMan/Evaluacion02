document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.personajes === 'undefined') {
        console.error('La variable "personajes" no está definida.');
        return;
    }
    const personajes = window.personajes;
    console.log('personajes:', personajes);

    const container = document.getElementById('container');
    console.log('Contenedor:', container);

    function mostrarPersonaje(personaje) {
        return `
        <div class="profile">
            <div class="character-profile">
                <div class="character-head">
                    <h1>${personaje.name}</h1>
                    <h1>${personaje.race}</h1>
                </div>

                <img src="${personaje.img}" />
                <div class="character-stats">
                    <div class="character-stats-abilities">
                        <div class="character-stats">
                            <ul>
                                <li>Health: ${personaje.health}</li>
                                <li>Attack: ${personaje.attack}</li>
                                <li>Defense: ${personaje.defense}</li>
                                <li>KI Restore Speed: ${personaje.kiRestoreSpeed}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    function mostrarTodosLosPersonajes() {
        console.log('Mostrando todos los personajes');
        container.innerHTML = '';
        personajes.forEach(personaje => {
            container.innerHTML += mostrarPersonaje(personaje);
        });
    }

    function encontrarGohan() {
        console.log('Buscando a Gohan');
        const gohan = personajes.find(personaje => personaje.name === 'Gohan');
        if (gohan) {
            container.innerHTML = mostrarPersonaje(gohan);
        } else {
            container.innerHTML = '<p>Gohan no encontrado.</p>';
        }
    }

    function filtrarSaiyajines() {
        console.log('Filtrando Saiyajines');
        const saiyajines = personajes.filter(personaje => personaje.race.includes('Saiyan'));
        container.innerHTML = '';
        if (saiyajines.length > 0) {
            saiyajines.forEach(personaje => {
                container.innerHTML += mostrarPersonaje(personaje);
            });
        } else {
            container.innerHTML = '<p>No se encontraron Saiyajines.</p>';
        }
    }

    function filtrarAndroides() {
        console.log('Filtrando Androides');
        const androides = personajes.filter(personaje => personaje.race.includes('Android'));
        container.innerHTML = '';
        if (androides.length > 0) {
            androides.forEach(personaje => {
                container.innerHTML += mostrarPersonaje(personaje);
            });
        } else {
            container.innerHTML = '<p>No se encontraron Androides.</p>';
        }
    }

    function menorPoderDeAtaque() {
        console.log('Buscando el menor poder de ataque');
        const menorAtaque = Math.min(...personajes.map(personaje => personaje.attack));
        const personajeMenorAtaque = personajes.find(personaje => personaje.attack === menorAtaque);
        container.innerHTML = '';
        if (personajeMenorAtaque) {
            container.innerHTML = mostrarPersonaje(personajeMenorAtaque);
        } else {
            container.innerHTML = '<p>No se encontró ningún personaje con poder de ataque.</p>';
        }
    }

    function mayorPoderDeAtaque() {
        console.log('Buscando el mayor poder de ataque');
        const mayorAtaque = Math.max(...personajes.map(personaje => personaje.attack));
        const personajeMayorAtaque = personajes.find(personaje => personaje.attack === mayorAtaque);
        container.innerHTML = '';
        if (personajeMayorAtaque) {
            container.innerHTML = mostrarPersonaje(personajeMayorAtaque);
        } else {
            container.innerHTML = '<p>No se encontró ningún personaje con poder de ataque.</p>';
        }
    }

    function posicionDeVegeta() {
        console.log('Buscando la posición de Vegeta');
        const index = personajes.findIndex(personaje => personaje.name === 'Vegeta');
        if (index !== -1) {
            alert(`Vegeta está en la posición ${index} en el array.`);
        } else {
            alert('Vegeta no se encuentra en el array.');
        }
    }

    function mostrarPersonajesFemeninos() {
        console.log('Mostrando personajes femeninos');
        const femeninos = personajes.filter(personaje => 
            personaje.gender && personaje.gender.includes('Female')
        );
        container.innerHTML = '';
        if (femeninos.length > 0) {
            femeninos.forEach(personaje => {
                container.innerHTML += mostrarPersonaje(personaje);
            });
        } else {
            container.innerHTML = '<p>No se encontraron personajes femeninos.</p>';
        }
    }

    function totalPoderDeAtaque() {
        console.log('Calculando el total del poder de ataque');
        const total = personajes.reduce((sum, personaje) => sum + (personaje.attack || 0), 0);
        alert(`El total del poder de ataque de todos los personajes es ${total}.`);
    }

    function buscarPersonajePorNombre() {
        const searchInput = document.querySelector('.search-characters');
        const searchTerm = searchInput.value.trim().toLowerCase();
        console.log('Buscando personajes con nombre:', searchTerm);

        const resultados = personajes.filter(personaje =>
            personaje.name.toLowerCase().includes(searchTerm)
        );
        
        container.innerHTML = '';
        if (resultados.length > 0) {
            resultados.forEach(personaje => {
                container.innerHTML += mostrarPersonaje(personaje);
            });
        } else {
            container.innerHTML = '<p>No se encontraron personajes con ese nombre.</p>';
        }
    }

    const mostrarPersonajesBtn = document.querySelector('.character-list ul li:first-child');
    const encontrarGohanBtn = document.querySelector('.character-list ul li:nth-child(2)');
    const filtrarSaiyajinesBtn = document.querySelector('.character-list ul li:nth-child(3)');
    const filtrarAndroidesBtn = document.querySelector('.character-list ul li:nth-child(4)');
    const menorPoderBtn = document.querySelector('.character-list ul li:nth-child(5)');
    const mayorPoderBtn = document.querySelector('.character-list ul li:nth-child(6)');
    const posicionVegetaBtn = document.querySelector('.character-list ul li:nth-child(7)');
    const personajesFemeninosBtn = document.querySelector('.character-list ul li:nth-child(8)');
    const totalPoderBtn = document.querySelector('.character-list ul li:nth-child(9)');

    const searchInput = document.querySelector('.search-characters');
    console.log('Campo de búsqueda:', searchInput);

    if (mostrarPersonajesBtn) {
        mostrarPersonajesBtn.addEventListener('click', mostrarTodosLosPersonajes);
        console.log('Evento de clic añadido al botón de mostrar personajes');
    } else {
        console.error('No se encontró el botón de mostrar personajes.');
    }

    if (encontrarGohanBtn) {
        encontrarGohanBtn.addEventListener('click', encontrarGohan);
        console.log('Evento de clic añadido al botón de encontrar a Gohan');
    } else {
        console.error('No se encontró el botón de encontrar a Gohan.');
    }

    if (filtrarSaiyajinesBtn) {
        filtrarSaiyajinesBtn.addEventListener('click', filtrarSaiyajines);
        console.log('Evento de clic añadido al botón de filtrar Saiyajines');
    } else {
        console.error('No se encontró el botón de filtrar Saiyajines.');
    }

    if (filtrarAndroidesBtn) {
        filtrarAndroidesBtn.addEventListener('click', filtrarAndroides);
        console.log('Evento de clic añadido al botón de filtrar Androides');
    } else {
        console.error('No se encontró el botón de filtrar Androides.');
    }

    if (menorPoderBtn) {
        menorPoderBtn.addEventListener('click', menorPoderDeAtaque);
        console.log('Evento de clic añadido al botón de menor poder de ataque');
    } else {
        console.error('No se encontró el botón de menor poder de ataque.');
    }

    if (mayorPoderBtn) {
        mayorPoderBtn.addEventListener('click', mayorPoderDeAtaque);
        console.log('Evento de clic añadido al botón de mayor poder de ataque');
    } else {
        console.error('No se encontró el botón de mayor poder de ataque.');
    }

    if (posicionVegetaBtn) {
        posicionVegetaBtn.addEventListener('click', posicionDeVegeta);
        console.log('Evento de clic añadido al botón de posición de Vegeta');
    } else {
        console.error('No se encontró el botón de posición de Vegeta.');
    }

    if (personajesFemeninosBtn) {
        personajesFemeninosBtn.addEventListener('click', mostrarPersonajesFemeninos);
        console.log('Evento de clic añadido al botón de personajes femeninos');
    } else {
        console.error('No se encontró el botón de personajes femeninos.');
    }

    if (totalPoderBtn) {
        totalPoderBtn.addEventListener('click', totalPoderDeAtaque);
        console.log('Evento de clic añadido al botón de total poder de ataque');
    } else {
        console.error('No se encontró el botón de total poder de ataque.');
    }

    if (searchInput) {
        searchInput.addEventListener('input', buscarPersonajePorNombre);
        console.log('Evento de búsqueda añadido al campo de búsqueda');
    } else {
        console.error('No se encontró el campo de búsqueda.');
    }
});