const hp_films = [{
    name: "Harry Potter and the Philosopher's Stone",
    year: 2001,
    director: "Chris Columbus",
    composer: "John Williams",
    screenwriter: "Steve Kloves",
    producers: "David Heyman",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/f/fb/PS_poster.jpg/revision/latest/scale-to-width-down/675?cb=20180318153750"
}, {
    name: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    director: "Chris Columbus",
    composer: "John Williams",
    screenwriter: "Steve Kloves",
    producers: "David Heyman",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/c/c5/Harry_Potter_and_the_Chamber_of_Secrets_UK_Poster.jpg/revision/latest/scale-to-width-down/681?cb=20150209181936"
}, {
    name: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    director: "Alfonso Cuarón",
    composer: "John Williams",
    screenwriter: "Steve Kloves",
    producers: "David Heyman, Chris Columbus and Mark Radcliffe",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20130803163319"
}, {
    name: "Harry Potter and the Goblet of Fire",
    year: 2005,
    director: "Mike Newell",
    composer: "Patrick Doyle",
    screenwriter: "Steve Kloves",
    producers: "David Heyman",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/2/2c/Goblet_of_Fire_Film_Poster.jpg/revision/latest/scale-to-width-down/666?cb=20140817011104"
}, {
    name: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    director: "David Yates",
    composer: "Nicholas Hooper",
    screenwriter: "Michael Goldenberg",
    producers: "David Heyman and David Barron",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg/revision/latest/scale-to-width-down/666?cb=20161002074140"
}, {
    name: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    director: "David Yates",
    composer: "Nicholas Hooper",
    screenwriter: "Steve Kloves",
    producers: "David Heyman and David Barron",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/4/45/Harry_and_Dumbledore_HBPF_promo.jpg/revision/latest/scale-to-width-down/673?cb=20141215114252"
}, {
    name: "Harry Potter and the Deathly Hallows – Part 1",
    year: 2010,
    director: "David Yates",
    composer: "Alexandre Desplat",
    screenwriter: "Steve Kloves",
    producers: "David Heyman, David Barron and J. K. Rowling",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/6/6b/DH1_poster_Trio_London_City_Hall.jpg/revision/latest/scale-to-width-down/666?cb=20151102033339"
}, {
    name: "Harry Potter and the Deathly Hallows – Part 2",
    year: 2011,
    director: "David Yates",
    composer: "Alexandre Desplat",
    screenwriter: "Steve Kloves",
    producers: "David Heyman, David Barron and J. K. Rowling",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/9/95/Harry_Potter_and_the_Deathly_Hallows_Part_2_promotional_poster.jpg/revision/latest/scale-to-width-down/667?cb=20130803164345"
}, {
    name: "Fantastic Beasts and Where to Find Them",
    year: 2016,
    director: "David Yates",
    composer: "James Newton Howard",
    screenwriter: "J. K. Rowling",
    producers: "David Heyman, J. K. Rowling, Steve Kloves and Lionel Wigram",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/0/01/FBWTFT_Poster.png/revision/latest/scale-to-width-down/1000?cb=20151215162644"
}, {
    name: "Fantastic Beasts: The Crimes of Grindelwald",
    year: 2018,
    director: "David Yates",
    composer: "James Newton Howard",
    screenwriter: "J. K. Rowling",
    producers: "David Heyman, David Barron and J. K. Rowling",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/7/7b/FBCOG_Theatrical_poster.jpg/revision/latest/scale-to-width-down/1000?cb=20210716154623"
}, {
    name: "Fantastic Beasts: The Secrets of Dumbledore",
    year: 2022,
    director: "David Yates",
    composer: "James Newton Howard",
    screenwriter: "Steve Kloves and J. K. Rowling",
    producers: "David Heyman, J. K. Rowling, Steve Kloves, Lionel Wigram and Tim Lewis",
    poster: "https://static.wikia.nocookie.net/harrypotter/images/8/86/Fantastic_Beasts_The_Secrets_of_Dumbledore.jpg/revision/latest/scale-to-width-down/1000?cb=20210922174338"
}];


const directors = new Set(hp_films.map(film => film.director));
const composers = new Set(hp_films.map(film => film.composer));
const producers = new Set(hp_films.map(film => film.producers));

function create_filter(name, list) {
    const filter = [`<select id=${name}>`];
    filter.push(`<option value="">Choose a ${name}</option>`);
    list.forEach(item => filter.push(`<option value="${item}">${item}</option>"`));
    filter.push("</select>");

    return filter.join("");
}

document.querySelector("#filters").innerHTML = `
                        ${create_filter("director", directors)}
                        ${create_filter("composer", composers)}
                        ${create_filter("producer", producers)}`;

function create_movie(movie) {
    const movie_brick = ["<div class='movie'>"];

    movie_brick.push(`<h4>${movie.name} (${movie.year})</h4>`);
    movie_brick.push(`<img src="${movie.poster}" alt="${movie.name} poster image" />`);
    movie_brick.push(`<p><strong>Director</strong>: ${movie.director}</p>`);
    movie_brick.push(`<p><strong>Screenwriter</strong>: ${movie.screenwriter}</p>`);
    movie_brick.push(`<p><strong>Composer</strong>: ${movie.composer}</p>`);
    movie_brick.push(`<p><strong>Producers</strong>: ${movie.producers}</p>`);


    movie_brick.push("</div>");

    return movie_brick.join("");
}


document.querySelector("#films").innerHTML = hp_films.map(film => create_movie(film)).join("");

document.querySelectorAll("#filters select").forEach(filter => {
    filter.addEventListener("change", filter_movies);
});

function filter_movies() {
    const director = document.querySelector("#director").value;
    const producer = document.querySelector("#producer").value;
    const composer = document.querySelector("#composer").value;
    
    let movie_list = hp_films;

    if(director) {
        movie_list = movie_list.filter(film => film.director === director);
    }

    if(producer) {
        movie_list = movie_list.filter(film => film.producers === producer);
    }

    if(composer) {
        movie_list = movie_list.filter(film => film.composer === composer);
    }
        
    document.querySelector("#films").innerHTML = movie_list.map(film => create_movie(film)).join("");

    }