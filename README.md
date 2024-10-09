# Movies App

This project is a reimagined and improved version of my previous Movies App. The initial version of the app stopped working due to an outdated API and other dependencies, so I decided to rebuild it from scratch. This time, I aimed to refresh my skills with React, explore new best practices, and implement a more modern user interface.

## Features

- **React** with functional components and hooks (useState, useEffect)
- **React Router** for navigating between different pages (Movie Details, Search)
- **API Integration** using `fetch` to retrieve movie data
- **Tailwind CSS** for styling and responsive design
- **Vite** for a fast development and build process
- **Lazy Loading** for improved performance when loading movie images
- **Error Handling** and graceful fallback UI for API errors

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/GenaPlem/movies_app_react.git
   cd movies_app_react
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add your API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. To create a production build:
   ```
   npm run build
   ```
6. To deploy the project on GitHub Pages:
   ```
   npm run deploy
   ```

## Motivation
I originally built a version of this Movies App a few years ago when I was learning the basics of React. However, as the API it relied on became outdated, and my own skills advanced, I decided it was time for a refresh. This project allowed me to revisit core concepts of React while exploring new tools like Vite and Tailwind CSS. It also helped me solidify my understanding of building modern, responsive, and performant web applications.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for faster development.
- **Tailwind CSS**: Utility-first CSS framework for quickly styling the app.
- **React Router**: For managing navigation and routes.
- **TMDB API**: To fetch movie data (e.g., popular movies, movie details, search results).
- **gh-pages**: For deploying the app to GitHub Pages.

## Future Improvements
- **TypeScript**: Adding TypeScript for better type safety.
- **Unit Tests**: Using Jest and React Testing Library for testing components.
- **Improved UI/UX**: Further refining the user interface for a better user experience.