// Fungsi untuk mengambil nilai parameter dari URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Mengambil nilai parameter 'to' dari URL
const penerimaName = getQueryParameter('to');

// Mengubah nilai elemen dengan kelas 'penerima' jika parameter 'to' ada di URL
if (penerimaName) {
    document.querySelector('.penerima').textContent = penerimaName;
} else {
    document.querySelector('.penerima').textContent = "Tamu Undangan"; // Default text when 'to' is missing
}