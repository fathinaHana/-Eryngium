//Data Menu Restoran
const menuRestoran = [
  { id: 1, nama: "Nasi Goreng Spesial", harga: 25000, kategori: "Makanan" },
  { id: 2, nama: "Mie Goreng Ayam", harga: 22000, kategori: "Makanan" },
  { id: 3, nama: "Es Teh Manis", harga: 5000, kategori: "Minuman" },
  { id: 4, nama: "Jus Jeruk", harga: 12000, kategori: "Minuman" }
];

console.log("=== DAFTAR MENU RESTORAN ===");
for (let item of menuRestoran) {
  console.log(`${item.id}. ${item.nama} - Rp ${item.harga.toLocaleString('id-ID')} (${item.kategori})`);
}

//Simulasi Pesanan
const pesananPelanggan = [
  { id: 1, jumlah: 2 }, // 2 Nasi Goreng Spesial
  { id: 3, jumlah: 3 }  // 3 Es Teh Manis
];

//Total Pesanan 
let totalHarga = 0;

console.log("\n=== RINCIAN PESANAN ANDA ===");

for (let pesanan of pesananPelanggan) {
  // Cari menu lewat ID
  const itemMenu = menuRestoran.find(m => m.id === pesanan.id);
  
  if (itemMenu) {
    const subtotal = itemMenu.harga * pesanan.jumlah;
    totalHarga += subtotal;
    
    console.log(`- ${itemMenu.nama} (x${pesanan.jumlah}) = Rp ${subtotal.toLocaleString('id-ID')}`);
  }
}

console.log("--------------------------------");
console.log(`TOTAL PEMBAYARAN: Rp ${totalHarga.toLocaleString('id-ID')}`);

//dalam ada for/while/do while
//          |   |      |
//          |   |      menu utama program
//          |   cek stok buku
//          tampilin daftar rak buku
//jadi kasir/perpustakaan/resto
