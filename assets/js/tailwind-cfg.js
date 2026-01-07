tailwind.config = {
    theme: {
        extend: {
            colors: {
                /* ĐÂY LÀ CẦU NỐI QUAN TRỌNG */
                /* Chúng ta map các tên class cũ (rustic-...) vào các biến màu mới của style.css */
                rustic: {
                    light: 'var(--light-mint)',   /* Class cũ bg-rustic-light -> Sẽ thành màu Xanh nhạt mới */
                    DEFAULT: 'var(--dark-green)', /* Class cũ bg-rustic -> Sẽ thành màu Xanh rừng già */
                    dark: 'var(--footer-bg)',     /* Class cũ bg-rustic-dark -> Sẽ thành màu nền Footer tối */
                    green: 'var(--primary-mint)', /* Class cũ bg-rustic-green -> Sẽ thành màu Xanh Bạc Hà (Nút bấm) */
                    accent: 'var(--accent-gold)'  /* Class cũ text-rustic-accent -> Sẽ thành màu Vàng Kim */
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                body: ['"Lora"', 'serif'],
            }
        }
    }
}
