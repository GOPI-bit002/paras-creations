# Paras Creations — Construction Company Website

A premium, production-ready Next.js 14 website and internal admin dashboard for **Paras Creations** — a construction company led by **Manoj Sharma** handling government and private projects.

- Public site: company info, services, projects, enquiry form
- Admin panel: employees, inventory, projects, enquiries, settings
- Stack: **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**

---

## 1. How to run the project

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open:

- Public site: <http://localhost:3000>
- Admin panel: <http://localhost:3000/admin>

To create a production build:

```bash
npm run build
npm run start
```

---

## 2. Admin login details

Open <http://localhost:3000/admin> and log in with the demo credentials:

| Field    | Value      |
| -------- | ---------- |
| Username | `admin`    |
| Password | `admin123` |

> ⚠️ **Demo authentication only.** Before going live, replace the demo logic in `src/lib/auth.ts` with real authentication (e.g. NextAuth.js, JWT + HTTP-only cookies). Do not deploy this to production as-is.

You can also access admin from the **"Admin Login"** link in the footer of the public site.

---

## 3. Where to edit company data

File: [`src/data/company.ts`](src/data/company.ts)

Edit:

- Company name, tagline, owner
- Contact phone, email, address
- Homepage stats (Government Projects, Private Projects, etc.)
- "Why Choose Us" cards
- Core values (About page)

Services are edited in [`src/data/services.ts`](src/data/services.ts).

---

## 4. Where to edit projects

File: [`src/data/projects.ts`](src/data/projects.ts)

Each project supports:

- `name`, `clientType` (`Government` / `Private`)
- `status` (`Ongoing` / `Completed`)
- `location`, `startDate`, `endDate`
- `description`, `image` URL
- `progress` (0–100), `budget`, `siteManager`

The same data powers both the public **Projects** page and the admin **Projects Management** page.

---

## 5. Where to edit employee data

File: [`src/data/employees.ts`](src/data/employees.ts)

Employee fields: `id`, `name`, `role`, `department`, `mobile`, `currentSite`, `salary`, `joiningDate`, `attendance`, `status`.

> This data is **private**. It is only rendered inside `/admin/employees` and must never appear on a public page.

You can also add / edit / delete employees through the admin UI — note changes are frontend-only until you add a database.

---

## 6. Where to edit inventory

File: [`src/data/inventory.ts`](src/data/inventory.ts)

Each item includes total / available / used / returned quantities, category (Material / Tool / Equipment), current site, and last-updated date.

From the admin **Inventory** page you can:

- Add a new item
- Update total quantity
- Send an item to a site
- Mark returned quantity
- Edit or delete records

Again — in v1 these actions mutate component state only. Add a backend when you're ready.

---

## 7. How to deploy on Vercel

1. Push the project to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/paras-creations.git
   git push -u origin main
   ```

2. Go to <https://vercel.com/new>, import the GitHub repo.

3. Keep defaults:
   - **Framework**: Next.js
   - **Build command**: `next build`
   - **Output directory**: `.next`

4. Click **Deploy**. Your site will be live at `https://<project-name>.vercel.app`.

No environment variables are required for v1 (everything uses in-memory demo data).

---

## Project structure

```
src/
  app/
    page.tsx              # Home
    about/                # About page
    services/             # Services page
    projects/             # Public projects page
    contact/              # Enquiry form
    admin/
      page.tsx            # Dashboard (+ built-in login gate)
      employees/
      inventory/
      projects/
      enquiries/
      settings/
  components/
    public/               # Navbar, Footer, Hero, cards, etc.
    admin/                # Sidebar, header, stat card, data table, auth gate
  data/                   # All demo/editable content lives here
  lib/                    # utils + demo auth helpers
  types/                  # Shared TypeScript types
```

---

## Adding a real backend later

The project is structured so you can swap demo data for real data without refactoring the UI:

1. **Database** — add Prisma or Supabase. Keep the schema aligned with types in `src/types/index.ts`.
2. **API routes** — create `app/api/...` route handlers (projects, employees, inventory, enquiries).
3. **Data loaders** — replace each `import { ... } from "@/data/..."` with server-side fetches.
4. **Auth** — replace `src/lib/auth.ts` and `src/components/admin/AdminAuthGate.tsx` with NextAuth.js or similar.
5. **Enquiry form** — in `src/app/contact/page.tsx`, replace the `handleSubmit` stub with a `fetch("/api/enquiries", { method: "POST" })` call.

---

© Paras Creations — Built with Next.js, TypeScript and Tailwind CSS.
