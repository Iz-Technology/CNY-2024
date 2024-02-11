// Mendapatkan elemen latar belakang
const gradientBackground = document.querySelector(".gradient-background");

// Mengatur posisi awal latar belakang
let position = 0;

// Menggerakkan latar belakang secara dinamis
function moveBackground() {
  position++;
  gradientBackground.style.backgroundPosition = position + "px 50%";
  requestAnimationFrame(moveBackground);
}

// Memanggil fungsi untuk memulai animasi
moveBackground();

function tampilkanCek1() {
  document.getElementById("cek1").style.display = "block";
}
// Jalankan fungsi setelah 2 detik
setTimeout(tampilkanCek1, 2000);

function tampilkanCek2() {
  document.getElementById("cek2").style.display = "block";
}
// Jalankan fungsi setelah 4 detik
setTimeout(tampilkanCek2, 4000);

function tampilkanCek3() {
  document.getElementById("cek3").style.display = "block";
}

// Jalankan fungsi setelah 8 detik
setTimeout(tampilkanCek3, 8000);

function tampilkanCek4() {
  document.getElementById("cek4").style.display = "block";
}

// Jalankan fungsi setelah 12 detik
setTimeout(tampilkanCek4, 12000);

function tampilkanCek5() {
  document.getElementById("blinking-text").style.display = "block";
}

// Jalankan fungsi setelah 16 detik
setTimeout(tampilkanCek5, 16000);

function tampilkanCek6() {
  document.getElementById("cek6").style.display = "block";
}

// Jalankan fungsi setelah 17 detik
setTimeout(tampilkanCek6, 17000);

// Animasi muncul
window.onload = function () {
  document.getElementById("firework").style.opacity = "1";
};
