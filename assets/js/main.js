(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var menuBtn = document.getElementById("menu-btn");
  var mobileNav = document.getElementById("mobile-nav");

  /* ---- Header saat di-scroll ---- */
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu seluler ---- */
  function setMenu(open) {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    document.body.classList.toggle("menu-open", open);
    mobileNav.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });

    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuBtn.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  /* ---- Tab filter produk ---- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var grid = document.getElementById("product-grid");
  var cards = grid ? Array.prototype.slice.call(grid.querySelectorAll(".product-card")) : [];

  function filterProducts(value) {
    if (!grid) return;
    var shown = 0;
    cards.forEach(function (card) {
      var match = value === "all" || card.getAttribute("data-cat") === value;
      card.hidden = !match;
      if (match) shown += 1;
    });
    grid.classList.toggle("is-single", shown === 1);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (other) {
        var active = other === tab;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-selected", String(active));
      });
      filterProducts(tab.getAttribute("data-filter") || "all");
    });
  });

  /* ---- Scrollspy navigasi ---- */
  if (!("IntersectionObserver" in window)) return;

  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = navLinks
    .map(function (link) {
      var el = document.getElementById(link.getAttribute("data-nav"));
      return el ? { id: el.id, el: el } : null;
    })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var active = link.getAttribute("data-nav") === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if (sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section.el); });

    window.addEventListener("scroll", function () {
      if (window.scrollY < 120) setActive("beranda");
    }, { passive: true });
  }

  /* ---- Tahun footer ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
