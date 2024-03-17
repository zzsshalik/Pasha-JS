const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value;

  fetchYouTubeData(searchQuery);
});

previousButton.addEventListener('click', function () {
  if (previousButton.disabled)
    return;

  setCurrentPage(page - 1);
});

nextButton.addEventListener('click', function () {
  if (nextButton.disabled)
    return;

  setCurrentPage(page + 1);
})

videosContainer.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains("favouriteButton")) {
    let id = event.target.getAttribute("data-id");
    
    if (hasFavoriteVideo(id)) {
      removeFavoriteVideo(id);
      event.target.textContent = "add";
      if (isfav)
        event.target.closest('.video-block').remove()
    } else {
      addFavoriteVideo(id);
      event.target.textContent = "remove";
    }
  }
});

function getFavoriteVideos() {
  const videos = localStorage.getItem("favoriteVideos");
  return videos ? JSON.parse(videos) : [];
}

function hasFavoriteVideo(video) {
  return getFavoriteVideos().some(x => x == video);
}

function addFavoriteVideo(video) {
  const videos = getFavoriteVideos();
  videos.push(video);
  localStorage.setItem("favoriteVideos", JSON.stringify(videos));
}

function removeFavoriteVideo(video) {
  const videos = getFavoriteVideos();
  const index = videos.indexOf(video);
  if (index !== -1) {
    videos.splice(index, 1);
    localStorage.setItem("favoriteVideos", JSON.stringify(videos));
  }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.style.overflow = 'auto';
    }, 3000);
});

searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const searchQuery = searchInput.value;
  
    fetchYouTubeData(searchQuery);
  }
});
searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value;

  fetchYouTubeData(searchQuery);
});
