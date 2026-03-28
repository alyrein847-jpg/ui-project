function scrollToSection() {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
}

function openModal(title, text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

let music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}