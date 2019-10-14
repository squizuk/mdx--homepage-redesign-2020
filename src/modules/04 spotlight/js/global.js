const showVideo = () => {

    const videoBox = document.querySelector('.spotlight__video');
    const videoOverlay = document.querySelector('.spotlight__video-overlay');

    const openVideo = () => {
        videoBox.classList.add('active');
        videoOverlay.classList.add('hidden');
    }

    videoOverlay.addEventListener('click', function() {
        openVideo();
    })
}

showVideo();