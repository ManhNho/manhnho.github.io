// Reveal-on-scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }
  },
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---- Blog: live search + tag filter + pagination (5 per page) ----
(() => {
  const results = document.getElementById("post-results");
  if (!results) return;

  const input = document.getElementById("blog-q");
  const pager = document.getElementById("pager");
  const noResults = document.getElementById("no-results");
  const meta = document.getElementById("results-meta");
  const activeFilter = document.getElementById("active-filter");
  const afTag = document.getElementById("af-tag");
  const afClear = document.getElementById("af-clear");
  const pageSize = parseInt(results.dataset.pagesize || "5", 10);
  const countSuffix = results.dataset.countSuffix || "posts";

  const cards = Array.from(results.querySelectorAll(".post-card")).map((el) => ({
    el,
    title: (el.dataset.title || "").toLowerCase(),
    tags: (el.dataset.tags || "").trim().toLowerCase().split(/\s+/).filter(Boolean),
  }));

  const state = { q: "", tag: "", page: 1 };

  function readURL() {
    const p = new URLSearchParams(location.search);
    state.q = p.get("q") || "";
    state.tag = p.get("tag") || "";
    state.page = Math.max(1, parseInt(p.get("page") || "1", 10) || 1);
    if (input) input.value = state.q;
  }

  function writeURL(push) {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.tag) p.set("tag", state.tag);
    if (state.page > 1) p.set("page", String(state.page));
    const qs = p.toString();
    const url = location.pathname + (qs ? "?" + qs : "");
    if (push) history.pushState(state, "", url);
    else history.replaceState(state, "", url);
  }

  function match(card) {
    if (state.tag && !card.tags.includes(state.tag)) return false;
    const q = state.q.trim().toLowerCase();
    if (!q) return true;
    if (q.startsWith("#")) {
      const t = q.slice(1);
      return card.tags.some((tag) => tag.includes(t));
    }
    return card.title.includes(q) || card.tags.some((tag) => tag.includes(q));
  }

  function render() {
    const filtered = cards.filter(match);
    const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (state.page > pages) state.page = pages;
    const start = (state.page - 1) * pageSize;

    cards.forEach((c) => (c.el.style.display = "none"));
    filtered.slice(start, start + pageSize).forEach((c) => (c.el.style.display = ""));

    noResults.hidden = filtered.length > 0;

    // active tag chip
    if (state.tag) {
      activeFilter.hidden = false;
      afTag.textContent = "#" + state.tag;
    } else {
      activeFilter.hidden = true;
    }

    // meta count (only while filtering/searching)
    if (state.q || state.tag) {
      meta.textContent = filtered.length + " " + countSuffix;
      meta.hidden = false;
    } else {
      meta.hidden = true;
    }

    // pager
    pager.innerHTML = "";
    if (pages > 1) {
      const mk = (label, page, opts = {}) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "page-btn" + (opts.active ? " active" : "");
        b.textContent = label;
        b.disabled = !!opts.disabled;
        if (!opts.disabled) b.addEventListener("click", () => go(page, true));
        pager.appendChild(b);
      };
      mk("‹", state.page - 1, { disabled: state.page === 1 });
      for (let i = 1; i <= pages; i++) mk(String(i), i, { active: i === state.page });
      mk("›", state.page + 1, { disabled: state.page === pages });
    }
  }

  function go(page, scroll) {
    state.page = page;
    writeURL(true);
    render();
    if (scroll) results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // events
  if (input) {
    input.addEventListener("input", () => {
      state.q = input.value;
      state.page = 1;
      writeURL(false);
      render();
    });
    // press "/" to focus search
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  results.addEventListener("click", (e) => {
    const tagBtn = e.target.closest(".tag[data-tag]");
    if (tagBtn) {
      e.preventDefault();
      state.tag = tagBtn.dataset.tag.toLowerCase();
      state.q = "";
      if (input) input.value = "";
      state.page = 1;
      writeURL(true);
      render();
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  if (afClear) {
    afClear.addEventListener("click", () => {
      state.tag = "";
      state.page = 1;
      writeURL(true);
      render();
    });
  }

  window.addEventListener("popstate", () => {
    readURL();
    render();
  });

  readURL();
  render();
})();

// Glitch any .glitch block while hovered / pressed (mirrors Synack Acropolis' JS toggle)
document.querySelectorAll(".glitch").forEach((glitch) => {
  const on = () => glitch.classList.add("is-glitching");
  const off = () => glitch.classList.remove("is-glitching");
  glitch.addEventListener("mouseenter", on);
  glitch.addEventListener("mouseleave", off);
  glitch.addEventListener("touchstart", on, { passive: true });
  glitch.addEventListener("touchend", off);
});

// ---- Lightbox: click a cert/recognition card to view its image (with glitch) ----
(() => {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const lbImg = document.getElementById("lb-img");
  const lbGlitch = box.querySelector(".lb-glitch");
  const layers = lbGlitch.querySelectorAll(".glitch__layer");
  const closeBtn = box.querySelector(".lightbox-close");
  let burst;

  function open(src) {
    if (!src) return;
    lbImg.src = src;
    // first two layers mirror the image for the RGB-split glitch; third is the red flash
    if (layers[0]) layers[0].style.backgroundImage = `url('${src}')`;
    if (layers[1]) layers[1].style.backgroundImage = `url('${src}')`;
    box.hidden = false;
    document.body.style.overflow = "hidden";
    // cool entrance glitch, then settle so the image is readable
    lbGlitch.classList.add("is-glitching");
    clearTimeout(burst);
    burst = setTimeout(() => lbGlitch.classList.remove("is-glitching"), 650);
  }
  function close() {
    box.hidden = true;
    document.body.style.overflow = "";
    lbImg.src = "";
  }

  // open on card click / keyboard, but let the "Verify" link navigate normally
  document.querySelectorAll("[data-img]").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".verify-link")) return;
      e.preventDefault();
      open(card.getAttribute("data-img"));
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest(".verify-link")) return;
        e.preventDefault();
        open(card.getAttribute("data-img"));
      }
    });
  });

  closeBtn.addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
})();
