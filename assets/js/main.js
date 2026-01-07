// 1. Xử lý Mobile Menu
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// 2. Xử lý đổi màu Header khi cuộn trang
const header = document.getElementById('main-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent', 'p-4');
            header.classList.add('bg-rustic-dark', 'shadow-md', 'py-2');
        } else {
            if (document.querySelector('.hero-bg')) {
                header.classList.add('bg-transparent', 'p-4');
                header.classList.remove('bg-rustic-dark', 'shadow-md', 'py-2');
            }
        }
    });
}

// 3. Xử lý Form đặt phòng
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btnSubmit = this.querySelector('button');
        const originalText = btnSubmit.innerText;
        btnSubmit.innerText = 'ĐANG GỬI...';
        btnSubmit.classList.add('opacity-75');
        
        setTimeout(() => {
            alert('Cảm ơn bạn! Yêu cầu đặt phòng đã được gửi thành công.\nChúng tôi sẽ liên hệ sớm nhất.');
            btnSubmit.innerText = originalText;
            btnSubmit.classList.remove('opacity-75');
            this.reset();
        }, 1500);
    });
}

// 4. XỬ LÝ ĐỔI THEME (CẢ MOBILE VÀ DESKTOP)
const themeBtnDesktop = document.getElementById('theme-toggle');
const themeBtnMobile = document.getElementById('theme-toggle-mobile');
const htmlTag = document.documentElement;

// Hàm cập nhật icon cho cả 2 nút cùng lúc
function updateThemeIcons(isDark) {
    const iconClass = isDark ? 'fa-sun' : 'fa-moon';
    // Update nút Desktop
    if (themeBtnDesktop) {
        themeBtnDesktop.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
    }
    // Update nút Mobile (Có thêm chữ)
    if (themeBtnMobile) {
        const text = isDark ? 'Giao diện Sáng' : 'Giao diện Tối';
        themeBtnMobile.innerHTML = `<span>${text}</span> <i class="fa-solid ${iconClass}"></i>`;
    }
}

// Hàm chuyển đổi theme
function toggleTheme() {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme === 'dark');
}

// Kiểm tra trạng thái cũ khi tải trang
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlTag.setAttribute('data-theme', 'dark');
    updateThemeIcons(true);
}

// Gắn sự kiện click cho cả 2 nút
if (themeBtnDesktop) themeBtnDesktop.addEventListener('click', toggleTheme);
if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);
