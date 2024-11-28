/* POUR UNE NAVIGATION PLUS SMOOTH */

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

/* PRISE EN CHARGE DU CAROUSEL*/

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
let currentIndex = 0;
function updateCarousel() {
    const slideWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex === items.length - 1) {
        currentIndex = 0; // Revenir au premier élément
    } else {
        currentIndex++;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = items.length - 1; // Revenir au dernier élément
    } else {
        currentIndex--;
    }
    updateCarousel();
});

// Responsive support: Recalculate slide positions on window resize
window.addEventListener('resize', updateCarousel);



// Récupérer les éléments de la modale et les boutons
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalRole = document.getElementById('modal-role');
const modalVideo = document.getElementById('modal-video');
const closeButton = document.querySelector('.close-btn');

// Liste des films avec titre, description, rôle, et URL de la vidéo
const films = [
    {
        title: 'Le dernier bain',
        description: 'Une histoire émouvante sur la quête de la liberté.',
        role: 'Mon rôle dans ce projet : réalisateur et monteur.',
        videoId: '1K_P15iD2MW_4Tb0oChRYUmu9OqmqKdUS' // ID de la vidéo sur Google Drive
    },
    {
        title: 'Autre projet',
        description: 'Un projet captivant mêlant suspense et mystère.',
        role: 'Mon rôle dans ce projet : scénariste et directeur artistique.',
        videoId: '2BCDE23456FgHIJKL78901' // ID de la vidéo sur Google Drive
    },
    {
        title: 'Projet Trois',
        description: 'Un thriller psychologique intense.',
        role: 'Mon rôle dans ce projet : monteur et compositeur.',
        videoId: '3CDEF34567FgHIJKL89012' // ID de la vidéo sur Google Drive
    }
];

// Ajouter un gestionnaire d'événements pour chaque image
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const film = films[index]; // Récupérer les détails du film associé
        modalTitle.textContent = film.title;
        modalDescription.textContent = film.description;
        modalRole.textContent = film.role;
        modalVideo.src = `https://drive.google.com/file/d/${film.videoId}/preview`; // URL de la vidéo Drive
        
        // Afficher la modale
        modal.style.display = 'flex';
    });
});

// Fonction pour fermer la modale
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.src = ''; // Arrêter la vidéo lorsque la modale est fermée
});

// Fermer la modale si l'utilisateur clique en dehors de celle-ci
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalVideo.src = ''; // Arrêter la vidéo si on clique en dehors de la modale
    }
});
