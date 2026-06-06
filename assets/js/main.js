/* =========================================================================
   Bastion Watch — site interactions
   ========================================================================= */
(function () {
  "use strict";
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sticky header shadow ------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu toggle --------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  /* ---- Dropdowns (click on mobile, hover on desktop) ------------------ */
  var items = document.querySelectorAll(".nav-item");
  items.forEach(function (item) {
    var trigger = item.querySelector(".nav-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var isOpen = item.classList.contains("open");
      items.forEach(function (i) { i.classList.remove("open"); var t = i.querySelector(".nav-trigger"); if (t) t.setAttribute("aria-expanded", "false"); });
      if (!isOpen) { item.classList.add("open"); trigger.setAttribute("aria-expanded", "true"); }
    });
    if (window.matchMedia("(hover: hover)").matches) {
      item.addEventListener("mouseenter", function () { item.classList.add("open"); });
      item.addEventListener("mouseleave", function () { item.classList.remove("open"); });
    }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item")) items.forEach(function (i) { i.classList.remove("open"); });
  });

  /* ---- Scroll reveal --------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && !prefersReduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Count-up stats -------------------------------------------------- */
  var counters = document.querySelectorAll("[data-count]");
  var animateCount = function (el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    var dec = (el.getAttribute("data-dec") || "0") | 0;
    if (prefersReduced) { el.textContent = prefix + target.toFixed(dec) + suffix; return; }
    var start = null, dur = 1500;
    var tick = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length && "IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { animateCount(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- Animate savings bars on view ----------------------------------- */
  var savings = document.querySelector(".savings");
  if (savings && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.querySelectorAll(".fill").forEach(function (f) { f.style.width = f.getAttribute("data-w"); });
          so.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    so.observe(savings);
  }

  /* ---- ROI calculator -------------------------------------------------- */
  var calc = document.getElementById("roi");
  if (calc) {
    var fmt = function (n) { return "$" + Math.round(n).toLocaleString("en-US"); };
    var get = function (id) { return document.getElementById(id); };
    var sync = function (rangeId, numId) {
      var r = get(rangeId), n = get(numId);
      if (r && n) {
        r.addEventListener("input", function () { n.value = r.value; run(); });
        n.addEventListener("input", function () { r.value = n.value; run(); });
      }
    };
    var run = function () {
      var sites = +get("roi-sites").value || 1;
      var rate = +get("roi-rate").value || 0;
      var hours = +get("roi-hours").value || 0;
      var months = +get("roi-months").value || 1;
      var towerMo = +get("roi-tower").value || 1800;
      var guardMonthly = rate * hours * 30 * sites;
      var towerMonthly = towerMo * sites;
      var monthlySave = guardMonthly - towerMonthly;
      var totalSave = monthlySave * months;
      var pct = guardMonthly > 0 ? Math.round((1 - towerMonthly / guardMonthly) * 100) : 0;
      get("out-save").textContent = fmt(Math.max(totalSave, 0));
      get("out-guard").textContent = fmt(guardMonthly) + "/mo";
      get("out-tower").textContent = fmt(towerMonthly) + "/mo";
      get("out-monthly").textContent = fmt(Math.max(monthlySave, 0)) + "/mo";
      get("out-pct").textContent = Math.max(pct, 0) + "%";
      var gv = get("bar-guard"), tv = get("bar-tower");
      if (gv && tv) {
        var max = Math.max(guardMonthly, towerMonthly, 1);
        gv.style.width = (guardMonthly / max * 100) + "%";
        tv.style.width = (towerMonthly / max * 100) + "%";
        gv.textContent = fmt(guardMonthly);
        tv.textContent = fmt(towerMonthly);
      }
    };
    ["roi-sites:roi-sites-n","roi-rate:roi-rate-n","roi-hours:roi-hours-n","roi-months:roi-months-n","roi-tower:roi-tower-n"]
      .forEach(function (p) { var a = p.split(":"); sync(a[0], a[1]); });
    ["roi-sites","roi-rate","roi-hours","roi-months","roi-tower"].forEach(function (id) {
      var el = get(id); if (el) el.addEventListener("input", run);
    });
    run();
  }

  /* ---- Quote / contact form (placeholder, no backend) ----------------- */
  document.querySelectorAll("form[data-quote]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      /* TODO: wire to Formspree / CRM endpoint — set the form's action + method,
         or POST here to your webhook. For now we simulate success + redirect. */
      var btn = form.querySelector("[type=submit]");
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      setTimeout(function () { window.location.href = "thank-you.html"; }, 600);
    });
  });

  /* ---- Footer year ----------------------------------------------------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
