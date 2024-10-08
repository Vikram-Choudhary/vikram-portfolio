document.getElementById("footerYear").innerHTML = new Date().getFullYear();

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navlink = document.querySelectorAll(".nav_link");
function linkAction() {
  document.getElementById("nav-menu").classList.remove("show-menu");
}
navlink.forEach((ele) => ele.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  const itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((ele) => {
  ele.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modelCloses = document.querySelectorAll(".services_modal_close");

const modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modal(index);
  });
});

modelCloses.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
const swiperPortfolio = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
const swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  spaceBetween: 48,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 2, spaceBetween: 30 },
  },
  keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY || window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 520) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Visitor Counter library functions
function trimTrailingSlash(string) {
  if (string != null) {
    return string.replace(/\/+$/, "");
  } else {
    return string;
  }
}
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };
}
ctrHref = trimTrailingSlash("https://www.free-counters.org/".trim());
ctrHref2 = trimTrailingSlash("https://www.free-counters.org/".trim());
eInDoc = function (e) {
  while ((e = e.parentNode)) {
    if (e == document) {
      return true;
    }
  }
  return false;
};
lCheck = function (l) {
  if (
    null != l &&
    null != l.getAttribute("href") &&
    (ctrHref === "" ||
      trimTrailingSlash(l.getAttribute("href").trim()) == ctrHref ||
      trimTrailingSlash(l.href.trim()) == ctrHref ||
      trimTrailingSlash(l.getAttribute("href").trim()) == ctrHref2 ||
      trimTrailingSlash(l.href.trim()) == ctrHref2)
  ) {
    return true;
  } else {
    return false;
  }
};
link_found = false;
window.onload = function () {
  els = document.getElementsByTagName("a");
  l = els.length;
  for (i = 0; i < l; i++) {
    el = els[i];
    if (
      trimTrailingSlash(el.href) === ctrHref ||
      trimTrailingSlash(el.getAttribute("href")) === ctrHref ||
      trimTrailingSlash(el.href) === ctrHref2 ||
      trimTrailingSlash(el.getAttribute("href")) === ctrHref2
    ) {
      link_found = true;
      break;
    }
  }
  if (link_found) {
    linkToHide = el;
    linkToHide.innerHTML = "";
  }
};

// Contact me form handler
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      const msgContainer = document.getElementById("contact-msg-container");
      const msgElement = document.getElementById("contact-msg");
      const contactForm = document.getElementById("contact-form");
      contactForm.style.display = "none";
      msgContainer.classList.add("contact_show_msg");
      msgContainer.scrollIntoView({ behavior: "smooth", block: "center" });
      msgElement.innerHTML = "Thank You!, Your submission has been received.";

      const iconElement = document.querySelector(".contact_form_success_icon");

      iconElement.addEventListener("animationend", function () {
        iconElement.classList.replace("uil-fast-mail", "uil-check-circle");
        iconElement.classList.add("pop-in");
      });
    })
    .catch((error) => alert(error));
});
