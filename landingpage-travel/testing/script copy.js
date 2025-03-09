// Ambil elemen-elemen yang diperlukan
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // Indeks card yang aktif
const cardLength = cards.length;

// Fungsi untuk mengupdate tampilan card
function updateCards() {
    cards.forEach((card, index) => {
        // prev card
        if (index === currentIndex - 1) {
            card.style.zIndex = currentIndex + 1;
        }

        if (index === currentIndex) {
            card.classList.add("active"); // Card aktif
        } else if (index === currentIndex + 1) {
            card.classList.remove("active"); // Card berikutnya (terlihat sebagian)
        } else {
            card.classList.remove("active"); // Card lainnya (tidak terlihat)
        }
    });
}

function startCards() {
    cards.forEach((card, index) => {
        card.style.zIndex = cardLength - index;
    });
}

// Tombol "Next"
nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCards();
    }
});

// Tombol "Previous"
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
    }
});

// Inisialisasi awal
updateCards();
startCards();
