# 🐄 QurbaniHat – Livestock Booking Platform

**Live URL:** [https://qurbani-hat-64qj.vercel.app](https://qurbani-hat-64qj.vercel.app)

Your trusted online marketplace for Qurbani livestock. Browse healthy cows and goats, book with ease, and prepare for a blessed sacrifice.

---

## 📌 Purpose

QurbaniHat simplifies the process of finding and booking Qurbani animals. It is a fully responsive web application where users can:

- View a catalogue of at least 10 animals with details (price, weight, breed, etc.)
- Sort animals by price
- Book an animal after signing in (simulated booking)
- Manage their profile and update their information
- Enjoy rich UI/UX with animations and toast notifications

---

## ✨ Key Features

- 🔐 **Authentication** – Email/password registration & login, plus Google social login (BetterAuth)
- 🐮 **Animal Catalogue** – JSON‑based list of cows & goats with detailed info and images
- 🧾 **Booking Form** – Accessible only to authenticated users; shows success toast (no DB write)
- 👤 **My Profile** – View profile (name, email, photo) and update name & image
- 🔎 **Sorting** – Sort all animals by price (low‑high / high‑low)
- 📱 **Fully Responsive** – Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern Design** – HeroUI components, Tailwind CSS, custom Lottie animations, and Animate.css
- 📢 **Toast Notifications** – Using React‑Toastify for success/error feedback
- 🛣️ **Protected Routes** – Middleware redirects unauthenticated users to login from private pages
- 📄 **Custom 404 Page** – Animated not‑found page with Lottie
- 🚀 **Additional Sections** – Qurbani tips, top breeds, extra “Why Choose Us” section
- 🌐 **Google OAuth 2.0** – Sign in/up with Google in one click

---

## 📦 NPM Packages Used

### Core
| Package | Purpose |
|---------|---------|
| **next** | React framework for SSR, routing, and API routes |
| **react** & **react‑dom** | UI library |
| **better‑auth** | Authentication (email/password + Google OAuth) |
| **@better-auth/mongo-adapter** | MongoDB adapter for BetterAuth |
| **mongodb** | MongoDB driver |
| **tailwindcss** | Utility‑first CSS framework |
| **@heroui/react** & **@heroui/styles** | Modern UI components (Button, Avatar, Dropdown, etc.) |
| **react‑icons** | SVG icons (used for social links and more) |
| **react‑toastify** | Toast notifications |
| **animate.css** | Ready‑to‑use CSS animations (challenge package) |
| **react‑hook‑form** | Form state management (used in booking form) |
| **@gravity‑ui/icons** | Additional icons library |
| **daisyui** (dev) | Tailwind CSS component library (used for some extra styling) |
| **eslint** & **eslint‑config‑next** | Code linting |
| **@tailwindcss/postcss** | PostCSS integration for Tailwind |

---

