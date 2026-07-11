module.exports = {
  url: "https://manhnho.github.io",
  author: "Pham Tien Manh (ManhNho)",
  title: "ManhNho — Offensive Security",

  // SEO / structured-data identity for "ManhNho" / "Manh Pham" / "Pham Tien Manh"
  person: {
    name: "Pham Tien Manh",
    alternateName: ["ManhNho", "Manh Pham", "Phạm Tiến Mạnh", "manhnho"],
    jobTitle: "Bug Bounty Hunter, Red Teamer & CEO of CyPeace",
    worksFor: "CyPeace",
    alumniOf: "Academy of Cryptography Techniques",
    nationality: "Vietnamese",
    image: "https://manhnho.github.io/assets/img/acropolis/portrait.jpg",
    description:
      "Pham Tien Manh (ManhNho) is a Vietnamese offensive security researcher, Synack Red Team Legend, bug bounty hunter recognized by Apple, Google, Meta and Microsoft, and CEO & co-founder of CyPeace. Speaker at Black Hat USA/Asia and GITEX.",
    sameAs: [
      "https://github.com/manhnho",
      "https://www.linkedin.com/in/manhnho/",
      "https://twitter.com/manhnho95",
      "https://acropolis.synack.com/inductees/manhnho",
      "https://cypeace.net",
    ],
    knowsAbout: [
      "Offensive Security",
      "Bug Bounty",
      "Red Teaming",
      "Penetration Testing",
      "Web Application Security",
      "AI/ML Security",
      "Vulnerability Research",
      "Cybersecurity",
    ],
  },
  keywords:
    "ManhNho, Manh Pham, Pham Tien Manh, Phạm Tiến Mạnh, manhnho, bug bounty, Synack Red Team, offensive security, red team, pentest, CyPeace, security researcher Vietnam, Black Hat speaker",
  motto: {
    vi: "Khoảng cách giữa ước mơ và hiện thực được gọi là hành động.",
    en: "The distance between your dreams and reality is called action.",
  },
  social: {
    github: "https://github.com/manhnho",
    linkedin: "https://www.linkedin.com/in/manhnho/",
    twitter: "https://twitter.com/manhnho95",
    email: "manh.pham@cypeace.net",
    company: "https://cypeace.net",
    acropolis: "https://acropolis.synack.com/inductees/manhnho",
  },

  // Compact hero stats (3 items only)
  stats: [
    { value: "5+", label: { vi: "Năm cống hiến", en: "Years of service" } },
    { value: "100+", label: { vi: "Công ty", en: "Companies" } },
    { value: "700+", label: { vi: "Lỗ hổng", en: "Vulnerabilities" } },
  ],

  // Pinned "crown jewel" achievements — shown prominently at the top of Recognition
  pinned: [
    {
      logo: "logos/microsoft.svg", tint: true, rank: "#10", year: "2026",
      vi: "Top 10 bảng xếp hạng kỹ thuật <b>MSRC M365</b> Bug Bounty của Microsoft",
      en: "#10 on Microsoft <b>MSRC M365</b> Bug Bounty Technical Leaderboard",
      link: "https://msrc.microsoft.com/leaderboard",
      img: "recognitions/microsoft-m365.jpg",
    },
    {
      logo: "acropolis/legend-2stars.png", tint: false, rank: "2★", year: "2024",
      vi: '<span class="pin-lead">Synack Red Team Legend</span>Báo cáo lỗ hổng hợp lệ cho <span class="num">100<span class="plus">+</span></span> công ty<br>&amp; <span class="num">200<span class="plus">+</span></span> mục tiêu',
      en: '<span class="pin-lead">Synack Red Team Legend</span>Valid reports across <span class="num">100<span class="plus">+</span></span> companies<br>&amp; <span class="num">200<span class="plus">+</span></span> targets',
      link: "https://acropolis.synack.com/inductees/manhnho",
      img: "recognitions/synack-legends.jpg",
    },
  ],

  // Synack Acropolis recognitions, grouped by year (badge images in /assets/img/acropolis)
  // link = verification / source page opened on hover-click
  recognitions: [
    { year: "2026", link: "https://acropolis.synack.com/inductees/manhnho", img: "recognitions/synack-year.jpg", badges: [{ img: "award-hero.png", name: "Hero" }] },
    { year: "2025", link: "https://acropolis.synack.com/inductees/manhnho", img: "recognitions/synack-year.jpg", badges: [{ img: "award-olympian.png", name: "Olympian" }] },
    { year: "2024", link: "https://acropolis.synack.com/inductees/manhnho", img: "recognitions/synack-year.jpg", badges: [{ img: "award-hero.png", name: "Hero" }, { img: "award-15for15.png", name: "15for15" }] },
    { year: "2023", link: "https://acropolis.synack.com/inductees/manhnho", img: "recognitions/synack-year.jpg", badges: [{ img: "award-hero.png", name: "Hero" }, { img: "award-speaker.svg", name: "Speaker" }] },
  ],

  // Halls of Fame — logo wall (logos in /assets/img/logos). type svg = monochrome (tinted white), png = full color.
  // ordered most-recent first (left) → oldest (right)
  halls: [
    { logo: "microsoft.svg", org: "Microsoft", note: { vi: "Hall of Fame · Leaderboard MSRC Q1 2026", en: "Hall of Fame · MSRC Q1 2026 Leaderboard" }, years: "2019, 2026", link: "https://msrc.microsoft.com/leaderboard", img: "recognitions/microsoft-q1-2026.jpg" },
    { logo: "apple.svg", org: "Apple", note: { vi: "Hall of Fame ×4", en: "Hall of Fame ×4" }, years: "2021", link: "https://security.apple.com/hall-of-fame/", img: "recognitions/apple.jpg" },
    { logo: "cert-offsec.png", org: "OffSec", note: { vi: "Friends of Offensive Security ×2", en: "Friends of Offensive Security ×2" }, years: "2021", link: "https://www.offsec.com/offsec/friends-of-offsec/", img: "recognitions/offsec.jpg" },
    { logo: "google.svg", org: "Google", note: { vi: "Hall of Fame & Honorable Mentions", en: "Hall of Fame & Honorable Mentions" }, years: "2020", link: "https://bughunters.google.com/leaderboard/honorable-mentions", img: "recognitions/google.jpg" },
    { logo: "meta.svg", org: "Meta", note: { vi: "Top 100 white-hat hackers", en: "Top 100 white-hat hackers" }, years: "2019", link: "https://www.facebook.com/whitehat/thanks/", img: "recognitions/meta.jpg" },
  ],

  // Certifications with vendor logos (logos in /assets/img/logos). link = verification URL (opens on hover-click).
  certs: [
    { name: "Certified AI/ML Pentester (C-AI/MLPEN)", vendor: "The SecOps Group", year: "2025", logo: "cert-secopsgroup.png", type: "png", link: "https://secops.group/product/certified-ai-ml-pentester/", img: "certs/caiml-pen.jpg" },
    { name: "ISO/IEC 27001:2022 Lead Auditor", vendor: "Mastermind", year: "2025", logo: "cert-mastermind.png", type: "png", link: "https://www.credly.com/badges/bd54fe2a-0429-4fb5-8114-bcb0c6bf9ab9/public_url", img: "certs/iso.jpg" },
    { name: "Certified Threat Intelligence Analyst (CTIA)", vendor: "EC-Council", year: "2025", logo: "cert-eccouncil.png", type: "png", link: "https://aspen.eccouncil.org/Verify", img: "certs/ctia.jpg" },
    { name: "Certified Penetration Testing Specialist (CPTS)", vendor: "Hack The Box", year: "2024", logo: "hackthebox.svg", type: "svg", link: "https://www.credly.com/badges/8797842a-6508-45ce-81fe-3648e2d09613", img: "certs/cpts.jpg" },
    { name: "Certified DevSecOps Professional (CDP)", vendor: "Practical DevSecOps", year: "2022", logo: "cert-pdso.png", type: "png", link: "https://www.credly.com/badges/d9d5e02c-2dec-4431-a7b0-e03e79f74de7", img: "certs/cdp.jpg" },
    { name: "Certified Ethical Hacker — Practical (CEH)", vendor: "EC-Council", year: "2021", logo: "cert-eccouncil.png", type: "png", link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=WgJTd23/mhAAxZtRnK47QHkrwVlaUv1WKKvPBwP6JEA=", img: "certs/ceh-practical.jpg" },
    { name: "Certified Blockchain Security Professional", vendor: "Blockchain Council", year: "2022", logo: "cert-blockchaincouncil.png", type: "png", link: "https://www.credential.net/f3f3e8c1-5710-43c4-9536-b638acc84aa8", img: "certs/cbsp.jpg" },
    { name: "eJPT — Junior Penetration Tester", vendor: "INE / eLearnSecurity", year: "2020", logo: "cert-ine.png", type: "png", link: "https://verified.elearnsecurity.com/certificates/0329c97f-4d1d-4947-985a-db5cff87121b", img: "certs/ejpt.jpg" },
  ],
};
