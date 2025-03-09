// Ambil elemen-elemen yang diperlukan
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // Indeks card yang aktif
const cardLength = cards.length;
let zIndexes = Array.from({ length: cardLength }, (_, i) => cardLength - i);

// Fungsi untuk mengupdate tampilan card
function updateCards() {
    cards.forEach((card, index) => {
        card.style.zIndex = zIndexes[index];

        if (index === currentIndex) {
            card.classList.add("active"); // Card aktif
        } else if (index === currentIndex + 1) {
            card.classList.remove("active"); // Card berikutnya (terlihat sebagian)
        } else {
            card.classList.remove("active"); // Card lainnya (tidak terlihat)
        }
    });

    console.log("zIndex: ", zIndexes);
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

// Inisialisasi awal
updateCards();
