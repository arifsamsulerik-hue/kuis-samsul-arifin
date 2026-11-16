
const menus = ["Welcome", "Data Diri", "Galeri"];

const menuElement = document.getElementById("menu");
const content = document.getElementById("content");

// Membuat menu dengan looping
menus.forEach((menu, index) => {
    const link = document.createElement("a");

    link.href = "#" + index;
    link.textContent = menu;

    link.onclick = () => tampilkanHalaman(index);

    menuElement.appendChild(link);
});

function tampilkanHalaman(halaman) {
    const links = document.querySelectorAll("nav a");

    links.forEach((link, index) => {
        link.classList.toggle("active", index === halaman);
    });

    if (halaman === 0) {
        content.innerHTML = `
            <h2>Welcome Page</h2>
            <div class="card">
                <h3>Selamat Datang!</h3>
                <p>
                    Selamat datang di website pribadi saya.
                    Website ini dibuat menggunakan HTML, CSS,
                    JavaScript dan looping.
                </p>
            </div>
        `;
    }

    else if (halaman === 1) {
        const nama = "samsul arifin";

        const hobi = [
            "Membaca",
            "Bermain Game",
            "Olahraga",
            "Fotografi"
        ];

        let daftarHobi = "";

        hobi.forEach(item => {
            daftarHobi += `<li>${item}</li>`;
        });

        content.innerHTML = `
            <h2>Data Diri</h2>
            <div class="card">
                <h3>Nama: ${nama}</h3>
                <h3>Hobi Saya:</h3>
                <ul>${daftarHobi}</ul>
            </div>
        `;
    }

    else if (halaman === 2) {
        const galeri = [
            "https://picsum.photos/id/1015/400/300",
            "https://picsum.photos/id/1016/400/300",
            "https://picsum.photos/id/1018/400/300",
            "https://picsum.photos/id/1020/400/300",
            "https://picsum.photos/id/1024/400/300",
            "https://picsum.photos/id/1035/400/300"
        ];

        let gambar = "";

        galeri.forEach(foto => {
            gambar += `
                <div>
                    <img src="${foto}" alt="Foto Galeri">
                </div>
            `;
        });

        content.innerHTML = `
            <h2>Galeri Foto</h2>
            <div class="gallery">${gambar}</div>
        `;
    }
}

// Membaca halaman dari URL
function bacaURL() {
    const halaman = Number(location.hash.replace("#", ""));

    if (halaman >= 0 && halaman < menus.length) {
        tampilkanHalaman(halaman);
    } else {
        tampilkanHalaman(0);
    }
}

window.addEventListener("hashchange", bacaURL);
bacaURL();
