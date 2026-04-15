/* ===========================================================
   Shri Naina Enterprises — beginner-friendly site script
   =========================================================== */

/* 1. Products data
   -----------------------------------------------------------
   Edit the list below to add, remove, or update products.
   Each product card is built automatically from this array.
   To change an image, just replace the file inside /assets/
   and keep the same name, OR point `image` to a new file.
*/
const products = [
  {
    name: "Premium Mattress",
    tag: "Best Seller",
    description: "Luxurious multi-layer mattress for deep, restful sleep.",
    feature: "High-density comfort foam",
    image: "assets/mattress-1.jpg",
  },
  {
    name: "Orthopedic Mattress",
    tag: "Back Support",
    description: "Firm support mattress designed for healthy spine alignment.",
    feature: "Doctor-recommended firmness",
    image: "assets/mattress-2.jpg",
  },
  {
    name: "Foam Mattress",
    tag: "Soft & Light",
    description: "Lightweight foam mattress with balanced softness and support.",
    feature: "Breathable foam layers",
    image: "assets/mattress-3.jpg",
  },
  {
    name: "Spring Mattress",
    tag: "Bounce Support",
    description: "Classic spring mattress with plush top layer for comfort.",
    feature: "Durable coil system",
    image: "assets/mattress-1.jpg",
  },
  {
    name: "Soft Pillow",
    tag: "Everyday Comfort",
    description: "Fluffy everyday pillow perfect for all sleeping positions.",
    feature: "Hypoallergenic fiber fill",
    image: "assets/pillow-1.jpg",
  },
  {
    name: "Memory Foam Pillow",
    tag: "Pressure Relief",
    description: "Contours to your head and neck for personalized comfort.",
    feature: "Slow-rebound memory foam",
    image: "assets/pillow-2.jpg",
  },
  {
    name: "Hotel Comfort Pillow",
    tag: "Luxury Feel",
    description: "Plush, cloud-like pillow inspired by premium hotel beds.",
    feature: "Extra-soft microfiber",
    image: "assets/pillow-3.jpg",
  },
  {
    name: "Neck Support Pillow",
    tag: "Orthopedic",
    description: "Ergonomic pillow that supports your neck and reduces strain.",
    feature: "Cervical contour design",
    image: "assets/pillow-1.jpg",
  },
];

/* 2. Render product cards into the grid */
function renderProducts() {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  const phone = "7018050630";
  const html = products
    .map((p) => {
      const msg = encodeURIComponent(
        `Hello Shri Naina Enterprises, I am interested in the "${p.name}". Please share details.`
      );
      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="product-body">
            <span class="product-tag">${p.tag}</span>
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <span class="product-feature">${p.feature}</span>
            <a href="https://wa.me/91${phone}?text=${msg}" class="btn btn-primary" target="_blank" rel="noopener">
              Enquire Now
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  grid.innerHTML = html;
}

/* 3. Mobile menu toggle */
function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  // Close menu when a link is clicked (mobile)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* 4. Set current year in footer */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* 5. Init */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupMenu();
  setYear();
});
