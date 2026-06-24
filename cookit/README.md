# CookIt 🍳

CookIt is a recipe web application built with React and Supabase.  
The app allows users to browse recipes, view ingredients and cooking instructions, manage favorites, and use authentication features.

## Live Website

https://cookit-j5ou.vercel.app

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Supabase
- Vercel
- GitHub

## Main Features

- User registration and login
- Dashboard page
- Recipe list
- Recipe details page
- Ingredients and instructions for each recipe
- Favorites page
- Profile page
- Responsive design for desktop and mobile
- Supabase database connection
- Deployment with Vercel

## Project Structure

```txt
src/
├── components/
│   ├── Navbar/
│   ├── BottomNavigation/
│   └── RecipeCard/
├── pages/
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── DashboardPage.jsx
│   ├── RecipeResultsPage.jsx
│   ├── RecipeDetailsPage.jsx
│   ├── FavoritesPage.jsx
│   └── ProfilePage.jsx
├── supabase.js
├── App.jsx
└── main.jsx

How to Run Locally
npm install
npm run dev

Then open:

http://localhost:5173
Environment Variables

Create a .env file and add:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Deployment

The project is deployed with Vercel.
Every push to the main branch automatically updates the live website.

Author

Created by Diana Heynman.