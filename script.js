const menuBars = document.getElementById("menu-bars");
const navigation = document.getElementById("navigation");
const nav1 = document.getElementById("nav-link-1");
const nav2 = document.getElementById("nav-link-2");
const nav3 = document.getElementById("nav-link-3");
const nav4 = document.getElementById("nav-link-4");
const navItems = [nav1, nav2, nav3, nav4];

function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  menuBars.classList.toggle("change");
  navigation.classList.toggle("navigation-active");

  if (navigation.classList.contains("navigation-active")) {

    navigation.classList.replace(
      "navigation-display-none",
      "navigation-display"
    );
    navAnimation("out", "in");
  } else {
    navigation.classList.replace(
      "navigation-display",
      "navigation-display-none"
    );

    navAnimation("in", "out");
  }
}
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

// typing animation

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Front End Developer";
  }, 0); //1s = 1000 milliseconds
  setTimeout(() => {
    text.textContent = "UI/UX Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 8000);
  setTimeout(() => {
    text.textContent = "YouTuber";
  }, 12000);
  setTimeout(() => {
    text.textContent = "Freelancing";
  }, 16000);
};

textLoad();
setInterval(textLoad, 20000);
