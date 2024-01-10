const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');


searchButton.addEventListener('click', () => {
 
  const searchQuery = searchInput.value;


  const requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(searchQuery)}&key=AIzaSyCuMfoHylIlx139aUSuSkOrcraOUo1zgEA`;


  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      
      document.getElementById('results').innerHTML = '';

      data.items.forEach(item => {
        const videoTitle = item.snippet.title;
        const videoId = item.id.videoId;

        const videoBlock = document.createElement('div');
        const titleElement = document.createElement('h3');
        const linkElement = document.createElement('a');

        titleElement.textContent = videoTitle;
        linkElement.href = `https://www.youtube.com/watch?v=${videoId}`;
        linkElement.textContent = 'Смотреть видео';

        videoBlock.appendChild(titleElement);
        videoBlock.appendChild(linkElement);

        document.getElementById('results').appendChild(videoBlock);
      });
    })
    .catch(error => {
      console.error('Произошла ошибка при выполнении запроса:', error);
    });
});