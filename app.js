const films = [
    {
        "title": "Arancia Meccanica",
        "director": "Stanley Kubrick",
        "year": 1972,
        "rating": 9,
        "image": "img/Arancia_Meccanica.webp"
    },
    {
        "title": "The Aviator",
        "director": "Martin Scorsese",
        "year": 2004,
        "rating": 8,
        "image": "img/Aviator.webp"
    },
    {
        "title": "L'avvocato del diavolo",
        "director": "Taylor Hackford",
        "year": 1997,
        "rating": 7,
        "image": "img/Avvocato_Del_Diavolo.webp"
    },
    {
        "title": "Bastardi senza gloria",
        "director": "Quentin Tarantino",
        "year": 2009,
        "rating": 8.5,
        "image": "img/Bastardi_Senza_Gloria.webp"
    },
    {
        "title": "Casinò",
        "director": "Martin Scorsese",
        "year": 1995,
        "rating": 9.5,
        "image": "img/Casino.webp"
    },
    {
        "title": "C'era una volta in America",
        "director": "Serio Leone",
        "year": 1984,
        "rating": 10,
        "image": "img/Cera_una_volta_in_America.webp"
    },
    {
        "title": "Dick Tracy",
        "director": "Warren Beatty",
        "year": 1990,
        "rating": 7,
        "image": "img/Dick_Tracy.webp"
    },
    {
        "title": "Distretto 13",
        "director": "John Carpenter",
        "year": 1976,
        "rating": 7,
        "image": "img/Distretto_13.webp"
    },
    {
        "title": "Dog Day Afternoon",
        "director": "Sidney Lumet",
        "year": 1975,
        "rating": 8,
        "image": "img/Quel_Pomeriggio_Di_Un_Giorno_Da_Cani.webp"
    },
    {
        "title": "Fanny e Alexander",
        "director": "Ingmar Bergman",
        "year": 1982,
        "rating": 9,
        "image": "img/Fanny_e_Alexander.webp"
    },
    {
        "title": "Heat",
        "director": "Michael Mann",
        "year": 1995,
        "rating": 9,
        "image": "img/Heat.webp"
    },
    {
        "title": "Il Padrino",
        "director": "Francis Ford Coppola",
        "year": 1972,
        "rating": 9,
        "image": "img/Il_Padrino.webp"
    },
    {
        "title": "Il Padrino - Parte II",
        "director": "Francis Ford Coppola",
        "year": 1974,
        "rating": 9.5,
        "image": "img/Il_Padrino_2.webp"
    },
    {
        "title": "JFK - Un caso ancora aperto",
        "director": "Oliver Stone",
        "year": 1991,
        "rating": 8,
        "image": "img/JFK.webp"
    },
    {
        "title": "L'infernale Quinlan",
        "director": "Orson Welles",
        "year": 1958,
        "rating": 8.5,
        "image": "img/L_Infernale_Quinlan.webp"
    },
    {
        "title": "L'occhio che uccide",
        "director": "Michael Powell",
        "year": 1960,
        "rating": 8,
        "image": "img/L_Occhio_Che_Uccide.webp"
    },
    {
        "title": "La mala educacion",
        "director": "Pedro Almodovar",
        "year": 2004,
        "rating": 7.5,
        "image": "img/La_Mala_Educacin.webp"
    },
    {
        "title": "Manhattan",
        "director": "Woody Allen",
        "year": 1979,
        "rating": 8.5,
        "image": "img/Manhattan.webp"
    },
    {
        "title": "Match Point",
        "director": "Woody Allen",
        "year": 2005,
        "rating": 8,
        "image": "img/Match_Point.webp"
    },
    {
        "title": "Nuovo cinema Paradiso",
        "director": "Giuseppe Tornatore",
        "year": 1988,
        "rating": 7.5,
        "image": "img/Nuovo_Cinema_Paradiso.webp"
    },
    {
        "title": "Quei Bravi Ragazzi",
        "director": "Martin Scorsese",
        "year": 1990,
        "rating": 9.5,
        "image": "img/Quei_Bravi_Ragazzi.webp"
    },
    {
        "title": "Rosemary's Baby",
        "director": "Roman Polanski",
        "year": 1968,
        "rating": 9,
        "image": "img/Rosemarys_Baby.webp"
    },
    {
        "title": "Shining",
        "director": "Stanley Kubrick",
        "year": 1980,
        "rating": 9,
        "image": "img/Shining.webp"
    },
    {
        "title": "Taxi Driver",
        "director": "Martin Scorsese",
        "year": 1976,
        "rating": 9.5,
        "image": "img/Taxi_Driver.webp"
    },
    {
        "title": "The Fog",
        "director": "John Carpenter",
        "year": 1980,
        "rating": 7,
        "image": "img/The_Fog.webp"
    },
    {
        "title": "The Hateful Eight",
        "director": "Quentin Tarantino",
        "year": 2015,
        "rating": 8.5,
        "image": "img/The_Hateful_Eight.webp"
    },
    {
        "title": "The Wolf Of Wall Street",
        "director": "Martin Scorsese",
        "year": 2013,
        "rating": 8.5,
        "image": "img/The_Wolf_Of_Wall_Street.webp"
    },
    {
        "title": "Toro Scatenato",
        "director": "Martin Scorsese",
        "year": 1980,
        "rating": 9.5,
        "image": "img/Toro_Scatenato.webp"
    },
    {
        "title": "Tutto su mia madre",
        "director": "Pedro Almodovar",
        "year": 1999,
        "rating": 8.5,
        "image": "img/Tutto_Su_Mia_Madre.webp"
    },
    {
        "title": "Y tu mama tambien",
        "director": "Alfonso Cuaron",
        "year": 2001,
        "rating": 7,
        "image": "img/Y_Tu_Mama_Tambien.webp"
    }
];

function displayFilms(films) {
    const filmCardsContainer = document.getElementById('film-cards');
    filmCardsContainer.innerHTML = '';

    films.forEach(film => {
        const card = document.createElement('div');
        card.className = 'card mt-4 mb-4 col-md-4';
        card.style.width = '20rem';

        card.innerHTML = `
            <img src="${film.image}" class="card-img-top" alt="${film.title}">
            <div class="card-body">
                <h5 class="card-title text-center text-info">${film.title}</h5>
                <p class="card-text text-center"><strong>Regia</strong>: ${film.director}</p>
                <p class="card-text text-center"><strong>Anno</strong>: ${film.year}</p>
                <p class="card-text text-center"><strong>Valutazione</strong>: ${film.rating}</p>
            </div>
        `;

        filmCardsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayFilms(films);

    document.querySelector("#sort-button").addEventListener("click", () => {
        const sortedFilms = films.sort((a, b) => b.rating - a.rating);
        displayFilms(sortedFilms);
    });
});
