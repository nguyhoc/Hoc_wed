// =========================
// HERO BUTTON
// =========================

const shopBtn =
document.getElementById("shopBtn");

shopBtn.addEventListener("click",()=>{

    shopBtn.innerText =
        "Đang chuyển...";

    shopBtn.style.transform =
        "scale(1.2)";

    setTimeout(()=>{

        shopBtn.innerText =
            "Mua Ngay";

        shopBtn.style.transform =
            "scale(1)";

    },1000);

});

// =========================
// CARD 3D EFFECT
// =========================

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            (x - rect.width / 2) / 15;

        const rotateX =
            -(y - rect.height / 2) / 15;

        card.style.transform = `
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
            scale(1.05)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
            "rotateY(0deg) rotateX(0deg)";
    });

});

// =========================
// PARTICLE SYSTEM
// =========================

const particlesContainer =
document.querySelector(".particles");

for(let i = 0; i < 80; i++){

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.width =
        particle.style.height =
        Math.random() * 6 + 4 + "px";

    particlesContainer.appendChild(particle);
}

// =========================
// MOUSE GLOW EFFECT
// =========================

document.addEventListener("mousemove",(e)=>{

    const glow =
        document.createElement("div");

    glow.style.position = "fixed";

    glow.style.left =
        e.clientX + "px";

    glow.style.top =
        e.clientY + "px";

    glow.style.width = "15px";
    glow.style.height = "15px";

    glow.style.borderRadius = "50%";

    glow.style.background = "cyan";

    glow.style.pointerEvents = "none";

    glow.style.boxShadow =
        "0 0 20px cyan";

    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.remove();

    },300);

});