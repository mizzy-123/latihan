const element = document.querySelector(".dropdown-custom-field div");
const dropdown = document.querySelector(".dropdown-custom-field"); // Gunakan querySelector untuk elemen tunggal

dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    element.classList.toggle("hidden"); // Toggle class 'hidden'
});

const menuSidebar = document.getElementById("menu-icon");
const navbar = document.querySelector("header .navbar");
const navbarClose = document.getElementById("navbar-close");
const overlay = document.getElementById("overlay");
menuSidebar.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});

navbarClose.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});

const header = document.getElementById("header");

window.onscroll = () => {
    /* ==== sticky navbar ==== */
    header.classList.toggle("sticky", window.scrollY > 80);
};

const svgPaginationDown = document.querySelector(".pagination-down path");
const svgPaginationUp = document.querySelector(".pagination-up path");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");
const cards = document.querySelectorAll(".testimonial-group1-cardstack-card");

const contBullet = document.querySelector(
    ".testimonial-group1-grouptext-groupbullet"
);

let currentIndex = 0; // Indeks card yang aktif
const cardLength = cards.length;
let zIndexes = Array.from({ length: cardLength }, (_, i) => cardLength - i);

// Fungsi untuk mengupdate tampilan card
function updateCards() {
    let htmlBullet = [];

    cards.forEach((card, index) => {
        card.style.zIndex = zIndexes[index];

        if (index === currentIndex) {
            card.classList.add("active"); // Card aktif
        } else if (index === currentIndex + 1) {
            card.classList.remove("active"); // Card berikutnya (terlihat sebagian)
        } else {
            card.classList.remove("active"); // Card lainnya (tidak terlihat)
        }

        if (index === currentIndex) {
            htmlBullet.push(`<div
                class="testimonial-group1-grouptext-groupbullet-bullet active"
            ></div>`);
        } else {
            htmlBullet.push(`<div
                class="testimonial-group1-grouptext-groupbullet-bullet"
            ></div>`);
        }
    });

    contBullet.innerHTML = htmlBullet.join("");

    if (currentIndex === 0) {
        svgPaginationUp.setAttribute("stroke", "#bcb7c2");
        // svgPaginationUp.style.color = "#bcb7c2";
    } else {
        svgPaginationUp.setAttribute("stroke", "#3e2e4d");
        // svgPaginationUp.style.color = "#3e2e4d";
    }

    if (currentIndex === cards.length - 1) {
        svgPaginationDown.setAttribute("stroke", "#bcb7c2");
        // svgPaginationDown.style.color = "#bcb7c2";
    } else {
        svgPaginationDown.setAttribute("stroke", "#3e2e4d");
        // svgPaginationDown.style.color = "#3e2e4d";
    }
}

// Tombol "Next"
nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;

        // Pindahkan nilai terakhir ke paling depan (pop & unshift)
        zIndexes.unshift(zIndexes.pop());

        updateCards();
    }
});

// Tombol "Previous"
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;

        // Pindahkan nilai pertama ke paling belakang (shift & push)
        zIndexes.push(zIndexes.shift());

        updateCards();
    }
});

updateCards();
