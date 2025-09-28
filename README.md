# 🧠 AI Diary – Frontend

**Shifting Shadows**
Trace and follow your thoughts – they come into your mind everywhere.
Don't let them run away, instead try to understand the meaning.

AI Diary is envisioned as a **personal digital journal** that combines a secure frontend with AI-driven features. The goal is to help users **capture, sort, and reflect on their thoughts** in a private environment. Beyond basic note-taking the system is designed as a **PWA (Progressive Web App)** for easy access across devices. Planned features include integration with automation agents (like n8n) to analyze and respond to diary entries.

Key aspects:

* Secure authentication with role-aware routing
* Private thought logging with responsive UI
* AI integration planned for sorting and meaningful feedback
* PWA support for installation on desktop and mobile
* Text input with planned speech input

---

## 📦 Installation

Use **pnpm** to install and run locally:

```bash
git clone https://github.com/marcus-koch-fs-dev/ai-diary.git
cd ai-diary
pnpm install
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Tech Stack

* React (Vite)
* TypeScript
* TailwindCSS + shadcn/ui
* React Router DOM
* Axios + Interceptor
* Auth Context
* Custom Form Hook (with validation)
* PWA-ready setup

---

## 🔜 Next Steps

* Implement testing (Vitest + Playwright)
* Connect to backend (REST/GraphQL)
* Role-based features (e.g. Admin, Writer)
* Journal entry system
* Responsive layout improvements
* AI feedback integration via agents (n8n)
* Speech input for journal entries

---

## 🤖 Vision

The long-term vision is to extend the diary with **AI assistance**:

* Trigger automation agents like n8n
* Sort and structure daily thoughts
* Provide reflective feedback on entries
* Support deeper analysis and self-improvement insights

---

## 🧩 Notes

* Auth state is persisted in localStorage
* Layouts are role-aware and route-protected
* Form validation is schema-based and type-safe

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository, create feature branches, and open pull requests.

---

## 📄 License

MIT – free to use and extend.
