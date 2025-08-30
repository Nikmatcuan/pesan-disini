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
      <input type="checkbox" id="menu-${index}" name="menu" value="${item.nama}">
      <input type="number" id="qty-${index}" name="qty-${index}" min="1" value="1">
    `;

    orderMenuContainer.appendChild(orderItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanDaftarMenu();
  tampilkanOrderMenu();
});
