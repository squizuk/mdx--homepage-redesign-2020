const showVideo = () => {

    const videoBox = document.querySelector('.spotlight__video');
    const videoOverlay = document.querySelector('.spotlight__video-overlay');

    const openVideo = () => {
        videoBox.classList.add('active');
        videoOverlay.classList.add('hidden');
    }

    const closeVideo = () => {
        videoBox.classList.remove('active');
        videoOverlay.classList.remove('hidden');
    }

    if (videoBox) {
        document.addEventListener('click', function (e) {
            if (e.target === videoOverlay) {
                openVideo();
            } else {
                closeVideo();
            }
        });
    }

}

showVideo();
