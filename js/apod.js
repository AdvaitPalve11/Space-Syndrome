// NASA APOD JavaScript

const API_KEY = 'DEMO_KEY'; // Using NASA's demo key - users should get their own from https://api.nasa.gov/
const API_URL = 'https://api.nasa.gov/planetary/apod';

const dateInput = document.getElementById('apod-date');
const loadBtn = document.getElementById('load-apod');
const loading = document.getElementById('loading');
const apodContent = document.getElementById('apod-content');
const errorMessage = document.getElementById('error-message');

const apodImage = document.getElementById('apod-image');
const apodVideo = document.getElementById('apod-video');
const apodTitle = document.getElementById('apod-title');
const apodDisplayDate = document.getElementById('apod-display-date');
const apodCopyright = document.getElementById('apod-copyright');
const apodExplanation = document.getElementById('apod-explanation');

// Set max date to today
const today = new Date().toISOString().split('T')[0];
dateInput.max = today;
dateInput.value = today;

// Load APOD on page load
window.addEventListener('DOMContentLoaded', () => {
    loadAPOD(today);
});

// Load APOD when button is clicked
loadBtn.addEventListener('click', () => {
    const selectedDate = dateInput.value;
    if (selectedDate) {
        loadAPOD(selectedDate);
    }
});

// Allow Enter key to load APOD
dateInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const selectedDate = dateInput.value;
        if (selectedDate) {
            loadAPOD(selectedDate);
        }
    }
});

async function loadAPOD(date) {
    // Hide content and error, show loading
    apodContent.classList.remove('active');
    errorMessage.classList.remove('active');
    loading.style.display = 'block';

    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}&date=${date}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch APOD');
        }

        const data = await response.json();
        displayAPOD(data);
    } catch (error) {
        console.error('Error fetching APOD:', error);
        loading.style.display = 'none';
        errorMessage.classList.add('active');
    }
}

function displayAPOD(data) {
    // Hide loading
    loading.style.display = 'none';

    // Set title and explanation
    apodTitle.textContent = data.title;
    apodDisplayDate.textContent = new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    apodExplanation.textContent = data.explanation;

    // Set copyright if available
    if (data.copyright) {
        apodCopyright.textContent = `© ${data.copyright}`;
        apodCopyright.style.display = 'block';
    } else {
        apodCopyright.style.display = 'none';
    }

    // Display image or video
    if (data.media_type === 'image') {
        apodImage.src = data.url;
        apodImage.style.display = 'block';
        apodVideo.style.display = 'none';
    } else if (data.media_type === 'video') {
        apodVideo.src = data.url;
        apodVideo.style.display = 'block';
        apodImage.style.display = 'none';
    }

    // Show content
    apodContent.classList.add('active');
}
