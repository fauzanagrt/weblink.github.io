
const messages = [
    "😁 Tak Kenal Maka Tak Sayang 😁",
    "🔥 Jangan Lupa Follow,subscribe untuk Update Terbaru! 🔥",
    "📸 Kunjungi Instagram untuk kontak via DM! 📸",
    "▶️ nongkrong sambil nonton kunjungi youtube saya! ▶️",
    "💻 Lihat berbagai proyek open source di GitHub saya 💻",
    "🎶 Kunjungi Tiktok Untuk konten singkat,inspirasi! 🎶"
];

let index = 0;
function changeText() {
    let textElement = document.querySelector(".profile p");

    // Ganti teks
    index = (index + 1) % messages.length;
    textElement.innerHTML = messages[index];

    // Tambahkan kembali animasi
    textElement.classList.add("animate__zoomIn");
}

setInterval(changeText, 3000);
// Ganti teks setiap 3 detik

// animasi background perpindahan img ke img lain
var images = [
    'img/tt.png',
    'img/cc.png',
    'img/jj.png'
];
var currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Menambah indeks gambar dan kembali ke 0 setelah gambar terakhir
    document.getElementById('backgroundContainer').style.backgroundImage = 'url(' + images[currentIndex] + ')';
}

setInterval(changeBackground, 5000);
// 5 detik


