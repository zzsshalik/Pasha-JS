const apiKey = 'AIzaSyA9L2uVsp7jko2_5N2IGD-Aa2HgddgwctM';
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
const searchQuery = '';
const maxResults = 20;
const maxResultsPerPage = 6;
let page = 0;
let lastdata = [];

const videosContainer = document.getElementById('videos-container');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

async function fetchVideoFromId(id) {
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${id}`;

    return fetch(url).then(response => response.json())
}

async function fetchFavoriteData() {
    let videos = getFavoriteVideos();
    let videosData = await Promise.all(videos.map(x => fetchVideoFromId(x)));

    lastdata = {"items": [...videosData.filter(x => x.items.length > 0).map(x => x.items[0])]};
    displayVideos();        
    updateButtonsState();
}

function fetchYouTubeData(search) {
    const url = `${apiUrl}?key=${apiKey}&part=snippet&q=${searchQuery}&maxResults=${maxResults}${search ? `&q=${search}` : ""}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            lastdata = data;
            displayVideos();        
            updateButtonsState();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayVideos() {
    videosContainer.innerHTML = '';

    lastdata.items.slice(page * maxResultsPerPage, (page + 1) * maxResultsPerPage).forEach(video => {
        const videoTitle = video.snippet.title;
        const videoId = video.id.videoId || video.id;

        const videoBlock = document.createElement('div');
        videoBlock.classList.add('col-md-6', 'video-block');

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = videoTitle;
        iframe.width = '100%';
        iframe.height = '200';

        const titleElement = document.createElement('h5');
        titleElement.textContent = videoTitle;

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('favouriteButton');
        buttonElement.setAttribute('data-id', videoId);
        buttonElement.textContent = hasFavoriteVideo(videoId) ? "-" : "+";

        videoBlock.appendChild(iframe);
        videoBlock.appendChild(titleElement);
        videoBlock.appendChild(buttonElement);
        videosContainer.appendChild(videoBlock);
    });
}

function setCurrentPage(p) {
    page = p;
    displayVideos(lastdata.items);
    updateButtonsState();
}

function updateButtonsState() {
    previousButton.disabled = page == 0;
    nextButton.disabled = page == Math.floor(lastdata.items.length / maxResultsPerPage);
}
