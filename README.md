# Cognix Notion Clone

A high-fidelity, frontend-only clone of the Notion application, built from scratch with Next.js, Tailwind CSS, and BlockNote.

---

![Cognix Notion Clone Screenshot](https://raw.githubusercontent.com/b1ndu-dev/Cognix-Trial/main/public/screenshot.png)

> **Note:** This is a UI/UX prototype and does not have a backend. All data is mocked in the frontend to simulate a real user experience.

## ✨ Features

This clone faithfully recreates the core user interface and experience of Notion, including:

- **✍️ Block-Based Editor**: A rich text editor powered by [BlockNote](https://www.blocknotejs.org/) that allows you to create and edit content seamlessly.
- **🚀 Slash Commands**: Type `/` to bring up a menu of content blocks, just like in Notion.
- **🎨 Modern UI/UX**: Built with Tailwind CSS and shadcn/ui for a professional, pixel-perfect design.
- **📱 Fully Responsive**: The UI adapts beautifully to both desktop and mobile devices.
- **🌙 Dark Mode**: A sleek dark theme is applied by default.
- **📄 Document Management**:
    - **Resizable & Collapsible Sidebar**: Easily navigate through your documents.
    - **Nested Documents**: Organize pages within pages with a hierarchical structure.
    - **Cover Images & Icons**: Customize your pages with a cover image and an emoji icon.
    - **Archive & Restore**: Move pages to a "Trash" and restore them or delete them permanently.
- **🔗 Publish & Share Flow**: A complete UI to simulate publishing a document and getting a shareable link.


## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14 (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Block Editor**: [BlockNote](https://www.blocknotejs.org/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/b1ndu-dev/Cognix-Trial.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Cognix-Trial
    ```

3.  **Install all dependencies:**
    (This will install dependencies for both the `client` and `server` workspaces)
    ```bash
    npm install
    ```

4.  **Run the frontend development server:**
    ```bash
    npm run dev:client
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

This project is a monorepo containing both the frontend and a placeholder for a backend.

```
/
├── client/     # The Next.js frontend application
├── server/     # Placeholder for a Node.js/Express backend
└── package.json
```

## ✅ To-Do / Future Improvements

- [ ] Connect to a live backend and database.
- [ ] Implement real-time collaboration features.
- [ ] Add user authentication.
- [ ] Expand the variety of editor blocks available.

## 🙏 Acknowledgements

This project was built with the assistance of **Cognix AI**.
