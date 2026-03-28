function scrollToSection() {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
}

function openModal(title, text, videoSrc) {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const modalVideoSource = document.getElementById("modal-video-source");

  modal.style.display = "flex";
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;

  modalVideoSource.src = videoSrc;
  modalVideo.load();
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");

  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
}

let music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}