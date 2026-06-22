/* ============================================================
   Portfolio interactions: theme, menu, scroll-spy, reveals
   ============================================================ */
(function () {
  "use strict";

  /* ---- Theme toggle (persisted, respects OS preference) ---- */
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = stored || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", initial);

  toggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---- Mobile menu ---- */
  const burger = document.getElementById("menuToggle");
  const links = document.querySelector(".nav__links");
  burger.addEventListener("click", function () {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Nav shadow + scroll-spy ---- */
  const nav = document.getElementById("nav");
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navAnchors = Array.from(document.querySelectorAll(".nav__links a"));

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 12);
    let current = "";
    const y = window.scrollY + 120;
    for (const sec of sections) {
      if (sec.offsetTop <= y) current = sec.id;
    }
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Footer year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
