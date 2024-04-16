document.addEventListener("DOMContentLoaded", function() {
    const albumItems = document.querySelectorAll('.album-item');
    let currentVideo = null;
    
    // Fungsi untuk menghentikan video yang sedang diputar
    function stopAllVideosExcept(videoToKeepPlaying) {
        albumItems.forEach(function(albumItem) {
            const video = albumItem.querySelector('video');
            if (video !== videoToKeepPlaying) {
                video.pause();
            }
        });
    }
    
    // Fungsi untuk mengontrol pemutaran video dan audio pada setiap album
    function togglePlay(albumItem) {
        const video = albumItem.querySelector('video');
        const audio = albumItem.querySelector('audio');
        
        if (video.paused) {
            stopAllVideosExcept(video);
            currentVideo = video;
            video.play();
            audio.play(); // Mulai pemutaran audio bersamaan dengan video
        } else {
            video.pause();
            audio.pause(); // Jeda pemutaran audio bersamaan dengan video
        }
    }
    
    // Menambahkan event listener ke setiap tombol play/pause
    albumItems.forEach(function(albumItem) {
        const playBtn = albumItem.querySelector('.play-btn');
        
        playBtn.addEventListener('click', function() {
            togglePlay(albumItem);
        });
    });
});
