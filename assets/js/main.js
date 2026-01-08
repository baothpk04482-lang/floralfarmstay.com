/* ==========================================================================
   1. CẤU HÌNH DỮ LIỆU (NGÔN NGỮ & ẢNH)
   ========================================================================== */

// --- TỪ ĐIỂN ĐA NGÔN NGỮ ---
const translations = {
    vi: {
        home: "Trang Chủ",
        about: "Về Chúng Tôi",
        rooms: "Phòng Nghỉ",
        contact: "Liên Hệ",
        hero_subtitle: "TRỞ VỀ VỚI THIÊN NHIÊN",
        hero_title_prefix: "Tìm Thấy Sự Bình Yên Tại",
        hero_desc: "Nơi những giấc mơ hòa quyện cùng hương hoa và gió núi. Trải nghiệm không gian sống mộc mạc, đậm chất rustic.",
        btn_view_rooms: "Xem Phòng Nghỉ",
        btn_our_story: "Câu Chuyện Của Chúng Tôi",
        intro_label: "Giới thiệu",
        intro_title: "Chốn Bình Yên Giữa Lòng Đồi Núi",
        intro_p1: "Floral Farm không chỉ là một nơi để ngủ, mà là nơi để bạn \"trốn\" khỏi những ồn ào của phố thị. Được xây dựng hoàn toàn từ gỗ tái chế và đá tự nhiên.",
        intro_p2: "Thức dậy với tiếng chim hót, thưởng thức bữa sáng từ nông sản sạch ngay tại vườn, và thả hồn vào những trang sách bên lò sưởi ấm áp.",
        link_read_more: "Đọc thêm về chúng tôi →",
        letter_label: "Lời Nhắn Gửi",
        letter_title: "Gửi những tâm hồn đi lạc...",
        letter_p1: "\"Chào bạn, người đang tìm kiếm một khoảng lặng giữa những bộn bề.\"",
        letter_p2: "Floral Farm không được xây dựng bởi những kiến trúc sư lừng danh, mà được vun đắp từ đôi bàn tay của chúng mình. Từng thanh gỗ, viên đá ở đây đều thấm đẫm mồ hôi và cả những nụ cười.",
        letter_p3: "Ở đây không có sự xa hoa lộng lẫy, tivi màn hình lớn hay điều hòa hiện đại. Chỉ có tiếng gió reo qua đồi thông, mùi hương thảo mộc buổi sớm.",
        letter_sign: "Thân thương,",
        feat_nature: "Gần Gũi Thiên Nhiên", feat_nature_desc: "Bao quanh bởi rừng thông và vườn hoa.",
        feat_cafe: "Cafe & Trà Đạo", feat_cafe_desc: "Thưởng thức đồ uống organic tại chỗ.",
        feat_wifi: "Làm việc từ xa", feat_wifi_desc: "Wifi tốc độ cao phủ sóng toàn khu.",
        feat_bbq: "Tiệc BBQ Ngoài Trời", feat_bbq_desc: "Không gian ấm cúng cho buổi tối.",
        cta_title: "Sẵn sàng cho kỳ nghỉ trong mơ?",
        cta_desc: "Đặt phòng trực tiếp trên website để nhận ưu đãi giảm 10% và miễn phí bữa sáng.",
        btn_book_now: "Liên Hệ Đặt Phòng Ngay",
        footer_desc: "Nơi lưu giữ những khoảnh khắc bình yên bên người thân yêu. Thiết kế mộc mạc, dịch vụ tận tâm.",
        footer_info: "Thông Tin", footer_links: "Liên Kết Nhanh", footer_follow: "Theo Dõi & Ảnh",
        
        // --- Thêm cho trang About/Rooms nếu cần ---
        about_title: "Câu Chuyện Của Chúng Tôi",
        about_subtitle: "Từ những kẻ mộng mơ đến ngôi nhà giữa đồi thông.",
        story_heading: "Khởi Nguồn",
        story_p1: "Mọi chuyện bắt đầu từ một buổi chiều mưa tại Buôn Ma Thuột...",
        story_p2: "Floral Farm được xây dựng không phải để kinh doanh, mà để \"sống\"...",
        founder_sign: "Người sáng lập,"
    },
    en: {
        home: "Home",
        about: "About Us",
        rooms: "Rooms",
        contact: "Contact",
        hero_subtitle: "RETURN TO NATURE",
        hero_title_prefix: "Find Peace At",
        hero_desc: "Where dreams blend with the scent of flowers and mountain breezes. Experience a rustic living space, close to nature.",
        btn_view_rooms: "View Rooms",
        btn_our_story: "Our Story",
        intro_label: "Introduction",
        intro_title: "A Peaceful Sanctuary in the Hills",
        intro_p1: "Floral Farm is not just a place to sleep, but a place to \"escape\" from the hustle and bustle of the city. Built entirely from recycled wood and natural stone.",
        intro_p2: "Wake up to the sound of birds singing, enjoy breakfast with clean farm produce right in the garden.",
        link_read_more: "Read more about us →",
        letter_label: "A Message",
        letter_title: "To the wandering souls...",
        letter_p1: "\"Hello friend, who is looking for a moment of silence amidst the chaos.\"",
        letter_p2: "Floral Farm was not built by famous architects, but cultivated by our hands. Every piece of wood and stone here is soaked with sweat and smiles.",
        letter_p3: "There is no luxury here, no big screen TV. Only the sound of the wind blowing through the pine hills, the scent of herbs in the morning.",
        letter_sign: "Sincerely,",
        feat_nature: "Close to Nature", feat_nature_desc: "Surrounded by pine forests and flower gardens.",
        feat_cafe: "Cafe & Tea Ceremony", feat_cafe_desc: "Enjoy organic drinks on the spot.",
        feat_wifi: "Remote Work", feat_wifi_desc: "High-speed wifi everywhere.",
        feat_bbq: "Outdoor BBQ Party", feat_bbq_desc: "Cozy space for the evening.",
        cta_title: "Ready for a dream vacation?",
        cta_desc: "Book directly on the website to receive a 10% discount and free breakfast.",
        btn_book_now: "Book Now",
        footer_desc: "A place to keep peaceful moments with loved ones. Rustic design, dedicated service.",
        footer_info: "Information", footer_links: "Quick Links", footer_follow: "Follow & Gallery",
        
        about_title: "Our Story",
        about_subtitle: "From dreamers to a home in the pine hills.",
        story_heading: "The Beginning",
        story_p1: "It all started on a rainy afternoon in Buon Ma Thuot...",
        story_p2: "Floral Farm was built not for business, but for \"living\"...",
        founder_sign: "Founder,"
    }
};

