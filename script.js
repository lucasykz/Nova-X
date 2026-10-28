/* ==================================================
   NOVA//X
   CYBER INTERFACE
================================================== */


/* ==================================================
   CURSOR
================================================== */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");


document.addEventListener("mousemove", (event) => {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";


    cursorRing.style.left =
        event.clientX + "px";

    cursorRing.style.top =
        event.clientY + "px";

});


/* ==================================================
   HOVER DOS LINKS
================================================== */

const links =
    document.querySelectorAll(
        "a, button"
    );


links.forEach((link) => {

    link.addEventListener(
        "mouseenter",
        () => {

            cursor.classList.add(
                "cursor-hover"
            );

            cursorRing.classList.add(
                "ring-hover"
            );

        }
    );


    link.addEventListener(
        "mouseleave",
        () => {

            cursor.classList.remove(
                "cursor-hover"
            );

            cursorRing.classList.remove(
                "ring-hover"
            );

        }
    );

});


/* ==================================================
   PARALLAX DO CORE
================================================== */

const orbital =
    document.querySelector(
        ".orbital-system"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        if (!orbital) return;


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 80;


        orbital.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* ==================================================
   MENU MOBILE
================================================== */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


const nav =
    document.querySelector(
        "nav"
    );


mobileMenu.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "mobile-open"
        );

    }
);


/* ==================================================
   CONTADOR DE SISTEMA
================================================== */

const metric =
    document.querySelector(
        ".metric-number"
    );


let value = 98.7;


setInterval(() => {

    value +=
        (Math.random() - 0.5) * 0.05;


    if (value > 99.2)
        value = 98.7;


    if (value < 98.4)
        value = 98.7;


    metric.innerHTML =
        value.toFixed(1) +
        "<small>%</small>";

}, 1200);


/* ==================================================
   DATA CARD
================================================== */

const dataPower =
    document.querySelector(
        ".data-bottom span:last-child"
    );


setInterval(() => {

    const power =
        (840 + Math.random() * 15)
            .toFixed(2);


    dataPower.textContent =
        power + " THz";

}, 1000);


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".system-card, .section-header, .network-copy, .contact-box"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    (element) => {

        observer.observe(
            element
        );

    }
);