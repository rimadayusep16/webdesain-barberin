const btn = document.getElementById("btnMenu");
const popup1 = document.getElementById("popupMenu");
const popup2 = document.getElementById("popupResult");
const overlay = document.getElementById("overlay");

const resultText = document.getElementById("resultText");
const imageContainer = document.getElementById("resultImages");

// gambar popup
const rekomendasi = {
  oval: {
    text: "Pompadour, Undercut, Slick Back",
    img: [
      "gambar/rekom/pompadour.jpg",
      "gambar/rekom/undercut.jpg",
      "gambar/rekom/slickback.jpg",
    ],
  },
  bulat: {
    text: "Fade + Volume Atas, Quiff",
    img: [
      "gambar/rekom/fade.jpg",
      "gambar/rekom/vol.jpg",
      "gambar/rekom/quiff.jpg",
    ],
  },
  kotak: {
    text: "Textured Crop, Side Part",
    img: [
      "gambar/rekom/texture.jpg",
      "gambar/rekom/sidepart.jpg",
      "gambar/rekom/quiff.jpg",
    ],
  },
  panjang: {
    text: "Fringe, Medium Length",
    img: [
      "gambar/rekom/fringe.jpg",
      "gambar/rekom/medium.jpg",
      "gambar/rekom/quiff.jpg",
    ],
  },
};

// buka popup pertama
btn.addEventListener("click", () => {
  popup1.classList.add("active");
  overlay.classList.add("active");
});

document.querySelectorAll("#popupMenu li").forEach((item) => {
  item.addEventListener("click", () => {
    const face = item.dataset.face;

    // isi text
    resultText.innerText = rekomendasi[face].text;

    // kosongkan gambar lama
    imageContainer.innerHTML = "";

    // loop gambar
    rekomendasi[face].img.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      imageContainer.appendChild(img);
    });

    // pindah popup
    popup1.classList.remove("active");
    popup2.classList.add("active");
  });
});

// tutup popup kedua
function closeResult() {
  popup2.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
  popup1.classList.remove("active");
  popup2.classList.remove("active");
  overlay.classList.remove("active");
});
