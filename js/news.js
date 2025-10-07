// Space News JavaScript

// Sample news data (in a real application, this would come from an API)
const newsData = [
    {
        id: 1,
        title: 'James Webb Space Telescope Discovers Most Distant Galaxy',
        category: 'discoveries',
        date: '2025-01-15',
        image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=250&fit=crop',
        excerpt: 'The James Webb Space Telescope has identified the most distant galaxy ever observed, providing insights into the early universe.'
    },
    {
        id: 2,
        title: 'NASA Announces New Mars Sample Return Mission Timeline',
        category: 'missions',
        date: '2025-01-14',
        image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&h=250&fit=crop',
        excerpt: 'NASA has updated the timeline for the Mars Sample Return mission, aiming to bring Martian samples to Earth by 2033.'
    },
    {
        id: 3,
        title: 'SpaceX Successfully Launches 60 Starlink Satellites',
        category: 'technology',
        date: '2025-01-13',
        image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=250&fit=crop',
        excerpt: 'SpaceX continues to expand its Starlink constellation with another successful launch of 60 satellites into orbit.'
    },
    {
        id: 4,
        title: 'Scientists Detect Water Vapor in Exoplanet Atmosphere',
        category: 'discoveries',
        date: '2025-01-12',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=250&fit=crop',
        excerpt: 'Astronomers have detected water vapor in the atmosphere of a distant exoplanet, raising hopes for potential habitability.'
    },
    {
        id: 5,
        title: 'China Plans Lunar Research Station by 2028',
        category: 'missions',
        date: '2025-01-11',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=250&fit=crop',
        excerpt: 'China\'s space agency announces ambitious plans to establish a permanent research station on the Moon within three years.'
    },
    {
        id: 6,
        title: 'New Study Reveals Insights into Black Hole Formation',
        category: 'discoveries',
        date: '2025-01-10',
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=250&fit=crop',
        excerpt: 'Groundbreaking research provides new understanding of how supermassive black holes form in the early universe.'
    },
    {
        id: 7,
        title: 'Artemis III Mission Sets New Moon Landing Date',
        category: 'missions',
        date: '2025-01-09',
        image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400&h=250&fit=crop',
        excerpt: 'NASA announces the target date for the Artemis III mission, which will return humans to the lunar surface.'
    },
    {
        id: 8,
        title: 'Revolutionary Ion Drive Technology Tested Successfully',
        category: 'technology',
        date: '2025-01-08',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
        excerpt: 'Engineers successfully test a new ion propulsion system that could revolutionize deep space exploration.'
    },
    {
        id: 9,
        title: 'Hubble Captures Stunning Image of Spiral Galaxy',
        category: 'discoveries',
        date: '2025-01-07',
        image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400&h=250&fit=crop',
        excerpt: 'The Hubble Space Telescope delivers a breathtaking new image of a distant spiral galaxy in unprecedented detail.'
    },
    {
        id: 10,
        title: 'ESA Launches Solar Observatory Mission',
        category: 'missions',
        date: '2025-01-06',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop',
        excerpt: 'The European Space Agency successfully launches a new solar observatory to study the Sun\'s activity and solar wind.'
    },
    {
        id: 11,
        title: 'Astronomers Map Dark Matter Distribution in Galaxy Cluster',
        category: 'discoveries',
        date: '2025-01-05',
        image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400&h=250&fit=crop',
        excerpt: 'Scientists create the most detailed map yet of dark matter distribution in a massive galaxy cluster.'
    },
    {
        id: 12,
        title: 'New Space Station Module Arrives at ISS',
        category: 'technology',
        date: '2025-01-04',
        image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=400&h=250&fit=crop',
        excerpt: 'A new research module successfully docks with the International Space Station, expanding its scientific capabilities.'
    }
];

const newsGrid = document.getElementById('news-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadingNews = document.getElementById('loading-news');

let currentFilter = 'all';

// Initialize news display
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadingNews.style.display = 'none';
        displayNews(newsData);
    }, 1000);
});

// Filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Get filter category
        currentFilter = button.getAttribute('data-category');
        
        // Filter and display news
        if (currentFilter === 'all') {
            displayNews(newsData);
        } else {
            const filteredNews = newsData.filter(article => article.category === currentFilter);
            displayNews(filteredNews);
        }
    });
});

function displayNews(articles) {
    newsGrid.innerHTML = '';
    
    if (articles.length === 0) {
        newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No articles found in this category.</p>';
        return;
    }
    
    articles.forEach(article => {
        const articleElement = createNewsArticle(article);
        newsGrid.appendChild(articleElement);
    });
}

function createNewsArticle(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'news-article';
    
    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    articleDiv.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="news-image" onerror="this.src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=250&fit=crop'">
        <div class="news-content">
            <span class="news-category">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</span>
            <h3>${article.title}</h3>
            <p class="news-date">${formattedDate}</p>
            <p class="news-excerpt">${article.excerpt}</p>
        </div>
    `;
    
    return articleDiv;
}
