const $ = (selector) => document.querySelector(selector);

const openGift = $("#openGift");
const intro = $(".intro");
const site = $("#siteContent");

openGift.addEventListener("click", () => {
  intro.classList.add("intro-leave");
  setTimeout(() => {
    intro.classList.add("hidden");
    site.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 350);
  confettiHearts();
});

function confettiHearts() {
  const symbols = ["♡", "✦", "✧", "♥"];
  for (let i = 0; i < 24; i++) {
    const item = document.createElement("span");
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.className = "confetti";
    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDelay = Math.random() * .8 + "s";
    item.style.fontSize = (12 + Math.random() * 20) + "px";
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 2600);
  }
}

const style = document.createElement("style");
style.textContent = `.intro-leave{opacity:0;transform:scale(.97);transition:.35s}.confetti{position:fixed;top:-30px;z-index:30;color:#d77e9d;pointer-events:none;animation:fall 2.4s ease-in forwards}@keyframes fall{to{transform:translateY(110vh) rotate(500deg);opacity:0}}`;
document.head.appendChild(style);

$("#mainLetter").textContent = siteContent.mainLetter;
const finalText = $("#finalMessage p:not(.script)");
if (finalText && siteContent.finalMessage) finalText.textContent = siteContent.finalMessage;

const gallery = $("#gallery");
siteContent.photos.forEach((photo, index) => {
  const figure = document.createElement("figure");
  figure.className = "polaroid";
  figure.style.setProperty("--tilt", `${[-2, 1.5, -1, 2, -1.5, 1][index % 6]}deg`);
  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.caption;
  img.loading = "lazy";
  img.onerror = () => {
    const placeholder = document.createElement("div");
    placeholder.className = "photo-placeholder";
    placeholder.textContent = "♡";
    img.replaceWith(placeholder);
  };
  const caption = document.createElement("figcaption");
  caption.textContent = photo.caption;
  figure.append(img, caption);
  figure.addEventListener("click", () => {
    if (img.isConnected) {
      $("#modalImage").src = photo.src;
      $("#modalCaption").textContent = photo.caption;
      $("#photoModal").classList.remove("hidden");
    }
  });
  gallery.appendChild(figure);
});
$("#memoryCount").textContent = String(siteContent.photos.length).padStart(2, "0");

const notesGrid = $("#notesGrid");
siteContent.notes.forEach((note) => {
  const button = document.createElement("button");
  button.className = "note-card";
  button.innerHTML = `<span class="envelope">✉</span><strong></strong><small>CLIQUE PARA ABRIR</small>`;
  button.querySelector("strong").textContent = note.title;
  button.addEventListener("click", () => {
    $("#noteTitle").textContent = note.title;
    $("#noteBody").textContent = note.body;
    $("#noteModal").classList.remove("hidden");
  });
  notesGrid.appendChild(button);
});

const reasonsGrid = $("#reasonsGrid");
siteContent.reasons.forEach((reason, index) => {
  const card = document.createElement("article");
  card.className = "reason";
  const number = document.createElement("b");
  number.textContent = String(index + 1).padStart(2, "0");
  const text = document.createElement("p");
  text.textContent = reason;
  card.append(number, text);
  reasonsGrid.appendChild(card);
});

$("#presentButton").addEventListener("click", () => {
  $("#finalMessage").classList.remove("hidden");
  $("#presentButton").classList.add("opened");
  $("#presentButton").disabled = true;
  confettiHearts();
});

function closeModal(modal) { modal.classList.add("hidden"); }
$("#closePhoto").addEventListener("click", () => closeModal($("#photoModal")));
$("#closeNote").addEventListener("click", () => closeModal($("#noteModal")));
["photoModal", "noteModal"].forEach(id => {
  const modal = document.getElementById(id);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(modal); });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal($("#photoModal"));
    closeModal($("#noteModal"));
  }
});

const music = $("#backgroundMusic");
const musicToggle = $("#musicToggle");
let musicPlaying = false;
musicToggle.addEventListener("click", async () => {
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      musicToggle.innerHTML = "♫ <span>pausar</span>";
    } catch {
      alert("Adicione um arquivo chamado musica.mp3 na pasta assets/audio para ativar a música.");
    }
  } else {
    music.pause();
    musicPlaying = false;
    musicToggle.innerHTML = "♫ <span>música</span>";
  }
});
