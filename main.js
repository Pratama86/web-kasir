let items = [];  // Menyimpan daftar barang
let total = 0;   // Menyimpan total belanja
//klarasi Variabel:
//items adalah array kosong untuk menyimpan daftar barang yang ditambahkan.
//total menyimpan total harga belanjaan.

// Fungsi untuk menampilkan menu
function displayMenu() {
    console.log("Selamat datang di Sistem Kasir!");
    console.log("1. Tambahkan barang");
    console.log("2. Hitung total");
    console.log("3. Keluar");
}
//Fungsi displayMenu:
//Menampilkan menu dengan pilihan untuk menambah barang, menghitung total, atau keluar.

// Fungsi untuk menambahkan barang
function addItem() {
    let name = prompt("Masukkan nama barang: ");
    let price = parseFloat(prompt("Masukkan harga barang: "));
    
    // Validasi input harga
    if (isNaN(price) || price <= 0) {
        alert("Harga tidak valid. Harap masukkan harga yang benar.");
        return;
    }
    
    items.push({ name, price });
    total += price;
    alert("Barang berhasil ditambahkan!");
}
//Fungsi addItem:
//Meminta pengguna untuk memasukkan nama dan harga barang.
//Memvalidasi input harga (harus angka positif).
//Jika valid, barang ditambahkan ke items, dan total diperbarui.

// Fungsi untuk menghitung total dengan diskon
function calculateTotal() {
    if (items.length === 0) {
        alert("Tidak ada barang yang ditambahkan.");
        return;
    }

    // Cek apakah jumlah barang lebih dari 3 untuk diskon
    if (items.length > 3) {
        let discount = 0.1;  // Misalnya diskon 10%
        let discountAmount = total * discount;
        total -= discountAmount;
        alert("Anda mendapat diskon 10%!");
    }

    console.log("Total belanja Anda: Rp" + total);
    alert("Total belanja Anda: Rp" + total);
}

//Fungsi calculateTotal:

//Menghitung total belanja.
//Jika jumlah barang lebih dari 3, diberi diskon 10%.
//Menampilkan total belanja di konsol dan dengan alert.

// Program utama
function startCashierSystem() {
    let isRunning = true;
    
    while (isRunning) {
        displayMenu();
        
        let choice = prompt("Pilih menu{1/2/3}: ").trim();  // Trim untuk menghapus spasi di awal/akhir
        
        switch (choice) {
            case "1":
                addItem();
                break;
            case "2":
                calculateTotal();
                break;
            case "3":
                alert("Terima kasih telah menggunakan sistem kasir!");
                isRunning = false;
                break;
            default:
                alert("Pilihan tidak valid. Silakan pilih menu yang benar.");
                break;
        }
    }
}

// Jalankan sistem kasir
startCashierSystem();

//Fungsi startCashierSystem:
//Menjalankan menu dalam loop.
//Menggunakan switch untuk memilih menu berdasarkan input pengguna.
//Menyediakan opsi keluar dari sistem.
