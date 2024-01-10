const apiKey = 'AIzaSyCuMfoHylIlx139aUSuSkOrcraOUo1zgEA';
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
const searchQuery = '';
const maxResults = 6;

const videosContainer = document.getElementById('videos-container');

function fetchYouTubeData() {
    const url = `${apiUrl}?key=${apiKey}&part=snippet&q=${searchQuery}&maxResults=${maxResults}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayVideos(data.items);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayVideos(videos) {
    videosContainer.innerHTML = '';

    videos.forEach(video => {
        const videoTitle = video.snippet.title;
        const videoId = video.id.videoId;

        const videoBlock = document.createElement('div');
        videoBlock.classList.add('col-md-6', 'video-block');

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = videoTitle;
        iframe.width = '100%';
        iframe.height = '200';

        const titleElement = document.createElement('h5');
        titleElement.textContent = videoTitle;
        titleElement.style.padding = '10px';
        titleElement.style.margin = '0';
        titleElement.style.overflow = 'hidden';
        titleElement.style.textOverflow = 'ellipsis';
        titleElement.style.whiteSpace = 'nowrap';

        videoBlock.appendChild(iframe);
        videoBlock.appendChild(titleElement);
        videosContainer.appendChild(videoBlock);
    });
}

fetchYouTubeData();