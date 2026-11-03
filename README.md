# SkillYard — Next.js

The six-page SkillYard website converted to a native Next.js App Router project. Original branding, page content, layouts, CSS artwork and interactions are preserved.

## Requirements

Node.js 20.9 or newer; npm.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
```

The configuration uses `output: "export"`. The complete static website is generated in `out/` and can be hosted on any static host. For a Node server deployment, remove `output: "export"` from `next.config.mjs`, rebuild, then run `npm start`. You can also import the project into Vercel.

## Structure

- `app/page.jsx`: Home
- `app/services/page.jsx`: Services
- `app/work/page.jsx`: Concept work
- `app/about/page.jsx`: Studio
- `app/process/page.jsx`: Process
- `app/contact/page.jsx`: Project brief form
- `app/layout.jsx`: Root layout and metadata
- `app/globals.css`: Original responsive design and animation styles
- `components/ClientBehaviors.jsx`: Navigation, scroll reveals and brief download
- `public/assets/`: Original SkillYard logos and supplied artwork

## Important content details

The two portfolio entries are explicitly labelled original design concepts, not client work. The contact form validates fields and downloads a text brief locally. It does not submit to a server or send email. No credentials, backend or environment variables are required.

Original design and supplied brand assets belong to their respective owners.
"# s-yard" 
"# s-yard" 
