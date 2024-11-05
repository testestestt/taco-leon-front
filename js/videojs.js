var player = videojs('paquete-1', {
    autoplay: false,
    loop: false,
    muted: true
});


// Add click event listener to the toggle element
document.querySelector('.toggle-video').addEventListener('click', function() {
    // Check if the video is currently playing
    if (!player.paused()) {
        player.pause(); // Pause the video
    }
});

document.querySelector('.cerrar-video-btn').addEventListener('click', function() {
    // Check if the video is currently playing
    if (!player.paused()) {
        player.pause(); // Pause the video
    }
});