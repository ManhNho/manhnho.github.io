const yearsInSec = String(new Date().getFullYear() - 2019) + "+";

module.exports = {
  url: "https://manhnho.github.io",
  author: "Pham Tien Manh (ManhNho)",
  title: "ManhNho — Offensive Security",

  // SEO / structured-data identity for "ManhNho" / "Manh Pham" / "Pham Tien Manh"
  person: {
    name: "Pham Tien Manh",
    alternateName: ["ManhNho", "Manh Pham", "Phạm Tiến Mạnh", "manhnho"],
    jobTitle: "CEO, Security Expert & Bug Bounty Hunter",
    worksFor: "CyPeace",
    alumniOf: "Academy of Cryptography Techniques",
    nationality: "Vietnamese",
    image: "https://manhnho.github.io/assets/img/acropolis/portrait.jpg",
    description:
      "Pham Tien Manh (ManhNho) is the Founder & CEO of Cyberspace Peace Company Limited (CyPeace), a Vietnamese offensive security expert, Synack Red Team Legend, and bug bounty hunter recognized by Apple, Google, Meta and Microsoft. Speaker at Black Hat USA/Asia and GITEX.",
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
    { value: "100+", label: { vi: "Công ty", en: "Companies" } },
    { value: "700+", label: { vi: "Lỗ hổng", en: "Vulnerabilities" } },
    { value: yearsInSec, label: { vi: "Năm trong ngành", en: "Years in security" } },
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
      logo: "acropolis/legend-2stars.png", tint: false, rank: '2<span class="pin-star">★</span>', year: "2024",
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
    { logo: "microsoft.svg", org: "Microsoft", note: { vi: "Hall of Fame · Leaderboard MSRC Q1 & Q2 2026", en: "Hall of Fame · MSRC Q1 & Q2 2026 Leaderboard" }, years: "2019, 2026", link: "https://msrc.microsoft.com/leaderboard", imgs: ["/assets/img/recognitions/microsoft-q1-2026.jpg", "/assets/img/recognitions/microsoft-q2-2026.webp"] },
    { logo: "apple.svg", org: "Apple", note: { vi: "Hall of Fame ×4", en: "Hall of Fame ×4" }, years: "2021", link: "https://support.apple.com/en-us/102812", img: "recognitions/apple.jpg" },
    { logo: "cert-offsec.png", org: "OffSec", note: { vi: "Friends of Offensive Security ×2", en: "Friends of Offensive Security ×2" }, years: "2021", link: "https://www.offsec.com/community/bug-bounty/", img: "recognitions/offsec.jpg" },
    { logo: "google.svg", org: "Google", note: { vi: "Hall of Fame & Honorable Mentions", en: "Hall of Fame & Honorable Mentions" }, years: "2020", link: "https://bughunter.withgoogle.com/profile/79ea3f0e-1d69-4a97-80e3-5cb62636ee89", img: "recognitions/google.jpg" },
    { logo: "meta.svg", org: "Meta", note: { vi: "Top 100 white-hat hackers", en: "Top 100 white-hat hackers" }, years: "2019", link: "https://www.facebook.com/whitehat/thanks/", img: "recognitions/meta.jpg" },
  ],

  // Certifications with vendor logos (logos in /assets/img/logos). link = verification URL (opens on hover-click).
  certs: [
    { name: "Master of Information Security", vendor: "Academy of Cryptography Techniques", year: "2022", logo: "cert-act.png", type: "png", link: "#", img: "certs/master-act.webp" },
    { name: "Certified AI/ML Pentester (C-AI/MLPEN)", vendor: "The SecOps Group", year: "2025", logo: "cert-secopsgroup.png", type: "png", link: "https://secops.group/product/certified-ai-ml-pentester/", img: "certs/caiml-pen.jpg" },
    { name: "ISO/IEC 27001:2022 Lead Auditor", vendor: "Mastermind", year: "2025", logo: "cert-mastermind.png", type: "png", link: "https://www.credly.com/badges/bd54fe2a-0429-4fb5-8114-bcb0c6bf9ab9/public_url", img: "certs/iso.jpg" },
    { name: "Certified Threat Intelligence Analyst (CTIA)", vendor: "EC-Council", year: "2025", logo: "cert-eccouncil.png", type: "png", link: "https://aspen.eccouncil.org/Verify", img: "certs/ctia.jpg" },
    { name: "Certified Penetration Testing Specialist (CPTS)", vendor: "Hack The Box", year: "2024", logo: "hackthebox.svg", type: "svg", link: "https://www.credly.com/badges/8797842a-6508-45ce-81fe-3648e2d09613", img: "certs/cpts.jpg" },
    { name: "Certified DevSecOps Professional (CDP)", vendor: "Practical DevSecOps", year: "2022", logo: "cert-pdso.png", type: "png", link: "https://www.credly.com/badges/d9d5e02c-2dec-4431-a7b0-e03e79f74de7", img: "certs/cdp.jpg" },
    { name: "Certified Ethical Hacker — Practical (CEH)", vendor: "EC-Council", year: "2021", logo: "cert-eccouncil.png", type: "png", link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=WgJTd23/mhAAxZtRnK47QHkrwVlaUv1WKKvPBwP6JEA=", img: "certs/ceh-practical.jpg" },
    { name: "Certified Blockchain Security Professional", vendor: "Blockchain Council", year: "2022", logo: "cert-blockchaincouncil.png", type: "png", link: "https://www.credential.net/f3f3e8c1-5710-43c4-9536-b638acc84aa8", img: "certs/cbsp.jpg" },
    { name: "eJPT — Junior Penetration Tester", vendor: "INE / eLearnSecurity", year: "2020", logo: "cert-ine.png", type: "png", link: "https://verified.elearnsecurity.com/certificates/0329c97f-4d1d-4947-985a-db5cff87121b", img: "certs/ejpt.jpg" },
  ],

  // Press mentions — reputable Vietnamese media coverage
  press: [
    {
      pub: "Nhân Dân", icon: "nhandan", color: "#8b0000",
      title: "Bứt phá từ khởi nghiệp sáng tạo",
      date: "2024", link: "https://nhandan.vn/but-pha-tu-khoi-nghiep-sang-tao-post806824.html",
      img: "nhandan-office.webp",
    },
    {
      pub: "ANTV", icon: "antv", color: "#1a5c2a",
      title: "Doanh nghiệp công nghệ kỳ vọng vào năm 2025 — năm chuyển đổi số mạnh mẽ",
      date: "2025", link: "https://antv.gov.vn/kinh-te-5/doanh-nghiep-cong-nghe-ky-vong-vao-nam-2025-nam-chuyen-doi-so-manh-me-5FD7285F2.html",
    },
    {
      pub: "VnExpress", icon: "vnexpress", color: "#b91c4a",
      title: "Phạm Tiến Mạnh — Chuyên gia an ninh mạng & AI Security",
      date: "Profile", link: "https://vnexpress.net/pham-tien-manh-4913244.html",
      img: "vnexpress-portrait.png",
    },
    {
      pub: "Bộ TT&TT", icon: "mst", color: "#003366",
      title: "Apple vinh danh 2 cao thủ hacker người Việt",
      date: "2022", link: "https://mst.gov.vn/apple-vinh-danh-2-cao-thu-hacker-nguoi-viet-197154937.htm",
    },
    {
      pub: "VietnamNet", icon: "vietnamnet", color: "#d42020",
      title: "Nhận thức an ninh mạng của doanh nghiệp lớn và SME khác nhau 'một trời một vực'",
      date: "2025", link: "https://vietnamnet.vn/nhan-thuc-an-ninh-mang-cua-doanh-nghiep-lon-va-sme-khac-nhau-mot-troi-mot-vuc-2456850.html",
    },
    {
      pub: "Thanh Niên", icon: "thanhnien", color: "#c41e3a",
      title: "'Cao thủ bảo mật' chống lại sự tấn công của tin tặc",
      date: "2021", link: "https://thanhnien.vn/cao-thu-bao-mat-chong-lai-su-tan-cong-cua-tin-tac-1851416586.htm",
    },
    {
      pub: "Bộ TT&TT", icon: "mst", color: "#003366",
      title: "An toàn thông tin — Yếu tố sống còn của doanh nghiệp trong kỷ nguyên số",
      date: "2024", link: "https://mst.gov.vn/an-toan-thong-tin-yeu-to-song-con-cua-doanh-nghiep-trong-ky-nguyen-so-197240926145858124.htm",
    },
    {
      pub: "Thanh Niên", icon: "thanhnien", color: "#c41e3a",
      title: "Làm 'hacker mũ trắng' kiếm thu nhập hàng chục triệu đồng/tháng",
      date: "2023", link: "https://thanhnien.vn/lam-hacker-mu-trang-kiem-thu-nhap-hang-chuc-trieu-dong-thang-185231001234150695.htm",
    },
  ],

  // ===== Wanted Board — CyPeace metrics-driven achievement system =====
  // UPDATE THESE NUMBERS — everything else auto-computes
  wbMetrics: {
    revenue:      20000000000, // annual revenue in VND (target 25B by end 2026)
    clients:      30,          // total enterprise clients
    intlClients:  3,           // international clients
    team:         20,          // total headcount (tech + biz + ops)
    engineers:    10,          // technical staff only
    partners:     2,           // partners & alliances (domestic + intl)
    capitalX:     5,           // capital multiplier vs founding
    products:     1,           // launched products
    certs:        1,           // certifications & compliance (ATTT, ISO, SOC…)
    stages:       5,           // conference appearances (VN + international)
    globalRev:    0,           // global revenue in millions USD (starts at $20M)
    presence:     1,           // offices/countries (1 = first VN office)
  },

  wbDates: {
    revenue_1:    { vi: "12.2024", en: "Dec 2024" },
    revenue_2:    { vi: "12.2025", en: "Dec 2025" },
    clients_1:    { vi: "06.2024", en: "Jun 2024" },
    clients_2:    { vi: "07.2026", en: "Jul 2026" },
    intl_1:       { vi: "09.2023", en: "Sep 2023" },
    team_1:       { vi: "07.2023", en: "Jul 2023" },
    team_2:       { vi: "06.2024", en: "Jun 2024" },
    engineers_1:  { vi: "07.2023", en: "Jul 2023" },
    engineers_2:  { vi: "06.2024", en: "Jun 2024" },
    partners_1:   { vi: "03.2024", en: "Mar 2024" },
    capital_1:    { vi: "07.2023", en: "Jul 2023" },
    capital_2:    { vi: "09.2025", en: "Sep 2025" },
    products_1:   { vi: "08.2026", en: "Aug 2026" },
    certs_1:      { vi: "12.2024", en: "Dec 2024" },
    stages_1:     { vi: "07.2023", en: "Jul 2023" },
    stages_2:     { vi: "06.2024", en: "Jun 2024" },
    presence_1:   { vi: "01.2024", en: "Jan 2024" },
  },
};

// ===== Auto-generate wantedBoard from metrics =====
const m = module.exports.wbMetrics;
const d = module.exports.wbDates;

const categories = [
  {
    icon: "revenue", cat: { vi: "Doanh thu VN", en: "Revenue VN" },
    thresholds: [
      { v: 1000000000,     n: { vi: "1 tỷ VND ARR", en: "1B VND ARR" },        desc: { vi: "Doanh thu năm vượt 1 tỷ VND", en: "Annual revenue surpasses 1B VND" },              dk: "revenue_1" },
      { v: 5000000000,     n: { vi: "5 tỷ VND ARR", en: "5B VND ARR" },        desc: { vi: "Quy mô doanh nghiệp ATTT vừa", en: "Mid-size cybersecurity firm" },                  dk: "revenue_2" },
      { v: 25000000000,    n: { vi: "25 tỷ VND ARR", en: "25B VND ARR" },      desc: { vi: "Top doanh nghiệp ATTT Việt Nam", en: "Top cybersecurity firm in Vietnam" },            dk: "revenue_3" },
      { v: 125000000000,   n: { vi: "125 tỷ VND ARR", en: "125B VND ARR" },    desc: { vi: "Doanh nghiệp ATTT hàng đầu VN", en: "Leading cybersecurity enterprise in Vietnam" },  dk: "revenue_4" },
      { v: 250000000000,   n: { vi: "250 tỷ VND ARR", en: "250B VND ARR" },    desc: { vi: "Chuẩn bị bước sang Global Revenue", en: "Ready to transition to Global Revenue" },     dk: "revenue_5" },
    ],
    metric: m.revenue,
  },
  {
    icon: "client", cat: { vi: "Khách hàng", en: "Clients" },
    thresholds: [
      { v: 5,    n: { vi: "5 Khách hàng", en: "5 Clients" },              desc: { vi: "Nhóm khách hàng đầu tiên", en: "First client cohort" },                            dk: "clients_1" },
      { v: 20,   n: { vi: "20 Khách hàng", en: "20 Clients" },            desc: { vi: "Phục vụ 20 doanh nghiệp", en: "Served 20 enterprise clients" },                    dk: "clients_2" },
      { v: 50,   n: { vi: "50 Khách hàng", en: "50 Clients" },            desc: { vi: "Có chỗ đứng trên thị trường", en: "Established market presence" },                dk: "clients_3" },
      { v: 100,  n: { vi: "100 Khách hàng", en: "100 Clients" },          desc: { vi: "Top đơn vị ATTT tại Việt Nam", en: "Leading security provider in Vietnam" },      dk: "clients_4" },
      { v: 200,  n: { vi: "200 Khách hàng", en: "200 Clients" },          desc: { vi: "Quy mô khách hàng quốc tế", en: "International-scale client base" },              dk: "clients_5" },
    ],
    metric: m.clients,
  },
  {
    icon: "global", cat: { vi: "Khách quốc tế", en: "Intl Clients" },
    thresholds: [
      { v: 1,   n: { vi: "Khách quốc tế đầu tiên", en: "First Intl Client" },  desc: { vi: "Cung cấp dịch vụ cho khách nước ngoài", en: "Served first international client" },    dk: "intl_1" },
      { v: 5,   n: { vi: "5 Khách quốc tế", en: "5 Intl Clients" },            desc: { vi: "Dịch vụ vươn ra khu vực", en: "Regional client expansion" },                          dk: "intl_2" },
      { v: 10,  n: { vi: "10 Khách quốc tế", en: "10 Intl Clients" },          desc: { vi: "Thương hiệu ATTT khu vực", en: "Recognized regional security brand" },                dk: "intl_3" },
      { v: 20,  n: { vi: "20 Khách quốc tế", en: "20 Intl Clients" },          desc: { vi: "Top ATTT Đông Nam Á", en: "Top cybersecurity in Southeast Asia" },                     dk: "intl_4" },
      { v: 50,  n: { vi: "50 Khách quốc tế", en: "50 Intl Clients" },          desc: { vi: "Thương hiệu ATTT toàn cầu", en: "Global cybersecurity brand" },                       dk: "intl_5" },
    ],
    metric: m.intlClients,
  },
  {
    icon: "team", cat: { vi: "Nhân sự", en: "Team" },
    thresholds: [
      { v: 5,    n: { vi: "Đội hình 5", en: "Team of 5" },               desc: { vi: "Nhóm nòng cốt hình thành", en: "Core team formed" },                                dk: "team_1" },
      { v: 20,   n: { vi: "Đội hình 20", en: "Team of 20" },             desc: { vi: "Tổ chức đa phòng ban", en: "Multi-department organization" },                         dk: "team_2" },
      { v: 50,   n: { vi: "Đội hình 50", en: "Team of 50" },             desc: { vi: "Quy mô doanh nghiệp vừa", en: "Mid-size company scale" },                             dk: "team_3" },
      { v: 100,  n: { vi: "Đội hình 100", en: "Team of 100" },           desc: { vi: "Quy mô doanh nghiệp lớn", en: "Large enterprise scale" },                              dk: "team_4" },
      { v: 200,  n: { vi: "Đội hình 200", en: "Team of 200" },           desc: { vi: "Tập đoàn ATTT hàng đầu", en: "Top-tier cybersecurity corporation" },                   dk: "team_5" },
    ],
    metric: m.team,
  },
  {
    icon: "engineer", cat: { vi: "Kỹ sư", en: "Engineers" },
    thresholds: [
      { v: 3,   n: { vi: "Nhóm R&D&S", en: "R&D&S Squad" },               desc: { vi: "Đội nghiên cứu phát triển & dịch vụ ATTT", en: "Dedicated R&D & security services squad" }, dk: "engineers_1" },
      { v: 10,  n: { vi: "10 Kỹ sư", en: "10 Engineers" },               desc: { vi: "Đội kỹ thuật chuyên sâu", en: "Deep technical team" },                                dk: "engineers_2" },
      { v: 25,  n: { vi: "25 Kỹ sư", en: "25 Engineers" },               desc: { vi: "Năng lực R&D hàng đầu VN", en: "Top R&D capability in Vietnam" },                     dk: "engineers_3" },
      { v: 70,  n: { vi: "70 Kỹ sư", en: "70 Engineers" },               desc: { vi: "Trung tâm R&D quy mô lớn", en: "Large-scale R&D center" },                            dk: "engineers_4" },
      { v: 100, n: { vi: "100 Kỹ sư", en: "100 Engineers" },             desc: { vi: "Trung tâm R&D cấp quốc tế", en: "International-scale R&D center" },                   dk: "engineers_5" },
    ],
    metric: m.engineers,
  },
  {
    icon: "partner", cat: { vi: "Đối tác & Liên minh", en: "Partners & Alliances" },
    thresholds: [
      { v: 1,   n: { vi: "Đối tác đầu tiên", en: "First Partner" },      desc: { vi: "Ký kết đối tác chiến lược trong nước", en: "First domestic strategic partnership" },    dk: "partners_1" },
      { v: 5,   n: { vi: "5 Đối tác", en: "5 Partners" },                desc: { vi: "Hệ sinh thái đối tác nội địa", en: "Domestic partner ecosystem" },                    dk: "partners_2" },
      { v: 15,  n: { vi: "15 Đối tác", en: "15 Partners" },              desc: { vi: "Đối tác khu vực Đông Nam Á", en: "Regional ASEAN partnerships" },                      dk: "partners_3" },
      { v: 30,  n: { vi: "30 Đối tác", en: "30 Partners" },              desc: { vi: "Mạng lưới đối tác quốc tế", en: "International partner network" },                     dk: "partners_4" },
      { v: 50,  n: { vi: "50 Đối tác", en: "50 Partners" },              desc: { vi: "Hệ sinh thái đối tác toàn cầu", en: "Global partner & alliance ecosystem" },           dk: "partners_5" },
    ],
    metric: m.partners,
  },
  {
    icon: "capital", cat: { vi: "Vốn", en: "Capital" },
    thresholds: [
      { v: 1,   n: { vi: "Vốn thành lập", en: "Founding Capital" },       desc: { vi: "Đăng ký vốn điều lệ ban đầu", en: "Registered initial charter capital" },             dk: "capital_1" },
      { v: 5,   n: { vi: "Tăng vốn ×5", en: "Capital ×5" },              desc: { vi: "Vốn điều lệ gấp 5 lần", en: "5× charter capital growth" },                            dk: "capital_2" },
      { v: 10,  n: { vi: "Tăng vốn ×10", en: "Capital ×10" },            desc: { vi: "Vốn điều lệ gấp 10 lần", en: "10× charter capital growth" },                          dk: "capital_3" },
      { v: 20,  n: { vi: "Tăng vốn ×20", en: "Capital ×20" },            desc: { vi: "Vốn điều lệ gấp 20 lần", en: "20× charter capital growth" },                          dk: "capital_4" },
      { v: 50,  n: { vi: "Tăng vốn ×50", en: "Capital ×50" },            desc: { vi: "Quy mô vốn cấp quốc tế", en: "International-scale capitalization" },                   dk: "capital_5" },
    ],
    metric: m.capitalX,
  },
  {
    icon: "product", cat: { vi: "Sản phẩm", en: "Products" },
    thresholds: [
      { v: 1,   n: { vi: "Sản phẩm đầu tiên", en: "First Product" },     desc: { vi: "Ra mắt sản phẩm bảo mật", en: "Launched first security product" },                   dk: "products_1" },
      { v: 2,   n: { vi: "Product Suite", en: "Product Suite" },          desc: { vi: "Bộ giải pháp bảo mật", en: "Multi-product security suite" },                           dk: "products_2" },
      { v: 5,   n: { vi: "5 Sản phẩm", en: "5 Products" },               desc: { vi: "Nền tảng sản phẩm hoàn chỉnh", en: "Complete product platform" },                     dk: "products_3" },
      { v: 10,  n: { vi: "10 Sản phẩm", en: "10 Products" },             desc: { vi: "Hệ sinh thái sản phẩm top VN", en: "Top product ecosystem in Vietnam" },               dk: "products_4" },
      { v: 20,  n: { vi: "20 Sản phẩm", en: "20 Products" },             desc: { vi: "Hệ sinh thái sản phẩm quốc tế", en: "International product ecosystem" },               dk: "products_5" },
    ],
    metric: m.products,
  },
  {
    icon: "cert", cat: { vi: "Chứng nhận & Tuân thủ", en: "Certs & Compliance" },
    thresholds: [
      { v: 1,   n: { vi: "Giấy phép ATANM", en: "Security License" },      desc: { vi: "Cung cấp dịch vụ & phát triển sản phẩm ATTT", en: "Security services & product development" }, dk: "certs_1" },
      { v: 3,   n: { vi: "ISO 27001 & 9001", en: "ISO 27001 & 9001" },   desc: { vi: "Đạt chuẩn ISO quốc tế", en: "ISO/IEC 27001 & 9001 certified" },                       dk: "certs_2" },
      { v: 5,   n: { vi: "SOC & CREST", en: "SOC & CREST" },             desc: { vi: "Đạt SOC Type II và CREST", en: "SOC Type II & CREST certified" },                       dk: "certs_3" },
      { v: 7,   n: { vi: "FedRAMP & C5", en: "FedRAMP & C5" },           desc: { vi: "Tuân thủ FedRAMP/C5 quốc tế", en: "FedRAMP & C5 international compliance" },            dk: "certs_4" },
      { v: 10,  n: { vi: "Multi-Standard", en: "Multi-Standard Global" }, desc: { vi: "Đa chuẩn quốc tế toàn diện", en: "Comprehensive global multi-standard compliance" },    dk: "certs_5" },
    ],
    metric: m.certs,
  },
  {
    icon: "stage", cat: { vi: "Sân khấu", en: "Stage" },
    thresholds: [
      { v: 1,   n: { vi: "Sân khấu đầu tiên", en: "First Stage" },       desc: { vi: "Xuất hiện tại sự kiện ATTT", en: "First cybersecurity conference appearance" },        dk: "stages_1" },
      { v: 5,   n: { vi: "Diễn giả VN", en: "VN Speaker" },              desc: { vi: "Diễn giả quen thuộc trong nước", en: "Regular domestic conference speaker" },            dk: "stages_2" },
      { v: 10,  n: { vi: "Diễn giả khu vực", en: "Regional Speaker" },   desc: { vi: "Diễn giả tại hội nghị APAC", en: "Speaker at APAC conferences" },                      dk: "stages_3" },
      { v: 20,  n: { vi: "Diễn giả quốc tế", en: "Intl Speaker" },       desc: { vi: "Diễn giả Black Hat, GITEX…", en: "Speaker at Black Hat, GITEX, RSA…" },                dk: "stages_4" },
      { v: 30,  n: { vi: "Thought Leader", en: "Global Thought Leader" }, desc: { vi: "Keynote speaker toàn cầu", en: "Global keynote speaker & thought leader" },             dk: "stages_5" },
    ],
    metric: m.stages,
  },
  {
    icon: "globalRev", cat: { vi: "Doanh thu Quốc tế", en: "Global Revenue" },
    thresholds: [
      { v: 20,  n: { vi: "$20M ARR", en: "$20M ARR" },                    desc: { vi: "Doanh thu quốc tế $20M/năm", en: "International ARR reaches $20M" },                  dk: "globalRev_1" },
      { v: 30,  n: { vi: "$30M ARR", en: "$30M ARR" },                    desc: { vi: "Tăng trưởng quốc tế bền vững", en: "Sustained international growth" },                 dk: "globalRev_2" },
      { v: 40,  n: { vi: "$40M ARR", en: "$40M ARR" },                    desc: { vi: "Top ATTT khu vực châu Á", en: "Top cybersecurity firm in Asia-Pacific" },               dk: "globalRev_3" },
      { v: 50,  n: { vi: "$50M ARR", en: "$50M ARR" },                    desc: { vi: "Đối thủ cạnh tranh toàn cầu", en: "Global competitive player" },                       dk: "globalRev_4" },
      { v: 100, n: { vi: "$100M ARR", en: "$100M ARR" },                  desc: { vi: "Unicorn an ninh mạng", en: "Cybersecurity unicorn" },                                  dk: "globalRev_5" },
    ],
    metric: m.globalRev,
  },
  {
    icon: "presence", cat: { vi: "Hiện diện", en: "Presence" },
    thresholds: [
      { v: 1,   n: { vi: "Văn phòng đầu tiên", en: "First Office" },        desc: { vi: "Văn phòng đầu tiên tại Việt Nam", en: "First office established in Vietnam" },         dk: "presence_1" },
      { v: 3,   n: { vi: "3 Văn phòng VN", en: "3 VN Offices" },            desc: { vi: "Mạng lưới văn phòng tại Việt Nam", en: "Office network across Vietnam" },                dk: "presence_2" },
      { v: 4,   n: { vi: "Chi nhánh quốc tế", en: "First Intl Branch" },    desc: { vi: "Mở rộng chi nhánh tại nước ngoài", en: "First international branch office" },             dk: "presence_3" },
      { v: 8,   n: { vi: "5 Quốc gia", en: "5 Countries" },                 desc: { vi: "Hiện diện tại 5 quốc gia", en: "Presence in 5 countries" },                               dk: "presence_4" },
      { v: 13,  n: { vi: "10+ Quốc gia", en: "10+ Countries" },             desc: { vi: "Hiện diện toàn cầu 10+ quốc gia", en: "Global presence across 10+ countries" },           dk: "presence_5" },
    ],
    metric: m.presence,
  },
];

// Build wantedBoard from metrics
const wb = [];
categories.forEach(cat => {
  cat.thresholds.forEach((t, i) => {
    const stars = i + 1;
    const achieved = cat.metric >= t.v;
    const nextAchieved = i < cat.thresholds.length - 1 && cat.metric >= cat.thresholds[i + 1].v;
    const isNext = !achieved && (i === 0 || cat.metric >= cat.thresholds[i - 1].v);
    const status = achieved ? "captured" : isNext ? "in-progress" : "locked";
    const date = achieved && d[t.dk] ? d[t.dk] : undefined;
    wb.push({ icon: cat.icon, stars, status, date, cat: cat.cat, name: t.n, desc: t.desc });
  });
});
module.exports.wantedBoard = wb;

// Post-process: tag each item for tab display
wb.forEach(w => {
  if (w.status === "locked") w._tab = "locked";
  else if (w.status === "in-progress") w._tab = "progress";
  else w._tab = "achieved";
});

// Sort: achieved first (no-date → newest → oldest), then progress, then locked
const _tabOrder = { achieved: 0, progress: 1, locked: 2 };
function _parseDate(d) {
  if (!d || !d.vi) return Infinity;
  const p = d.vi.split(".");
  return p.length === 2 ? parseInt(p[1]) * 100 + parseInt(p[0]) : Infinity;
}
wb.sort((a, b) => {
  const ta = _tabOrder[a._tab], tb = _tabOrder[b._tab];
  if (ta !== tb) return ta - tb;
  if (a._tab === "achieved") {
    const da = _parseDate(a.date), db = _parseDate(b.date);
    if (da === Infinity && db === Infinity) return 0;
    if (da === Infinity) return -1;
    if (db === Infinity) return 1;
    return db - da;
  }
  return 0;
});

module.exports.wbCounts = {
  achieved: wb.filter(w => w._tab === "achieved").length,
  progress: wb.filter(w => w._tab === "progress").length,
  locked: wb.filter(w => w._tab === "locked").length,
};