// --- DỮ LIỆU ẢNH HERO SLIDER (Chỉ dùng cho Trang Chủ) ---
const desktopImages = [
    "https://i.postimg.cc/g2rDd6Vf/606904088-1209716744681231-7573283270574521907-n.jpg",
    "https://i.postimg.cc/rm2CSnv9/607494845-1209716761347896-4152868161469685704-n.jpg"
];

const mobileImages = [
    "https://i.postimg.cc/sxVYLBfB/607320541-1210238757962363-5985546279028599202-n.jpg",
    "https://i.postimg.cc/Z59rXzmL/609121565-1209716838014555-256155961891375062-n.jpg",
    "https://i.postimg.cc/0yLpsX2N/611279840-1210238724629033-2434186008574433375-n.jpg",
    "https://i.postimg.cc/25hn8dVs/612714590-1210238731295699-146407934579136084-n.jpg"
];

/* ==========================================================================
   2. LOGIC ĐỔI NGÔN NGỮ (I18N)
   ========================================================================== */
const langBtnDesktop = document.getElementById('lang-toggle');
const langBtnMobile = document.getElementById('lang-toggle-mobile');

function updateLangButtons(lang) {
    const text = lang === 'vi' ? 'EN' : 'VN';
    if (langBtnDesktop) langBtnDesktop.textContent = text;
    if (langBtnMobile) langBtnMobile.textContent = text;
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Tìm tất cả các thẻ có thuộc tính data-i18n để thay chữ
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    updateLangButtons(lang);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'vi';
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    
    localStorage.setItem('lang', newLang);
    applyLanguage(newLang);
}

// Gắn sự kiện click
if (langBtnDesktop) langBtnDesktop.addEventListener('click', toggleLanguage);
if (langBtnMobile) langBtnMobile.addEventListener('click', toggleLanguage);


/* ==========================================================================
   3. LOGIC MENU MOBILE (TRƯỢT MƯỢT MÀ)
   ========================================================================== */
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');

function toggleMenu() {
    if (!menuBtn || !menu) return;
    
    menuBtn.classList.toggle('active'); // Hiệu ứng xoay nút hamburger
    
    if (menu.classList.contains('translate-x-full')) {
        // Mở menu
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        if(overlay) overlay.classList.remove('hidden');
    } else {
        // Đóng menu
        menu.classList.add('translate-x-full');
        menu.classList.remove('translate-x-0');
        if(overlay) overlay.classList.add('hidden');
    }
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);


/* ==========================================================================
   4. LOGIC DARK MODE (THEME TOGGLE)
   ========================================================================== */
