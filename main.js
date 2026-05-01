// 1. Reusable Class for Opacity/Fade Sliders (Hero Slider)
class FadeSlider {
    constructor(slideSelector, prevBtnId, nextBtnId, interval = 5000) {
        this.slides = document.querySelectorAll(slideSelector);
        this.current = 0;
        this.intervalTime = interval;
        this.timer = null;

        if (!this.slides.length) return;

        document.getElementById(nextBtnId)?.addEventListener('click', () => {
            this.next();
            this.resetTimer();
        });
        document.getElementById(prevBtnId)?.addEventListener('click', () => {
            this.prev();
            this.resetTimer();
        });

        this.startTimer();
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    next() {
        this.current = (this.current + 1) % this.slides.length;
        this.showSlide(this.current);
    }

    prev() {
        this.current = (this.current - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.current);
    }

    startTimer() {
        if (this.intervalTime) {
            this.timer = setInterval(() => this.next(), this.intervalTime);
        }
    }

    resetTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.startTimer();
        }
    }
}

// 2. Reusable Class for Translate/Track Sliders with Dots (Global Learning Slider)
class TrackSlider {
    constructor(trackId, prevBtnId, nextBtnId, dotsContainerId, interval = 5000) {
        this.track = document.getElementById(trackId);
        if (!this.track) return;

        this.slides = this.track.children;
        this.total = this.slides.length;
        this.current = 0;
        this.dotsContainer = document.getElementById(dotsContainerId);
        this.intervalTime = interval;
        this.timer = null;

        this.initDots();

        document.getElementById(nextBtnId)?.addEventListener('click', () => {
            this.next();
            this.resetTimer();
        });
        document.getElementById(prevBtnId)?.addEventListener('click', () => {
            this.prev();
            this.resetTimer();
        });

        this.startTimer();
    }

    initDots() {
        if (!this.dotsContainer) return;
        for (let i = 0; i < this.total; i++) {
            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-accent w-6' : 'bg-gray-400 hover:bg-gray-600'}`;
            dot.addEventListener('click', () => {
                this.goToSlide(i);
                this.resetTimer(); // Dot click par bhi timer reset hoga
            });
            this.dotsContainer.appendChild(dot);
        }
    }

    updateDots() {
        if (!this.dotsContainer) return;
        Array.from(this.dotsContainer.children).forEach((dot, index) => {
            dot.className = index === this.current
                ? 'w-6 h-3 rounded-full transition-all duration-300 bg-accent'
                : 'w-3 h-3 rounded-full transition-all duration-300 bg-gray-400 hover:bg-gray-600';
        });
    }

    goToSlide(index) {
        this.current = index;
        this.track.style.transform = `translateX(-${this.current * 100}%)`;
        this.updateDots();
    }

    next() {
        this.goToSlide((this.current + 1) % this.total);
    }

    prev() {
        this.goToSlide((this.current - 1 + this.total) % this.total);
    }

    startTimer() {
        if (this.intervalTime) {
            this.timer = setInterval(() => this.next(), this.intervalTime);
        }
    }

    resetTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.startTimer();
        }
    }
}

// 3. Initialize cleanly
document.addEventListener('DOMContentLoaded', () => {
    new FadeSlider("#heroSlider .slide", "prevSlide", "nextSlide", 5000);
    new TrackSlider('gl-slider-track', 'gl-prev-btn', 'gl-next-btn', 'gl-dots-container', 5000);
});