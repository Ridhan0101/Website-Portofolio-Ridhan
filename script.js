document.addEventListener("DOMContentLoaded", function () {
    // Reveal Sections on Scroll
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
        backToTop.classList.toggle("show", window.scrollY > 300);
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    backToTop.addEventListener("mouseenter", function () {
        backToTop.style.transform = "scale(1.2)";
    });

    backToTop.addEventListener("mouseleave", function () {
        backToTop.style.transform = "scale(1)";
    });

    // Timeline Reveal on Scroll
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
    revealOnScroll();

    // Dynamic Date Display
    let dates = document.querySelectorAll(".date");
    let currentYear = new Date().getFullYear();

    dates.forEach((date) => {
        let eventYear = parseInt(date.getAttribute("data-year"));
        let yearsAgo = currentYear - eventYear;
        if (yearsAgo > 0) {
            date.innerHTML += ` (${yearsAgo} years ago)`;
        }
    });

    // Typed.js Effect
    if (document.getElementById("typed-text")) {
        new Typed("#typed-text", {
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
    }

    // Parallax Scrolling Effect
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let parallaxBg = document.querySelector(".parallax-bg");
        if (parallaxBg) {
            parallaxBg.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
        }
    });

    // Initialize AOS Library
    AOS.init();
});