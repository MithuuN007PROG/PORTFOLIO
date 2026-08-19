/* =========================================================
   PRELOADER
========================================================= */

let loader = 0;

const loaderNumber =
document.getElementById("loaderNumber");

const loaderInterval =
setInterval(() => {

    loader += Math.floor(Math.random()*8)+2;

    if(loader >= 100){

        loader = 100;

        clearInterval(loaderInterval);

        setTimeout(() => {

            document
            .querySelector(".preloader")
            .classList.add("hide");

        },300);

    }

    loaderNumber.textContent =
    loader.toString().padStart(2,"0");

},70);


/* =========================================================
   CURSOR
========================================================= */

const cursor =
document.querySelector(".cursor");

document.addEventListener(
    "mousemove",
    e => {

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

        const glow =
        document.getElementById("glow");

        glow.style.left =
        (e.clientX - 250) + "px";

        glow.style.top =
        (e.clientY - 250) + "px";

    }
);


document.querySelectorAll("a,button").forEach(
    element => {

        element.addEventListener(
            "mouseenter",
            () => cursor.classList.add("big")
        );

        element.addEventListener(
            "mouseleave",
            () => cursor.classList.remove("big")
        );

    }
);


/* =========================================================
   TOPBAR
========================================================= */

const topbar =
document.querySelector(".topbar");

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 50){

            topbar.classList.add("scrolled");

        }else{

            topbar.classList.remove("scrolled");

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
    entries => {

        entries.forEach(
            entry => {

                if(entry.isIntersecting){

                    entry.target
                    .classList.add("visible");

                }

            }
        );

    },
    {
        threshold:.12
    }
);

revealElements.forEach(
    element =>
    revealObserver.observe(element)
);


/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".side-nav a");

const sectionObserver =
new IntersectionObserver(
    entries => {

        entries.forEach(
            entry => {

                if(entry.isIntersecting){

                    navLinks.forEach(
                        link =>
                        link.classList.remove("active")
                    );

                    const active =
                    document.querySelector(
                        `.side-nav a[href="#${entry.target.id}"]`
                    );

                    if(active){
                        active.classList.add("active");
                    }

                }

            }
        );

    },
    {
        threshold:.5
    }
);

sections.forEach(
    section =>
    sectionObserver.observe(section)
);


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY < window.innerHeight){

            heroImage.style.transform =
            `scale(1.05) translateY(${window.scrollY * .12}px)`;

        }

    }
);


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

document.querySelectorAll(".btn").forEach(
    button => {

        button.addEventListener(
            "mousemove",
            e => {

                const rect =
                button.getBoundingClientRect();

                const x =
                e.clientX -
                rect.left -
                rect.width/2;

                const y =
                e.clientY -
                rect.top -
                rect.height/2;

                button.style.transform =
                `translate(${x*.12}px,${y*.12}px)`;

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                "translate(0,0)";

            }
        );

    }
);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const stats =
document.querySelectorAll(".stat-number");

const statObserver =
new IntersectionObserver(
    entries => {

        entries.forEach(
            entry => {

                if(
                    entry.isIntersecting &&
                    !entry.target.dataset.done
                ){

                    entry.target.dataset.done =
                    "true";

                    const text =
                    entry.target.textContent;

                    const number =
                    parseInt(text);

                    let current = 0;

                    const interval =
                    setInterval(
                        () => {

                            current++;

                            entry.target.textContent =
                            current +
                            (text.includes("+") ? "+" : "");

                            if(current >= number){

                                clearInterval(interval);

                            }

                        },
                        80
                    );

                }

            }
        );

    },
    {
        threshold:.6
    }
);

stats.forEach(
    stat =>
    statObserver.observe(stat)
);


/* =========================================================
   TILT PROJECT IMAGES
========================================================= */

document.querySelectorAll(".project-image").forEach(
    image => {

        image.addEventListener(
            "mousemove",
            e => {

                const rect =
                image.getBoundingClientRect();

                const x =
                (e.clientX - rect.left) /
                rect.width;

                const y =
                (e.clientY - rect.top) /
                rect.height;

                const rotateX =
                (y-.5)*-5;

                const rotateY =
                (x-.5)*5;

                image.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

            }
        );

        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

            }
        );

    }
);
