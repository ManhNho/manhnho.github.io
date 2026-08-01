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

// ---- POV gallery: show a random subset each load (static site, client-side random) ----
(() => {
  const g = document.getElementById("pov-gallery");
  if (!g) return;
  let all = [];
  try { all = JSON.parse(g.dataset.images) || []; } catch (e) { all = []; }
  const DEFAULT = Math.min(parseInt(g.dataset.count || "5", 10), all.length) || 5;
  const input = document.getElementById("pov-count");

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function clamp(n) { return Math.max(1, Math.min(all.length, n)); }
  function render(n) {
    const pick = shuffle(all).slice(0, n);
    g.innerHTML = "";
    pick.forEach((src, i) => {
      const id = String(i + 1).padStart(2, "0");
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "pov-tile";
      tile.setAttribute("data-img", src);
      tile.setAttribute("aria-label", "POV " + id);
      tile.style.animationDelay = (i * 0.05).toFixed(2) + "s";
      tile.innerHTML =
        '<img src="' + src + '" alt="POV ' + id + '" loading="lazy">' +
        '<span class="pov-frame" aria-hidden="true"></span>' +
        '<span class="pov-idx mono">' + id + '</span>' +
        '<span class="pov-meta mono">POV_' + id + '<span class="pov-open">OPEN &#9656;</span></span>';
      g.appendChild(tile);
    });
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function reset() {
    if (input) input.value = pad(DEFAULT);
    render(DEFAULT);
  }

  // typing a number re-renders that many; F5 (fresh load) and Shuffle reset to default
  if (input) {
    input.addEventListener("input", () => {
      const digits = input.value.replace(/\D/g, "").slice(0, 3);
      if (input.value !== digits) input.value = digits;
      if (!digits) return; // wait for a valid number
      render(clamp(parseInt(digits, 10)));
    });
    input.addEventListener("blur", () => {
      const n = clamp(parseInt(input.value, 10) || DEFAULT);
      input.value = pad(n);
      render(n);
    });
  }
  const btn = document.getElementById("pov-shuffle");
  if (btn) btn.addEventListener("click", reset);

  reset();
})();

// ---- Lightbox: click a cert/recognition/gallery image to view it (with glitch) ----
(() => {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const lbImg = document.getElementById("lb-img");
  const lbGlitch = box.querySelector(".lb-glitch");
  const layers = lbGlitch.querySelectorAll(".glitch__layer");
  const closeBtn = box.querySelector(".lightbox-close");
  const prevBtn = document.getElementById("lb-prev");
  const nextBtn = document.getElementById("lb-next");
  const counter = document.getElementById("lb-counter");
  let burst;
  let imgs = [];
  let idx = 0;

  function parseImgs(raw) {
    if (!raw) return [];
    if (raw[0] === "[") { try { const a = JSON.parse(raw); return Array.isArray(a) ? a : [raw]; } catch (e) { return [raw]; } }
    return [raw];
  }
  function show(i) {
    idx = (i + imgs.length) % imgs.length;
    const src = imgs[idx];
    lbImg.src = src;
    if (layers[0]) layers[0].style.backgroundImage = `url('${src}')`;
    if (layers[1]) layers[1].style.backgroundImage = `url('${src}')`;
    const multi = imgs.length > 1;
    prevBtn.hidden = nextBtn.hidden = counter.hidden = !multi;
    if (multi) counter.textContent = (idx + 1) + " / " + imgs.length;
    // cool glitch burst on each change
    lbGlitch.classList.add("is-glitching");
    clearTimeout(burst);
    burst = setTimeout(() => lbGlitch.classList.remove("is-glitching"), 650);
  }
  function open(raw) {
    imgs = parseImgs(raw);
    if (!imgs.length) return;
    show(0);
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() {
    box.hidden = true;
    document.body.style.overflow = "";
    lbImg.src = "";
    imgs = [];
  }

  // delegation so dynamically-added gallery tiles work too; the "Verify" link opts out
  document.addEventListener("click", (e) => {
    if (e.target.closest(".verify-link")) return;
    const card = e.target.closest("[data-img]");
    if (!card || box.contains(card)) return;
    e.preventDefault();
    open(card.getAttribute("data-img"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.closest(".verify-link")) return;
      const card = e.target.closest("[data-img]");
      if (card && !box.contains(card)) { e.preventDefault(); open(card.getAttribute("data-img")); }
    }
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (imgs.length > 1 && e.key === "ArrowLeft") show(idx - 1);
    if (imgs.length > 1 && e.key === "ArrowRight") show(idx + 1);
  });

  prevBtn.addEventListener("click", (e) => { e.stopPropagation(); show(idx - 1); });
  nextBtn.addEventListener("click", (e) => { e.stopPropagation(); show(idx + 1); });
  closeBtn.addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
})();
