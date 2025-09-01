const menu = [
  { nama: "Nanas (Single)", harga: 10000 },
  { nama: "Strawberry (Single)", harga: 10000 },
  { nama: "Blueberry (Single)", harga: 10000 },
  { nama: "Coklat (Single)", harga: 13000 },
  { nama: "Nanas (Double)", harga: 15000 },
  { nama: "Strawberry (Double)", harga: 15000 },
  { nama: "Blueberry (Double)", harga: 15000 },
  { nama: "Coklat (Double)", harga: 20000 },
  { nama: "Keju (Single)", harga: 13000 },
  { nama: "Coklat Kacang (Single)", harga: 13000 },
  { nama: "Coklat Keju (Single)", harga: 13000 },
  { nama: "Keju (Double)", harga: 22000 },
  { nama: "Coklat Kacang (Double)", harga: 22000 },
  { nama: "Coklat Keju (Double)", harga: 22000 },
  { nama: "Full Keju (Single)", harga: 15000 },
  { nama: "Tiramisu Chrunchy (Single)", harga: 15000 },
  { nama: "Choco Spread (Single)", harga: 15000 },
  { nama: "Choco Chrunchy (Single)", harga: 15000 }
];

// tampilkan daftar menu
function tampilkanDaftarMenu() {
  const daftarMenuContainer = document.getElementById("daftar-menu");
  daftarMenuContainer.innerHTML = "";

  menu.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <span class="menu-name">${item.nama}</span>
      <span class="menu-price">Rp${item.harga.toLocaleString("id-ID")}</span>
    `;

    daftarMenuContainer.appendChild(menuItem);
  });
}

// tampilkan form pesan sekarang
function tampilkanOrderMenu() {
  const orderMenuContainer = document.getElementById("order-menu");
  orderMenuContainer.innerHTML = "";

  menu.forEach((item, index) => {
    const orderItem = document.createElement("div");
    orderItem.classList.add("order-item");

    orderItem.innerHTML = `
      <label for="menu-${index}">${item.nama}</label>
      <input type="checkbox" id="menu-${index}" data-index="${index}">
      <input type="number" id="qty-${index}" min="1" value="1" data-index="${index}">
    `;

    orderMenuContainer.appendChild(orderItem);
  });

  // pasang event listener untuk checkbox & jumlah
  document.querySelectorAll("#order-menu input").forEach(input => {
    input.addEventListener("change", hitungTotal);
  });
}

// hitung total harga
function hitungTotal() {
  let total = 0;
  menu.forEach((item, index) => {
    const checkbox = document.getElementById(`menu-${index}`);
    const qty = document.getElementById(`qty-${index}`);
    if (checkbox && checkbox.checked) {
      total += item.harga * parseInt(qty.value || 1);
    }
  });

  document.getElementById("total-harga").textContent = 
    "Rp" + total.toLocaleString("id-ID");
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanDaftarMenu();
  tampilkanOrderMenu();
});
<script>
function kirimPesan() {
  let pesan = "Halo, saya mau pesan:\n";
  let total = 0;

  document.querySelectorAll(".menu-item").forEach(item => {
    let checkbox = item.querySelector("input[type='checkbox']");
    let qty = parseInt(item.querySelector("input[type='number']").value) || 0;
    let namaMenu = item.querySelector(".nama-menu").innerText;
    let harga = parseInt(item.dataset.harga) || 0;

    if (checkbox.checked && qty > 0) {
      pesan += `- ${namaMenu} x${qty} = Rp${harga * qty}\n`;
      total += harga * qty;
    }
  });

  pesan += `\nTotal: Rp${total.toLocaleString()}`;
  
  // Nomor WA tujuan (ganti dengan nomor kamu, format internasional tanpa +)
  let nomor = "6281234567890"; 

  // Buat link WA
  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  // Redirect ke WhatsApp
  window.open(url, "_blank");
}
</script>

<button onclick="kirimPesan()">Pesan</button>
