# 🏠 ALX Listing App

The **ALX Listing App** is a foundational project for creating an Airbnb-style property listing application.  
This milestone focuses on scaffolding the project using **Next.js, TypeScript, TailwindCSS, and ESLint** to establish a clean, scalable, and production-ready codebase.

---

## 📌 Project Goals

- Scaffold a modern Next.js application tailored for production.
- Implement **TypeScript** for type safety and maintainability.
- Configure **TailwindCSS** for responsive, accessible UI development.
- Enforce clean code practices with **ESLint**.
- Establish a reusable and organized folder structure.

---

## 🚀 Tech Stack

- [Next.js 13+](https://nextjs.org/) (Pages Router, no `src` directory)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

---

## 📂 Project Structure

```bash
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx         # Reusable Card component
│       └── Button.tsx       # Reusable Button component
├── constants/
│   └── index.ts             # Store reusable constants (API URLs, UI text, etc.)
├── interfaces/
│   └── index.ts             # TypeScript interfaces (CardProps, ButtonProps, etc.)
├── pages/
│   └── index.tsx            # Entry point (home page)
├── public/
│   └── assets/              # Images and SVGs
├── styles/
│   └── globals.css          # Tailwind base styles
├── tailwind.config.js       # TailwindCSS config
├── postcss.config.js        # PostCSS config
└── README.md
