document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MOBILE MENU LOGIC
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");

    let isMenuOpen = false;

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle("hidden", !isMenuOpen);

            if (isMenuOpen) {
                bar1.style.transform = "translateY(7px) rotate(45deg)";
                bar2.style.opacity = "0";
                bar3.style.transform = "translateY(-7px) rotate(-45deg)";
            } else {
                bar1.style.transform = "";
                bar2.style.opacity = "1";
                bar3.style.transform = "";
            }
        });
    }

    // ==========================================
    // 2. HERO SLIDER LOGIC
    // ==========================================
    const heroSlides = document.querySelectorAll("#heroSlider .slide");
    const heroNextBtn = document.getElementById("heroNextBtn");
    const heroPrevBtn = document.getElementById("heroPrevBtn");
    let heroCurrentIndex = 0;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextHeroSlide() {
        heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length;
        showHeroSlide(heroCurrentIndex);
    }

    function prevHeroSlide() {
        heroCurrentIndex = (heroCurrentIndex - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(heroCurrentIndex);
    }

    if (heroSlides.length > 0) {
        heroNextBtn?.addEventListener("click", nextHeroSlide);
        heroPrevBtn?.addEventListener("click", prevHeroSlide);
        setInterval(nextHeroSlide, 5000);
    }

    // ==========================================
    // 3. GLOBAL PARTNERS DATA & RENDER LOGIC
    // ==========================================
    const partners = [
        { country: "France", university: "NDO French Academic Alliance", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Rennes.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/10/IFA-logo.jpg" },
        { country: "Bhutan", university: "The Royal Thimpu College", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/Royal-Thimphu-College.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/Royal_Thimphu_College_logo.svg" },
        { country: "Malaysia", university: "Universiti Teknologi PETRONAS", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/Universiti-Teknologi-PETRONAS.png", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/UTP-logo.png" },
        { country: "South Korea", university: "George Mason University", image: "https://www.jaipuria.ac.in/wp-content/uploads/2025/07/George-Mason-University.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2025/07/George-Mason-University-logo.png" },
        { country: "UK", university: "Keele University", image: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/Keele-University-UK-1.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/keele-university.webp" },
        { country: "Germany", university: "Frankfurt School of Finance & Management", image: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/Frankfurt-School-of-Business-Management-Germany-1.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/Frankfurt-School.webp" },
        { country: "Malaysia", university: "TAR UMT", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Tarumt.png", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/tarumt-logo.png" },
        { country: "Malaysia", university: "University Of Wollongong", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/University-Of-Wollongong.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2025/07/Uow-logo.png" },
        { country: "Sri Lanka", university: "NSBM Green University", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/NSBM-Green-University-photo.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/nsbm-logo.png" },
        { country: "France", university: "Rennes School of Business", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Rennes.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Rennes_School_of_Business1.png" },
        { country: "New Zealand", university: "Whitireia & WelTec", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Whiteireia-and-WelTech-buliding.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/whiteriaand-weltec-logo.png" },
        { country: "France", university: "Groupe KEDGE Business School", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Kedge.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Groupe-KEDGE-Business-School.png" },
        { country: "UAE", university: "Global Business Studies", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/NSBM-Green-University-photo.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/images.png" },
        { country: "New Zealand", university: "ARA Institute of Canterbury", image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/ARA-Institute-of-Canterbury-woolston_campus.jpg", logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/ARA.png" }
    ];

    const regions = {
        europe: ['France', 'UK', 'Germany'],
        asia: ['Bhutan', 'Malaysia', 'South Korea', 'Sri Lanka', 'UAE'],
        oceania: ['New Zealand']
    };

    function createCardTemplate(partner) {
        return `
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full relative">
            <div class="h-44 overflow-hidden relative border-b border-gray-100">
                <img src="${partner.image}" alt="${partner.university}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div class="absolute top-[8.5rem] right-4 w-20 h-20 bg-white rounded-full p-2.5 shadow-lg border-2 border-gray-100 flex items-center justify-center z-10 transition-transform group-hover:-translate-y-1">
                <img src="${partner.logo}" alt="Logo" class="max-h-full max-w-full object-contain">
            </div>
            <div class="p-6 pt-10 flex-grow flex flex-col relative bg-white">
                <div class="flex-grow">
                    <h4 class="font-bold text-xl text-secondary mb-2 pr-4 leading-snug line-clamp-2">${partner.university}</h4>
                </div>
                <div class="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
                    <i class="fa-solid fa-location-dot text-accent text-sm"></i>
                    <p class="text-sm font-bold text-accent uppercase tracking-widest">${partner.country}</p>
                </div>
            </div>
        </div>
        `;
    }

    const europeGrid = document.getElementById('europe-grid');
    const asiaGrid = document.getElementById('asia-grid');
    const oceaniaGrid = document.getElementById('oceania-grid');

    if (europeGrid && asiaGrid && oceaniaGrid) {
        partners.forEach(partner => {
            const cardHTML = createCardTemplate(partner);
            if (regions.europe.includes(partner.country)) {
                europeGrid.innerHTML += cardHTML;
            } else if (regions.asia.includes(partner.country)) {
                asiaGrid.innerHTML += cardHTML;
            } else if (regions.oceania.includes(partner.country)) {
                oceaniaGrid.innerHTML += cardHTML;
            }
        });
    }

    // ==========================================
    // 4. GLOBAL TABS LOGIC
    // ==========================================
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remove active classes
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => {
                c.classList.remove("active", "block");
                c.classList.add("hidden");
            });

            // Add active class to clicked button and targeted content
            e.currentTarget.classList.add("active");
            const targetId = e.currentTarget.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.remove("hidden");
                targetContent.classList.add("active", "block");
            }
        });
    });

    // ==========================================
    // 5. OUTBOUND SLIDER LOGIC
    // ==========================================
    const outSlider = document.getElementById('outbound-slider');
    const outPrevBtn = document.getElementById('outPrevBtn');
    const outNextBtn = document.getElementById('outNextBtn');
    const outDots = document.querySelectorAll('.out-dot');
    let outCurrentIndex = 0;
    const outTotalSlides = 4;
    let outInterval;

    function updateOutboundSlider() {
        if (!outSlider) return;

        outSlider.style.transform = `translateX(-${outCurrentIndex * 100}%)`;

        outDots.forEach((dot, index) => {
            if (index === outCurrentIndex) {
                dot.className = "out-dot w-6 h-3 rounded-full bg-accent transition-all";
            } else {
                dot.className = "out-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all";
            }
        });
    }

    function nextOutboundSlide() {
        outCurrentIndex = (outCurrentIndex + 1) % outTotalSlides;
        updateOutboundSlider();
        resetOutboundPlay();
    }

    function prevOutboundSlide() {
        outCurrentIndex = (outCurrentIndex - 1 + outTotalSlides) % outTotalSlides;
        updateOutboundSlider();
        resetOutboundPlay();
    }

    function startOutboundPlay() {
        outInterval = setInterval(nextOutboundSlide, 5000);
    }

    function resetOutboundPlay() {
        clearInterval(outInterval);
        startOutboundPlay();
    }

    if (outSlider) {
        outNextBtn?.addEventListener("click", nextOutboundSlide);
        outPrevBtn?.addEventListener("click", prevOutboundSlide);

        outDots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                outCurrentIndex = parseInt(e.target.getAttribute("data-index"));
                updateOutboundSlider();
                resetOutboundPlay();
            });
        });

        startOutboundPlay();
        updateOutboundSlider();
    }

    // ==========================================
    // 6. TESTIMONIAL SLIDER LOGIC
    // ==========================================
    const testSlides = document.querySelectorAll('.testimonial-slide');
    const testPrevBtn = document.getElementById('testPrevBtn');
    const testNextBtn = document.getElementById('testNextBtn');
    let testCurrentIndex = 0;

    function showTestimonialSlide(index) {
        testSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextTestimonial() {
        testCurrentIndex = (testCurrentIndex + 1) % testSlides.length;
        showTestimonialSlide(testCurrentIndex);
    }

    function prevTestimonial() {
        testCurrentIndex = (testCurrentIndex - 1 + testSlides.length) % testSlides.length;
        showTestimonialSlide(testCurrentIndex);
    }

    if (testSlides.length > 0) {
        testNextBtn?.addEventListener("click", nextTestimonial);
        testPrevBtn?.addEventListener("click", prevTestimonial);
    }

});