document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

function revealSections() {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}
document.addEventListener("scroll", revealSections);

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const backToTop = document.getElementById("backToTop");


    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    backToTop.addEventListener("mouseenter", function() {
        backToTop.style.transform = "scale(1.2)";
    });
    backToTop.addEventListener("mouseleave", function() {
        backToTop.style.transform = "scale(1)";
    });
    
});
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealOnScroll() {
        let scrollPosition = window.innerHeight;
        timelineItems.forEach((item) => {
            let position = item.getBoundingClientRect().top;
            if (position < scrollPosition - 50) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Panggil langsung agar elemen yang terlihat langsung muncul
});
document.addEventListener("DOMContentLoaded", function () {
    let dates = document.querySelectorAll(".date");
    let currentYear = new Date().getFullYear();

    dates.forEach((date) => {
        let eventYear = parseInt(date.getAttribute("data-year"));
        let yearsAgo = currentYear - eventYear;
        if (yearsAgo > 0) {
            date.innerHTML += ` (${yearsAgo} years ago)`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Efek Typed.js untuk teks dinamis
    var typed = new Typed("#typed-text", {
        strings: [
            "Fresh Graduate Informatics Engineering",
            "Web Developer &amp; Data Mining Enthusiast",
            "Experienced in Laravel &amp; CodeIgniter",
            "Skilled in Python (Streamlit, Flask)",
            "Database Management: MySQL, Oracle, MongoDB",
            "Data Mining: Apriori Algorithm &amp; ARIMA",
            "Internship at PT Dirgantara Indonesia",
            "HRD Staff at Fasilkom Science Community"
        ],
        typeSpeed: 40,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true
    });

    // Efek Parallax Scrolling
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.querySelector(".parallax-bg").style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });
});

AOS.init();

