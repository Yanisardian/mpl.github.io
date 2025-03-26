document.addEventListener("DOMContentLoaded", function() {
    alert("Selamat datang di Mahasiswa Peduli Lingkungan Universitas Hamzanwadi!");
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

