# Christopher Reynolds Resume

A modern, responsive personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Showcase your experience, projects, and skills in a clean, professional format.

## ✨ Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **Component-Driven Architecture** - Modular components for better maintainability
- **TypeScript Support** - Full type safety across the codebase
- **Dynamic Resume Content** - Easily updateable resume data structure
- **Optimized Performance** - Fast page loads with Next.js optimizations
- **SEO Ready** - Built-in metadata and Open Graph support

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── resume/             # Resume page
├── components/             # Reusable components
│   ├── PageLayout.tsx      # Layout wrapper
│   └── ResumeEntries.tsx   # Resume entry components
├── data/                   # Data files
│   └── resume.ts           # Resume content structured as TypeScript
├── public/                 # Static assets
│   └── ...
├── styles/                 # Global styles
│   └── globals.css
├── utils/                  # Utility functions
│   └── htmlStringParser.tsx # HTML string parsing utility
└── ...
```

## 📝 Customizing Your Resume

The resume data is stored in `data/resume.ts`. To update your information:

1. Edit the relevant sections in the data file (skills, jobs, education)
2. The changes will automatically reflect in the UI
3. To add new job entries, simply add a new object to the `jobs` array

Example job entry:
```typescript
{
  id: "company-name",
  company: "Company Name",
  title: "Your Title",
  period: "Month Year - Month Year",
  technologies: "Technologies used",
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2",
    "Responsibility with <a href=\"https://example.com\">link</a>"
  ]
}
```

## 🌙 Dark Mode

The portfolio supports both light and dark modes, which are automatically detected based on the user's system preferences. A toggle is also available for manual control.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers

## 🚢 Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your project to Vercel
3. Vercel will detect Next.js automatically and deploy with optimal settings

Alternatively, you can deploy to any platform that supports Next.js.

## 🧩 Adding Projects

To add projects to your portfolio:

1. Update the projects section in your data structure
2. Add images to the public directory
3. Link to live demos or GitHub repositories

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Vercel](https://vercel.com/) - Deployment platform

---

Built by [Christopher Reynolds](@christopherrobin)
```
