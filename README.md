# Carlos Gutierrez - Portfolio

A modern portfolio and blog website built with Astro, React, TypeScript, and Tailwind CSS.

## 🚀 Project Structure

```
/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.astro
│   │   └── SocialLinks.tsx
│   ├── hooks/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── projects/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── 404.astro
│   │   └── index.astro
│   └── index.css
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Installs dependencies                            |
| `bun run dev`          | Starts local dev server at `localhost:4321`      |
| `bun run build`        | Build your production site to `./dist/`          |
| `bun run preview`      | Preview your build locally, before deploying     |
| `bun run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 💻 Getting Started

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd carlosguso-remix
```

2. Install dependencies with bun:
```sh
bun install
```

3. Start the development server:
```sh
bun run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🛠️ Technologies

This project is built with:

- **Astro** - Modern web framework for content-focused websites
- **React** - UI components (with Astro islands architecture)
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components
- **Vite** - Fast build tool (integrated with Astro)
- **Bun** - Fast JavaScript runtime and package manager

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5517f6fe-44ff-44ee-b14b-c2d397ccc00e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
