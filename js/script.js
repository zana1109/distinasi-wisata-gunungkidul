// Toggle navigasi pada klik hamburger
const navi = document.querySelector(".navi");
const menuHam = document.querySelector("#menu-ham");

menuHam.addEventListener("click", () => {
  navi.classList.toggle("active");
});

// Tutup navigasi jika klik di luar menu dan navi
document.addEventListener("click", (e) => {
  if (!menuHam.contains(e.target) && !navi.contains(e.target)) {
    navi.classList.remove("active");
  }
});

const form = document.getElementById("bukuTamuForm");
const daftarTamu = document.getElementById("daftarTamu");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;

  const li = document.createElement("li");
  li.textContent = `Nama: ${nama} | Alamat: ${alamat}`;
  daftarTamu.appendChild(li);

  form.reset();
});

const searchButton = dokument.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  navContent = document.getElementById("nav-ekstra");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("close-search");
  });
}
