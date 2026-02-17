document.addEventListener('DOMContentLoaded', () => {
    const scrollers = document.querySelectorAll('.gallery-scroller');

    scrollers.forEach(slider => {
        const wrapper = slider.closest('.gallery-wrapper');
        const prevBtn = wrapper?.querySelector('.prev-btn');
        const nextBtn = wrapper?.querySelector('.next-btn');

        let animationId;
        let isPaused = false;
        let speed = 1; // Pixels per frame

        // Remove item cloning for seamless loop as requested (te ekch disude)

        const startScrolling = () => {
            if (isPaused) return;

            slider.scrollLeft += speed;

            // Reset to start when end is reached
            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                slider.scrollLeft = 0;
            }

            animationId = requestAnimationFrame(startScrolling);
        };

        const stopScrolling = () => {
            cancelAnimationFrame(animationId);
        };

        // Event Listeners
        wrapper.addEventListener('mouseenter', () => {
            isPaused = true;
            stopScrolling();
        });

        wrapper.addEventListener('mouseleave', () => {
            isPaused = false;
            startScrolling();
        });

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -400, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                slider.scrollBy({ left: 400, behavior: 'smooth' });
            });
        }

        // Handle Dragging
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            isPaused = true;
            stopScrolling();
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                slider.classList.remove('active');
                slider.style.cursor = 'pointer';
            }
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'pointer';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Touch events
        slider.addEventListener('touchstart', () => {
            isPaused = true;
            stopScrolling();
        }, { passive: true });

        slider.addEventListener('touchend', () => {
            // Delay resume slightly for better feel
            setTimeout(() => {
                if (!isPaused) startScrolling();
            }, 1000);
        }, { passive: true });

        // Initial Start
        // Wait for images to load to get correct scrollWidth
        window.addEventListener('load', () => {
            startScrolling();
        });

        // Immediate start attempt (in case load already fired)
        startScrolling();
    });
});
