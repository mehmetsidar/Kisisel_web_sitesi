// Menü ikonunu seç ve 'menuIcon' değişkenine ata
let menuIcon = document.querySelector("#menu-icon");

// Navbar'ı seç ve 'navbar' değişkenine ata
let navbar = document.querySelector(".navbar");

// Menü ikonuna tıklama olayı ekle
menuIcon.onclick = () => {
    // Menü ikonuna 'bx-x' sınıfını ekle veya kaldır
    menuIcon.classList.toggle("bx-x");
    
    // Navbar'a 'active' sınıfını ekle veya kaldır
    navbar.classList.toggle("active");
};
