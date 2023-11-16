alert("Selamat datang! Silahkan pilih Bunga Terbaik Anda");
//* Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//* Ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
