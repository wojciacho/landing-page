const navMenu = document.querySelector(".navbar-list"),
  navOpenButton = document.querySelector(".open-btn"),
  navCloseButton = document.querySelector(".close-btn"),
  navbar = document.querySelector(".navbar"),
  findOutBtn = document.querySelector(".btn"),
  navbarList = document.querySelector(".navbar-list"),
  imgContainer = document.querySelector(".img-container"),
  products = document.querySelectorAll(".product-wrapper"),
  scrollLinks = document.querySelectorAll(".scroll-link"),
  productBtn = document.querySelectorAll(".product-btn"),
  payment = document.querySelector(".payment"),
  arrivals = document.querySelector(".arrivals-container"),
  modalClose = document.querySelector(".close");

const closeModal = () => {
  payment.classList.remove("visible");
};

const modal = () => {
  payment.innerHTML = `
  <h2 class="payment-title">Personal Information</h2>
  <label>Name</label>
  <input type="text" placeholder="John Doe" class="payment-input">
  <label>Phone</label>
  <input type="text" placeholder="+111 111 1111" class="payment-input">
  <label>Address</label>
  <input type="text" placeholder="Main Street" class="payment-input">
  <h2 class="payment-title">Card Information</h2>
  <div class="card-icon">
    <img src="./img/visa.png" width="40" alt="" class="card-img">
    <img src="./img/master.png" width="40" alt="" class="card-img">
  </div>
  <input type="password" class="payment-input" placeholder="Card Number">
  <div class="card-info">
    <input type="text" class="payment-input sm" placeholder="mm">
    <input type="text" class="payment-input sm" placeholder="yyyy">
    <input type="text" class="payment-input sm" placeholder="cvv">
  </div>
  <button class="payment-button" onclick="closeModal()">Checkout</button>
  <div class="close" onclick="closeModal()">
    <i class="fas fa-times"></i>
  </div>
`;
  arrivals.appendChild(payment);
};

productBtn.forEach((button) =>
  button.addEventListener("click", () => {
    payment.classList.add("visible");
    modal();
  })
);

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
