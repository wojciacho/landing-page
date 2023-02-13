const navMenu = document.querySelector(".navbar-list"),
  navOpenButton = document.querySelector(".open-btn"),
  navCloseButton = document.querySelector(".close-btn"),
  navbar = document.querySelector(".navbar"),
  findOutBtn = document.querySelector(".btn"),
  navbarList = document.querySelector(".navbar-list"),
  imgContainer = document.querySelector(".img-container");

const stickyNav = () => {
  const scrollY = window.scrollY;
  const offsetHeight = navbar.offsetHeight;

  if (scrollY > offsetHeight + 150) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

navOpenButton.addEventListener("click", () => {
  navMenu.classList.add("active");
  navOpenButton.classList.add("hide");
  document.body.classList.add("disabled-scroll");
});

navCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navOpenButton.classList.remove("hide");
  document.body.classList.remove("disabled-scroll");
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    const containerHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("sticky");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 72) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    navOpenButton.classList.remove("hide");
    navMenu.classList.remove("active");
    document.body.classList.remove("disabled-scroll");
  });
});

const products = document.querySelectorAll(".product-container");

window.addEventListener("scroll", () => {
  const height = (window.innerHeight / 5) * 4;
  products.forEach((product) => {
    const topProduct = product.getBoundingClientRect().top;
    if (topProduct < height) {
      product.classList.remove("xyz-out");
      product.classList.add("xyz-in");
      imgContainer.classList.remove("xyz-out");
      imgContainer.classList.add("xyz-in");
    } else {
      product.classList.remove("xyz-in");
      product.classList.add("xyz-out");
      imgContainer.classList.remove("xyz-in");
      imgContainer.classList.add("xyz-out");
    }
  });
});

window.addEventListener("scroll", stickyNav);
