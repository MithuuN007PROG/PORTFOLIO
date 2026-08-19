const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const target = btn.dataset.tab;

        panels.forEach(panel => {
            panel.classList.toggle("active", panel.dataset.panel === target);
        });

    });
});


const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {

            const match = filter === "all" || card.dataset.category === filter;

            card.style.display = match ? "" : "none";

        });

    });
});


const bars = document.querySelectorAll(".bar-fill");

const barObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const level = entry.target.dataset.level;

            entry.target.style.width = level + "%";

            barObserver.unobserve(entry.target);

        }

    });

}, { threshold: .4 });

bars.forEach(bar => barObserver.observe(bar));


const contactForm = document.querySelector(".contact-card form");

if (contactForm) {

    contactForm.addEventListener("submit", e => {

        const inputs = contactForm.querySelectorAll("[required]");

        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) valid = false;
        });

        if (!valid) {
            e.preventDefault();
        }

    });

}
