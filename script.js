// 1. Array of Partners
const partners = [
    {
        country: "France",
        university: "NDO French Academic Alliance – Knowledge Summit",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Rennes.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/10/IFA-logo.jpg"
    },
    {
        country: "Bhutan",
        university: "The Royal Thimpu College",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/Royal-Thimphu-College.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/Royal_Thimphu_College_logo.svg"
    },
    {
        country: "Malaysia",
        university: "Universiti Teknologi PETRONAS",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/Universiti-Teknologi-PETRONAS.png",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/12/UTP-logo.png"
    },
    {
        country: "South Korea",
        university: "George Mason University",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2025/07/George-Mason-University.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2025/07/George-Mason-University-logo.png"
    },
    {
        country: "UK",
        university: "Keele University",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/Keele-University-UK-1.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/keele-university.webp"
    },
    {
        country: "Germany",
        university: "Frankfurt School of Finance & Management",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/Frankfurt-School-of-Business-Management-Germany-1.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2026/02/Frankfurt-School.webp"
    },
    {
        country: "Malaysia",
        university: "TAR University of Management and Technology",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Tarumt.png",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/tarumt-logo.png"
    },
    {
        country: "Malaysia",
        university: "University Of Wollongong",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/University-Of-Wollongong.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2025/07/Uow-logo.png"
    },
    {
        country: "Sri Lanka",
        university: "NSBM Green University",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/NSBM-Green-University-photo.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/nsbm-logo.png"
    },
    {
        country: "France",
        university: "Rennes School of Business",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Rennes.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Rennes_School_of_Business1.png"
    },
    {
        country: "New Zealand",
        university: "Whitireia & WelTec",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Whiteireia-and-WelTech-buliding.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/whiteriaand-weltec-logo.png"
    },
    {
        country: "France",
        university: "Groupe KEDGE Business School",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Kedge.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/Groupe-KEDGE-Business-School.png"
    },
    {
        country: "UAE",
        university: "Global Business Studies",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/NSBM-Green-University-photo.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/images.png"
    },
    {
        country: "New Zealand",
        university: "ARA Institute of Canterbury",
        image: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/ARA-Institute-of-Canterbury-woolston_campus.jpg",
        logo: "https://www.jaipuria.ac.in/wp-content/uploads/2024/11/ARA.png"
    }
];

const initNavbarScroll = () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => navbar.classList.toggle('nav-scrolled', window.scrollY > 50));
};

const initTabs = () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset
            tabBtns.forEach(b => b.classList.remove('active', 'text-jaipuria-blue', 'border-jaipuria-accent'));
            tabBtns.forEach(b => b.classList.add('text-slate-400', 'border-transparent'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate
            btn.classList.add('active', 'text-jaipuria-blue', 'border-jaipuria-accent');
            btn.classList.remove('text-slate-400', 'border-transparent');
            document.getElementById(btn.dataset.tab)?.classList.add('active');
        });
    });
};

const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const statsContainer = document.querySelector('.glass-panel');
    if (!statsContainer) return;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 200; // Speed control

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    }, { threshold: 0.5 }).observe(statsContainer);
};

const renderPartners = () => {
    const container = document.getElementById("partnersContainer");
    if (!container) return;

    const grouped = partners.reduce((acc, p) => {
        (acc[p.country] ||= []).push(p);
        return acc;
    }, {});

    container.innerHTML = Object.entries(grouped).map(([country, items]) => `
        <div>
            <h3 class="text-2xl font-bold text-jaipuria-blue mb-8 flex items-center gap-2">${country}</h3>
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                ${items.map(p => `
                    <div class="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                        <div class="h-40 overflow-hidden">
                            <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        </div>
                        <div class="p-6 flex gap-4 items-center">
                            <div class="w-14 h-14 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                                <img src="${p.logo}" class="max-h-full max-w-full object-contain">
                            </div>
                            <div>
                                <h4 class="font-bold text-jaipuria-dark leading-tight">${p.university}</h4>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
};

const initLeadPopup = () => {
    const popup = document.getElementById("leadPopup");
    if (!popup) return;

    const togglePopup = (show) => popup.classList.toggle("hidden", !show);

    document.querySelectorAll(".openLeadPopup").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            togglePopup(true);
        });
    });

    document.getElementById("closeLeadPopup")?.addEventListener("click", () => togglePopup(false));
    popup.addEventListener("click", (e) => { if (e.target === popup) togglePopup(false); });
};

// ==========================================
// 3. INITIALIZER (Only function calls here)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initTabs();
    initCounters();
    renderPartners();
    initLeadPopup();
});