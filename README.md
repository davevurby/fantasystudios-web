# Fantasy Studios Web

This is the web project for **Fantasy Studios**. It is built with [Astro](https://astro.build/) and uses a custom design system for UI components, including a flexible and accessible button system.

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   bun install
   ```
2. **Start the development server:**
   ```sh
   bun dev
   ```
   The site will be available at `http://localhost:4321` by default.

3. **Build for production:**
   ```sh
   bun build
   ```

4. **Preview the production build:**
   ```sh
   bun preview
   ```

## 📁 Project Structure

```
/
├── public/                # Static assets
├── src/
│   ├── components/        # UI components (Astro, React, etc.)
│   ├── layouts/           # Layout components
│   ├── pages/             # Astro pages
│   └── styles/            # Global and component CSS
├── docs/
│   └── buttons.md         # Button system documentation
├── package.json
└── README.md
```

## 🧩 UI Components & Design System

- **Buttons:**
  - A comprehensive button system is implemented using custom CSS classes.
  - See [`docs/buttons.md`](docs/buttons.md) for all available button variants, sizes, states, and usage examples.

- **Other Components:**
  - Add or update components in `src/components/` as needed for the Fantasy Studios web experience.

## 📝 Documentation

- **Button System:** See [`docs/buttons.md`](docs/buttons.md) for detailed usage and customization instructions.
- For other design or component documentation, add new markdown files in the `docs/` directory.

## 🛠 Development Notes

- This project uses [Bun](https://bun.sh/) for fast installs and scripts.
- Styles are managed with a combination of Tailwind CSS and custom CSS layers.
- For responsive design, use Tailwind's responsive prefixes (e.g., `lg:btn-lg`).
- Accessibility and semantic HTML are prioritized in all components.

## 🤝 Contributing

1. Fork or clone the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and add/modify documentation as needed.
4. Open a pull request for review.

---

For any questions or to discuss design decisions, please reach out to the Fantasy Studios web team.
