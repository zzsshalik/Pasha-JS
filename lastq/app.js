const searchButton = document.getElementById('search-Button');
const searchInput = document.getElementById('search-barr');


searchButton.addEventListener('click', () => {
  
  const searchQuery = searchInput.value;

  const requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(searchQuery)}&key=AIzaSyCuMfoHylIlx139aUSuSkOrcraOUo1zgEA`;


  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
    
      document.getElementById('logo-container').innerHTML = '';


      data.items.forEach(item => {
        const videoTitle = item.snippet.title;
        const videoId = item.id.videoId;

        const videoBlock = document.createElement('div');
        const titleElement = document.createElement('h3');
        const linkElement = document.createElement('a');

        titleElement.textContent = videoTitle;
        linkElement.href = `https://www.youtube.com/watch?v=${videoId}`;
        linkElement.textContent = 'Watch the video';

        videoBlock.appendChild(titleElement);
        videoBlock.appendChild(linkElement);

        document.getElementById('logo-container').appendChild(videoBlock);
      });
    })
    .catch(error => {
      console.error('An error occurred while executing the request:', error);
    });
});