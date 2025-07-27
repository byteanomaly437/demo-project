// Ana JavaScript dosyası
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa yüklendi!');
    
    // Tarih bilgisini ekleyelim
    const footerDate = document.getElementById('current-year');
    if (footerDate) {
        footerDate.textContent = new Date().getFullYear();
    }
    
    // Basit bir animasyon
    const header = document.querySelector('header');
    if (header) {
        setTimeout(() => {
            header.classList.add('loaded');
        }, 300);
    }
    
    // Menü öğelerine tıklama olayı
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Sadece # bağlantıları için varsayılan davranışı engelle
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Bu sayfa henüz hazır değil!');
            }
            
            // Tüm menü öğelerinden current sınıfını kaldır
            menuItems.forEach(i => {
                i.parentElement.classList.remove('current');
            });
            
            // Tıklanan öğeye current sınıfını ekle
            this.parentElement.classList.add('current');
        });
    });
});
