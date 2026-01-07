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
            // Chỉ áp dụng trong suốt cho trang chủ (index.html)
            // Các trang khác header luôn tối nên ta check xem có class hero-bg không
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

// 4. XỬ LÝ NÚT ĐỔI THEME SÁNG/TỐI (MỚI)
const themeBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement; // Thẻ <html>

// Kiểm tra xem người dùng đã từng chọn dark mode chưa
if (localStorage.getItem('theme') === 'dark') {
    htmlTag.setAttribute('data-theme', 'dark');
    if(themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // Chuyển sang Sáng
            htmlTag.setAttribute('data-theme', 'light');
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('theme', 'light'); // Lưu lại lựa chọn
        } else {
            // Chuyển sang Tối
            htmlTag.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('theme', 'dark'); // Lưu lại lựa chọn
        }
    });
}