const themeBtnDesktop = document.getElementById('theme-toggle');
const themeBtnMobile = document.getElementById('theme-toggle-mobile');
const htmlTag = document.documentElement;

function updateThemeIcons(isDark) {
    const iconClass = isDark ? 'fa-sun' : 'fa-moon';
    // Cập nhật cả 2 nút (nếu tồn tại)
    if (themeBtnDesktop) themeBtnDesktop.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
    if (themeBtnMobile) themeBtnMobile.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
}

function toggleTheme() {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme === 'dark');
    
    // Trigger sự kiện cuộn để cập nhật màu header ngay lập tức
    window.dispatchEvent(new Event('scroll'));
}

if (themeBtnDesktop) themeBtnDesktop.addEventListener('click', toggleTheme);
if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);


/* ==========================================================================
   5. LOGIC HEADER (ĐỔI MÀU KHI CUỘN)
   ========================================================================== */
const header = document.getElementById('main-header');

if (header) {
    window.addEventListener('scroll', () => {
        // Kiểm tra xem có phải đang ở trang chủ (có hero slider) không
        const hasHero = document.getElementById('hero-bg-back'); 
        
        if (window.scrollY > 50) {
            // Khi cuộn xuống -> Header tối màu
            header.classList.remove('bg-transparent', 'p-4');
            header.classList.add('bg-rustic-dark', 'shadow-md', 'py-2', 'header-scrolled');
        } else {
            // Khi ở đầu trang -> Nếu có Hero Banner thì trong suốt, không thì vẫn tối
            if (hasHero) {
                header.classList.add('bg-transparent', 'p-4');
                header.classList.remove('bg-rustic-dark', 'shadow-md', 'py-2', 'header-scrolled');
            }
        }
    });
}


/* ==========================================================================
   6. LOGIC HERO SLIDER (CHỈ CHẠY Ở TRANG CHỦ)
   ========================================================================== */
const bgBack = document.getElementById('hero-bg-back');
const bgFront = document.getElementById('hero-bg-front');
let currentImageIndex = 0;

if (bgBack && bgFront) { // Chỉ chạy nếu tìm thấy ID (tức là đang ở trang chủ)
    function initHeroBackground() {
        const isMobile = window.innerWidth < 768;
        const images = isMobile ? mobileImages : desktopImages;
        
        // Đặt ảnh đầu tiên
        bgBack.style.backgroundImage = `url('${images[0]}')`;
        bgFront.style.opacity = '0';
    }

    function rotateHeroBackground() {
        const isMobile = window.innerWidth < 768;
        const images = isMobile ? mobileImages : desktopImages;
        
        // Tính chỉ số ảnh tiếp theo
        let nextIndex = currentImageIndex + 1;
        if (nextIndex >= images.length) nextIndex = 0;
        
        const nextImageUrl = images[nextIndex];
        
        // Hiệu ứng chuyển cảnh (Fade)
        bgFront.style.backgroundImage = `url('${nextImageUrl}')`;
        bgFront.style.opacity = '1';
        
        setTimeout(() => {
            bgBack.style.backgroundImage = `url('${nextImageUrl}')`;
            bgFront.style.opacity = '0';
            currentImageIndex = nextIndex;
        }, 1500); // Khớp với CSS transition opacity
    }

    // Khởi chạy
    initHeroBackground();
    setInterval(rotateHeroBackground, 5000); // 5 giây đổi ảnh 1 lần
    
    // Reset khi xoay màn hình
    window.addEventListener('resize', () => {
        currentImageIndex = 0;
        initHeroBackground();
    });
}


/* ==========================================================================
   7. FORM LIÊN HỆ (FAKE SUBMIT)
   ========================================================================== */
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btnSubmit = this.querySelector('button');
        const originalText = btnSubmit.innerText;
        
        btnSubmit.innerText = 'ĐANG GỬI...';
        btnSubmit.classList.add('opacity-75', 'cursor-not-allowed');
        
        setTimeout(() => {
            alert('Cảm ơn bạn! Yêu cầu đặt phòng đã được gửi thành công.\nChúng tôi sẽ liên hệ sớm nhất.');
            btnSubmit.innerText = originalText;
            btnSubmit.classList.remove('opacity-75', 'cursor-not-allowed');
            this.reset();
        }, 1500);
    });
}


/* ==========================================================================
   8. KHỞI TẠO (CHẠY KHI LOAD TRANG)
   ========================================================================== */
// Áp dụng Theme đã lưu
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlTag.setAttribute('data-theme', 'dark');
    updateThemeIcons(true);
}

// Áp dụng Ngôn ngữ đã lưu
const savedLang = localStorage.getItem('lang') || 'vi';
applyLanguage(savedLang);
