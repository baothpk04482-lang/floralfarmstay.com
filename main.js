// 1. Xử lý Mobile Menu (Nút 3 gạch trên điện thoại)
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
            // Khi cuộn xuống: Hiện nền tối
            header.classList.remove('bg-transparent', 'p-4');
            header.classList.add('bg-rustic-dark', 'shadow-md', 'py-2');
        } else {
            // Khi ở đầu trang: Nền trong suốt
            header.classList.add('bg-transparent', 'p-4');
            header.classList.remove('bg-rustic-dark', 'shadow-md', 'py-2');
        }
    });
}

// 3. Xử lý Form đặt phòng (Chỉ chạy ở trang Contact)
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btnSubmit = this.querySelector('button');
        const originalText = btnSubmit.innerText;
        
        // Hiệu ứng đang gửi
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
