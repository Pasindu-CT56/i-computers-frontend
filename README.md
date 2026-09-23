# Isuri Computers Frontend

A modern React + Vite storefront for Isuri Computers, focused on selling computer products, accessories, and related tech items.

This frontend connects to a backend API for product data, authentication, orders, reviews, and admin operations.

## Live Demo

https://i-computers-frontend-one.vercel.app/products

## Features

- Product catalog and browsing experience
- Product overview and review section
- Shopping cart and checkout flow
- User authentication and account management
- Order history and order details
- Admin dashboard for products, users, and orders
- Responsive layout for desktop and mobile users
- Image upload/media support for product content

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- Supabase
- React Hot Toast
- React Icons
- Google OAuth integration

## Project Structure

```bash
src/
├── components/
├── context/
├── lib/
├── pages/
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18+
- npm or yarn
- A working backend API for the store data

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your API URL:

```bash
VITE_API_URL=http://localhost:5000/api
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Deployment

This frontend is configured to be deployed on Vercel.

- The project includes a `vercel.json` file to support SPA routing by rewriting all routes to `index.html`.
- You can deploy directly from your Vercel dashboard or connect the repository to a Vercel project.
- Make sure to add required environment variables in the Vercel project settings.

## Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL for the backend API used by the frontend |

## Notes

- This project is designed to work alongside a matching backend service for authentication, product management, and order processing.
- Media upload functionality is integrated with Supabase storage.
- The app is built as a storefront and admin-controlled e-commerce frontend.

## Scripts

```bash
npm run dev      # start Vite dev server
npm run build    # create production build
npm run preview  # preview production build
npm run lint     # run ESLint checks
```

## License

This project is for educational and personal use unless otherwise specified by the project owner.
