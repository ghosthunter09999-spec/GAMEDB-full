# GameDB — Gaming Database Website

A modern gaming database website built with **Vite + React + Bootstrap 5**, featuring 12 validated forms and an IMDb-style landing page.

## Tech Stack

- Vite + React 19
- React Router DOM 7
- Bootstrap 5
- React Hook Form + Zod + @hookform/resolvers

## Getting Started

```bash
cd gamedb
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Path | Page |
|------|------|
| `/` | Home / Landing |
| `/login` | Login Form |
| `/signup` | Signup Form |
| `/contact` | Contact Form |
| `/newsletter` | Newsletter Form |
| `/review` | Write Review Form |
| `/search` | Search Game Form |
| `/feedback` | Feedback Form |
| `/suggest-game` | Suggest Game Form |
| `/report-bug` | Report Bug Form |
| `/comment` | Comment Form |
| `/rating` | Rating Form |
| `/premium` | Premium Subscription Form |

## Features

- Dark theme with yellow/warning accent color
- Fully responsive Bootstrap 5 layout
- All forms use React Hook Form + Zod validation
- Error messages under each field (`invalid-feedback`)
- Forms console.log data on submit (no backend)
- Navbar with links to all pages
- Landing page: Hero, Featured Reviews, News, Top Rated table, Upcoming Releases

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── forms/
│       ├── LoginForm.jsx
│       ├── SignupForm.jsx
│       ├── ContactForm.jsx
│       ├── NewsletterForm.jsx
│       ├── ReviewForm.jsx
│       ├── SearchForm.jsx
│       ├── FeedbackForm.jsx
│       ├── SuggestGameForm.jsx
│       ├── ReportBugForm.jsx
│       ├── CommentForm.jsx
│       ├── RatingForm.jsx
│       └── PremiumForm.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run preview` — Preview production build
