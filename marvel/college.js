// On scroll, check if reveal sections are visible
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 120; // how early to reveal

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);