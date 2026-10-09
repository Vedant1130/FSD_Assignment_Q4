# React Profile Card Using Props

A simple and responsive **React Profile Card Application** developed using React, HTML, CSS, and JavaScript.

The application displays user profile cards containing a profile image, name, and short description. React props are used to pass data to a reusable profile card component, demonstrating component-based development and data sharing between components.

## Features

- Display user profile cards
- Show profile images, names, and descriptions
- Reusable React component
- Pass data using React props
- Render multiple profile cards dynamically
- Responsive design for mobile and desktop screens
- Hover effects for an interactive UI

## Technologies Used

- **React.js** – For building reusable UI components
- **HTML5** – For application structure
- **CSS3** – For styling and responsive design
- **JavaScript** – For application logic and data handling
- **Vite** – For development and building the application
- **GitHub Pages** – For hosting the application

## Project Structure

```text
react-profile-card/
│
├── public/
│   └── profile.jpg
├── src/
│   ├── components/
│   │   └── ProfileCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Open the terminal and install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Working

The application uses a reusable `ProfileCard` component to display user information. Props such as `name`, `image`, and `description` are passed from the parent component to the profile card component.

The `.map()` method is used to render multiple profile cards dynamically from an array of user objects.

## Deployment

The project is hosted using GitHub Pages.

**Live Demo:** Add your deployed GitHub Pages URL here.

## Author

**Vedant Saparia**

## License

This project is created for educational and academic purposes.