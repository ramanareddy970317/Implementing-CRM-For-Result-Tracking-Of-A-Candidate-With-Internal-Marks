const videoUpload = document.getElementById('videoUpload');
const videoPlayer = document.getElementById('videoPlayer');

videoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
    videoPlayer.load();
  }
});
