tailwind.config = {
    // 1. KÍCH HOẠT DARK MODE (Quan trọng: Dựa vào data-theme="dark")
    darkMode: ['class', '[data-theme="dark"]'],

    theme: {
        extend: {
            // 2. CẦU NỐI MÀU SẮC (Giữ nguyên ý tưởng của bạn)
            colors: {
                rustic: {
                    light: 'var(--light-mint)',   /* Xanh nhạt */
                    DEFAULT: 'var(--dark-green)', /* Xanh rừng già */
                    dark: 'var(--footer-bg)',     /* Nền tối */
                    green: 'var(--primary-mint)', /* Nút bấm (Mint) */
                    accent: 'var(--accent-gold)'  /* Vàng kim */
                }
            },
            
            // 3. FONT CHỮ
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                body: ['"Lora"', 'serif'],
            },

            // 4. HIỆU ỨNG ĐỘNG (Lấy từ index.html sang)
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}
