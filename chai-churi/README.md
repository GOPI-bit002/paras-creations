# Chai-Churi

Premium Next.js website for **Chai-Churi** — a modern vegetarian cafe in Una, Himachal Pradesh.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react, clsx, tailwind-merge, class-variance-authority

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start local dev server at http://localhost:3000
npm run build    # production build
npm run start    # start production server
```

## Project structure

```
src/
  app/
    layout.tsx       # root layout, fonts, metadata
    page.tsx         # homepage — renders every section
    globals.css      # Tailwind + brand styles
  components/
    Navbar.tsx
    Hero.tsx
    CategorySection.tsx
    MenuSection.tsx
    ProductCard.tsx
    CartDrawer.tsx
    About.tsx
    WhyChooseUs.tsx
    Location.tsx
    Contact.tsx
    Footer.tsx
  context/
    CartContext.tsx  # cart state + localStorage persistence
  data/
    menu.ts          # ALL products, categories, prices, images
  lib/
    utils.ts         # cn(), formatINR(), business info, whatsappLink()
```

### Editing the menu

All menu items, prices, and image mapping live in `src/data/menu.ts`.
- Add/remove products inside `PRODUCTS` under each `make("Category", [...])` block.
- Change prices by editing the `price` number.
- Swap category images in the `IMG` map or the `pickImage()` function.

### Editing business info

Phone, address, hours, WhatsApp, Google Maps URLs all live in `BUSINESS` inside `src/lib/utils.ts`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy** — no env vars needed.
