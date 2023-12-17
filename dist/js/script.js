// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const toTop = document.querySelector("#to-top");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark mode button
const darkToggle = document.querySelector(".theme-switch__checkbox");
const HTML = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    HTML.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    HTML.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Dark mode on load
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


// Mengirim pesan
const scriptURL = "https://script.google.com/macros/s/AKfycbxWLL-gKVJuHMp9Qn_XDMbuHi4CcEhQXiFeJIn1FUW18u22LXQYvDtq5jfK-4SvEgsC/exec";
const form = document.forms["maan-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ketika tombol submit diclick
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then((response) => {
    console.log("Success!", response);

    // tampilkan tombol kirim, hilangkan tombol loading
    btnLoading.classList.toggle("hidden");
    btnKirim.classList.toggle("hidden");

    // tampilkan alert
    const Toast = Swal.mixin({
      customClass: {
        container: "my-swal",
      },
      toast: true,
      width: 500,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Message has been sent",
    });
  });
  // reset
  form.reset().catch((error) => console.error("Error!", error.message));
});

// Animasi text
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Informatics Student";
  }, 0);

  setTimeout(() => {
    text.textContent = "Junior Developer";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Beginner";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
