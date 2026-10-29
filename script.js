// ==========================================
// Latihan 1: Mengubah teks dengan DOM
// ==========================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// ==========================================
// Latihan 2: Event Click
// ==========================================
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// ==========================================
// Latihan 3: Mengubah kelas dan gaya CSS
// ==========================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// ==========================================
// Latihan 4: Event input dan penghitung karakter
// ==========================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// ==========================================
// Latihan 5: Validasi Form Pendaftaran
// ==========================================
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
        pesanForm.style.color = "red";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
        pesanForm.style.color = "red";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
        pesanForm.style.color = "red";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        pesanForm.style.color = "green";
        form.reset();
    }
});

// ==========================================
// Latihan 6: Daftar tugas sederhana (To-do List)
// ==========================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        pesanTugas.style.color = "red";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai") 
            ? "Batalkan selesai" 
            : "Tandai selesai";
    });

    item.append(label, selesai);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    pesanTugas.style.color = "green";
    inputTugas.focus();
});

// ==========================================
// Mini Project: Form Pendaftaran Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const workshopNama = document.getElementById("workshopNama");
const sisaKarakter = document.getElementById("sisaKarakter");
const workshopEmail = document.getElementById("workshopEmail");
const workshopSesi = document.getElementById("workshopSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnReset = document.getElementById("btnReset");

// Fitur 1: Penghitung sisa karakter secara real-time
workshopNama.addEventListener("input", function () {
    const panjang = workshopNama.value.length;
    const sisa = 50 - panjang;
    sisaKarakter.textContent = sisa;
});

// Fitur 2: Validasi saat form disubmit
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = workshopNama.value.trim();
    const email = workshopEmail.value.trim();
    const sesi = workshopSesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanWorkshop.textContent = "Nama lengkap wajib diisi!";
        pesanWorkshop.style.color = "red";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Masukkan format email yang valid!";
        pesanWorkshop.style.color = "red";
    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih salah satu sesi workshop!";
        pesanWorkshop.style.color = "red";
    } else {
        pesanWorkshop.textContent = `Pendaftaran berhasil! Terima kasih ${nama}, Anda terdaftar pada ${sesi}.`;
        pesanWorkshop.style.color = "green";
        formWorkshop.reset();
        sisaKarakter.textContent = "50";
    }
});

// Fitur 3: Tombol reset membersihkan pesan
btnReset.addEventListener("click", function () {
    pesanWorkshop.textContent = "";
    sisaKarakter.textContent = "50";
});
const btnToggle = document.getElementById("btnToggle");
const teksEksperimen = document.getElementById("teksEksperimen");

btnToggle.addEventListener("click", function () {
    teksEksperimen.classList.toggle("sembunyi");
    
    // Mengubah teks pada tombol secara dinamis
    if (teksEksperimen.classList.contains("sembunyi")) {
        btnToggle.textContent = "Tampilkan Paragraf";
    } else {
        btnToggle.textContent = "Sembunyikan Paragraf";
    }
});


