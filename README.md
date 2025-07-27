
<img width="781" height="481" alt="docusecure drawio" src="https://github.com/user-attachments/assets/976664c5-2cbd-42cc-b903-c0a7d17d99e2" />
# DocuSecure React

**DocuSecure React** is a lightweight frontend application built using React and Vite. This project serves as the client-side interface for the DocuSecure platform, enabling secure document storage and interaction with AWS-backed services through a Spring Boot API.

## 🚀 Features

- ⚛️ Modern React setup with Vite
- 🔁 Hot Module Replacement (HMR) for fast development
- 🧹 ESLint integration for code quality
- 🗂 Clean and minimal project structure for scalability

---

## 📦 Project Structure

```plaintext
docusecure-react/
├── public/             # Static public assets
├── src/                # Application source code
│   ├── assets         # Root React component
│   └── components
|   |__css
|   |__api.js
|   |__App.jsx # React entry point
|   |__App.css
|   |__main.jsx
├── .gitignore          # Git ignored files
├── eslint.config.js    # ESLint configuration
├── index.html          # Main HTML template
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
└── vite.config.js      # Vite build configuration
🛠️ Getting Started
Prerequisites
Node.js (v14 or newer)

npm (v6 or newer)

##Installation

git clone https://github.com/ranjan-portfolio/docusecure-react.git
cd docusecure-react
npm install

Run the Development Server

npm run dev
Open your browser at http://localhost:5173 to view the app.

Build for Production

npm run build
Preview Production Build
npm run preview
🧪 Available Scripts
Command	Description
npm run dev	-->Run the app in development mode
npm run build	-->Create an optimized production build
npm run preview	-->Preview the production build locally

🧹 Linting
This project uses ESLint for code linting. You can run the linter with:
npx eslint .
You can configure the linting rules via eslint.config.js.

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Pull requests and suggestions are welcome. For major changes, please open an issue first to discuss what you would like to change.

