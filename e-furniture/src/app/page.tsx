export default function Home() {
  return (
    <div className="relative group w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300">
      {/* Background Overlay saat Hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

      {/* Gambar Produk */}
      <img
        src="https://source.unsplash.com/300x300/?shoes"
        alt="Product"
        className="w-full h-full object-cover"
      />

      {/* Tombol Add to Cart (Hidden by Default) */}
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
}
