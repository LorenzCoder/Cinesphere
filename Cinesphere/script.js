// Beispielhafte Filminformationen (movies Array)
const movies = [
    {
        title: "Film 1",
        description: "Kurze Beschreibung von Film 1.",
        genre: "Drama, Sci-Fi",
        rating: "12",
        duration: "169 Minuten",
        schedule: [
            { date: "Heute", time: "19:15 (IMAX 2D, Englisch)" },
            { date: "Fr., 27.9.", time: "19:30 (IMAX 2D, Englisch)" },
            { date: "Sa., 28.9.", time: "16:00 (IMAX 2D, Englisch)" },
            { date: "So., 29.9.", time: "12:00 (IMAX 2D, Englisch)" }
        ]
    },
    {
        title: "Film 2",
        description: "Kurze Beschreibung von Film 2.",
        genre: "Action, Abenteuer",
        rating: "16",
        duration: "142 Minuten",
        schedule: [
            { date: "Heute", time: "20:00 (2D, Deutsch)" },
            { date: "Fr., 27.9.", time: "21:00 (2D, Deutsch)" },
            { date: "Sa., 28.9.", time: "18:00 (2D, Deutsch)" },
            { date: "So., 29.9.", time: "15:00 (2D, Deutsch)" }
        ]
    },
    // Weitere Filme hinzufügen...
];

// Banner und Filminformationen
const movieImages = document.querySelectorAll('.movie img');
const filmBanner = document.getElementById('film-banner');
const filmTitle = document.getElementById('film-title');
const filmDescription = document.getElementById('film-description');
const filmGenre = document.getElementById('film-genre');
const filmRating = document.getElementById('film-rating');
const filmDuration = document.getElementById('film-duration');

// Funktion zum Anzeigen des Banners mit Zoom-Hintergrund
movieImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        const selectedMovie = movies[index % movies.length]; // Wählt den Film basierend auf dem Klick aus

        // Banner mit den ausgewählten Filmdaten füllen
        filmTitle.innerText = selectedMovie.title;
        filmDescription.innerText = selectedMovie.description;
        filmGenre.innerText = `Genre: ${selectedMovie.genre}`;
        filmRating.innerText = `FSK: ${selectedMovie.rating}`;
        filmDuration.innerText = `Dauer: ${selectedMovie.duration}`;

        // Zeitplan einfügen
        const scheduleDiv = document.querySelector('.dates');
        scheduleDiv.innerHTML = ''; // Löscht vorherige Daten
        selectedMovie.schedule.forEach((scheduleItem) => {
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('date');
            dateDiv.innerHTML = `<p>${scheduleItem.date}</p><p>${scheduleItem.time}</p>`;
            scheduleDiv.appendChild(dateDiv);
        });

        // Setze das Hintergrundbild des Banners auf das ausgewählte Bild
        filmBanner.style.backgroundImage = `url(${img.src})`;

        // Banner unter dem geklickten Bild anzeigen
        filmBanner.style.display = 'block';
        filmBanner.classList.add('show');
        img.parentElement.after(filmBanner); // Platziert das Banner unter dem angeklickten Plakat

        // Scrollen zum Banner
        filmBanner.scrollIntoView({ behavior: 'smooth' });
    });
});

// Funktion zum Schließen des Banners
document.querySelector('.close-banner').addEventListener('click', () => {
    filmBanner.style.display = 'none';
    
    // Scrollen zur vorherigen Position (optional: kann entfernt werden, falls nicht gewünscht)
    window.scrollTo({
        top: 0, // Ändere dies zu einer spezifischen Position, wenn gewünscht
        behavior: 'smooth'
    });
});
