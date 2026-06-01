 const services = [
  { nama: "Haircut", harga: "50K - 100K", gambar: "gambar/haircut.jpg", kategori:["laki", "perempuan"], 
    deskripsi:"layanan pemotongan rambut menggunakan teknik tertentu (scissor cut, clipper, atau kombinasi) untuk merapikan dan membentuk rambut sesuai permintaan serta menyesuaikan dengan bentuk kepala."  },
  { nama: "Hair Styling", harga: "50K - 100K", gambar: "gambar/hairstyle.jpg", kategori:["laki", "perempuan"], 
    deskripsi:"proses menata rambut menggunakan teknik dan produk tertentu untuk menciptakan tampilan yang rapi, menarik, dan sesuai dengan gaya atau kebutuhan."  },
  { nama: "Shaving", harga: "30K - 80K", gambar: "gambar/shaving.jpg", kategori:["laki"], 
    deskripsi:"layanan pencukuran rambut halus pada wajah (kumis dan janggut) menggunakan alat seperti pisau cukur atau mesin, untuk menghasilkan tampilan bersih dan rapi." },
  { nama: "Triming", harga: "30K - 80K", gambar: "gambar/triming.jpg", kategori:["laki"], 
    deskripsi:"pemotongan ringan pada ujung rambut untuk merapikan, menghilangkan rambut bercabang, dan menjaga kesehatan rambut tanpa banyak mengubah panjang atau bentuk." },
  { nama: "Hair Spa", harga: "100K - 200K", gambar: "gambar/spa.jpg", kategori:["laki", "perempuan"], 
    deskripsi:"layanan perawatan rambut dan kulit kepala yang meliputi pembersihan, pemijatan, dan pemberian nutrisi untuk menjaga kesehatan rambut serta meningkatkan kelembapan dan kekuatan rambut." },
  { nama: "Coloring", harga: "50K - 150K", gambar: "gambar/color.jpg", kategori:["laki", "perempuan","anak"], 
    deskripsi:"layanan pewarnaan rambut menggunakan produk khusus untuk mengubah atau mempertegas warna rambut sesuai pilihan, baik secara keseluruhan maupun sebagian." },
  { nama: "Smooting", harga: "50K - 150K", gambar: "gambar/smothing.jpg", kategori:["laki", "perempuan","anak"], 
    deskripsi:"layanan pewarnaan rambut menggunakan produk khusus untuk mengubah atau mempertegas warna rambut sesuai pilihan, baik secara keseluruhan maupun sebagian." },
  { nama: "Kids Haircut", harga: "20K - 50K", gambar: "gambar/kids.jpg", kategori:["anak"], 
    deskripsi:"layanan potong rambut khusus untuk anak-anak dengan teknik yang disesuaikan agar aman, nyaman, dan menghasilkan model rambut yang rapi serta sesuai usia." }
];

// ambil container (cukup sekali!)
const bentuk = document.querySelector('.menu-cards');

// function tampilkan data
function tampilkanData(data) {
  bentuk.innerHTML = "";

  data.forEach(item => {
    bentuk.innerHTML += `
       <div class="menu-card">
          <img src="${item.gambar}" alt="${item.nama}" />
          <p class="price">${item.harga}</p>
          <p class="judul">${item.nama}</p>
        <p class="deskripsi">${item.deskripsi}</p>
        </div>
    `;
  });
}

// tampil awal
tampilkanData(services);

// filter
const buttons = document.querySelectorAll('.filter-buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      tampilkanData(services);
    } else {
      const hasil = services.filter(item => item.kategori.includes(filter));
      tampilkanData(hasil);
    }
  });
});


  function kirimWA() {
  const nama = prompt("Masukkan nama:");
  if (!nama) return;

  const layanan = prompt("Masukkan layanan:");
  if (!layanan) return;

  const noWa = "6285921686784";
  const pesan = `Halo, saya ${nama} ingin pesan ${layanan}`;

  const url = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
}

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
