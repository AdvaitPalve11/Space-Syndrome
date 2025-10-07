// Planets JavaScript

const planetsData = {
    mercury: {
        name: 'Mercury',
        description: 'Mercury is the smallest planet in our solar system and the closest to the Sun. It has a rocky surface covered with craters, much like our Moon. Despite being closest to the Sun, it\'s not the hottest planet due to its lack of atmosphere.',
        diameter: '4,879 km',
        distance: '57.9 million km',
        orbit: '88 Earth days',
        day: '59 Earth days',
        moons: '0',
        temp: '-173°C to 427°C',
        visual: 'mercury-visual'
    },
    venus: {
        name: 'Venus',
        description: 'Venus is the second planet from the Sun and is often called Earth\'s "sister planet" due to similar size and mass. However, its thick atmosphere traps heat, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead.',
        diameter: '12,104 km',
        distance: '108.2 million km',
        orbit: '225 Earth days',
        day: '243 Earth days',
        moons: '0',
        temp: '462°C average',
        visual: 'venus-visual'
    },
    earth: {
        name: 'Earth',
        description: 'Earth is our home planet and the only known planet to support life. It has a unique atmosphere rich in oxygen and nitrogen, liquid water on its surface, and a protective magnetic field. About 71% of Earth\'s surface is covered by water.',
        diameter: '12,742 km',
        distance: '149.6 million km',
        orbit: '365.25 days',
        day: '24 hours',
        moons: '1',
        temp: '-88°C to 58°C',
        visual: 'earth-visual'
    },
    mars: {
        name: 'Mars',
        description: 'Mars, known as the Red Planet due to iron oxide on its surface, is the fourth planet from the Sun. It has the largest volcano in the solar system (Olympus Mons) and polar ice caps. Mars is currently being explored by rovers searching for signs of past life.',
        diameter: '6,779 km',
        distance: '227.9 million km',
        orbit: '687 Earth days',
        day: '24.6 hours',
        moons: '2 (Phobos, Deimos)',
        temp: '-87°C to -5°C',
        visual: 'mars-visual'
    },
    jupiter: {
        name: 'Jupiter',
        description: 'Jupiter is the largest planet in our solar system, a gas giant with a mass more than twice that of all other planets combined. Its most famous feature is the Great Red Spot, a giant storm larger than Earth that has been raging for hundreds of years.',
        diameter: '139,820 km',
        distance: '778.5 million km',
        orbit: '12 Earth years',
        day: '10 hours',
        moons: '95+ known moons',
        temp: '-108°C average',
        visual: 'jupiter-visual'
    },
    saturn: {
        name: 'Saturn',
        description: 'Saturn is best known for its spectacular ring system made of ice and rock particles. It\'s the second-largest planet in our solar system and a gas giant. Saturn is so light that it would float in water if there were an ocean large enough!',
        diameter: '116,460 km',
        distance: '1.4 billion km',
        orbit: '29 Earth years',
        day: '10.7 hours',
        moons: '146+ known moons',
        temp: '-138°C average',
        visual: 'saturn-visual'
    },
    uranus: {
        name: 'Uranus',
        description: 'Uranus is an ice giant that rotates on its side, likely due to a collision with another celestial body long ago. This unique tilt means its poles get more sunlight than its equator. Uranus has a blue-green color due to methane in its atmosphere.',
        diameter: '50,724 km',
        distance: '2.9 billion km',
        orbit: '84 Earth years',
        day: '17 hours',
        moons: '28 known moons',
        temp: '-195°C average',
        visual: 'uranus-visual'
    },
    neptune: {
        name: 'Neptune',
        description: 'Neptune is the farthest planet from the Sun and the windiest planet in our solar system, with wind speeds reaching up to 2,100 km/h. This ice giant has a deep blue color and was the first planet located through mathematical predictions rather than observation.',
        diameter: '49,244 km',
        distance: '4.5 billion km',
        orbit: '165 Earth years',
        day: '16 hours',
        moons: '16 known moons',
        temp: '-201°C average',
        visual: 'neptune-visual'
    }
};

// Modal elements
const modal = document.getElementById('planet-modal');
const modalClose = document.querySelector('.close');
const modalPlanetVisual = document.getElementById('modal-planet-visual');
const modalPlanetName = document.getElementById('modal-planet-name');
const modalPlanetDescription = document.getElementById('modal-planet-description');

// Get all planet info buttons
const planetButtons = document.querySelectorAll('.planet-info-btn');

// Add click event to each button
planetButtons.forEach(button => {
    button.addEventListener('click', () => {
        const planetName = button.getAttribute('data-planet');
        openPlanetModal(planetName);
    });
});

// Open modal with planet info
function openPlanetModal(planetName) {
    const planet = planetsData[planetName];
    
    if (!planet) return;

    // Set modal content
    modalPlanetName.textContent = planet.name;
    modalPlanetDescription.textContent = planet.description;
    
    // Set planet visual
    modalPlanetVisual.className = `planet-visual ${planet.visual}`;
    
    // Set stats
    document.getElementById('planet-diameter').textContent = planet.diameter;
    document.getElementById('planet-distance').textContent = planet.distance;
    document.getElementById('planet-orbit').textContent = planet.orbit;
    document.getElementById('planet-day').textContent = planet.day;
    document.getElementById('planet-moons').textContent = planet.moons;
    document.getElementById('planet-temp').textContent = planet.temp;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
