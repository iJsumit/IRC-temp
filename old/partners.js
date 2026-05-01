// 1. Array of Partners
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

// 2. Region Classification Setup
const regions = {
    europe: ['France', 'UK', 'Germany'],
    asia: ['Bhutan', 'Malaysia', 'South Korea', 'Sri Lanka', 'UAE'],
    oceania: ['New Zealand']
};

// 3. Reusable Card Generator Function
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

// 4. Render Data to Grid
document.addEventListener("DOMContentLoaded", () => {
    const europeGrid = document.getElementById('europe-grid');
    const asiaGrid = document.getElementById('asia-grid');
    const oceaniaGrid = document.getElementById('oceania-grid');

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
});

// 5. Simple Tab Control Function (Keep this if you don't already have one)
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("block");
        tabcontent[i].classList.add("hidden");
    }

    // Remove active class from buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show current tab and add active class
    document.getElementById(tabName).classList.remove("hidden");
    document.getElementById(tabName).classList.add("block");
    evt.currentTarget.classList.add("active");
}