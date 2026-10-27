# Shuchi Purohit — Portfolio

A personal portfolio for Shuchi Purohit, a soft-skills coach and business development professional. The site introduces her experience and services, and includes a dedicated community page for Skills Synergy.

## Pages

- `/` — portfolio, experience, ventures, services, credentials, and contact options.
- `/community` — Skills Synergy programs, community information, social content, and testimonials.

## Tech stack

- Next.js 16 App Router, React 19, and TypeScript
- Styled Components and Ant Design
- React Hook Form and Zod for form state and validation
- EmailJS for the email contact modal

## Getting started

Use Node.js 24 and npm. From the project root, install the locked dependencies and start the development server:

```bash
nvm use 24
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If you do not use `nvm`, select Node.js 24 with your preferred version manager before running the npm commands.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build; run `npm run build` first. |

## Contact forms

The inquiry form validates the visitor's details and opens WhatsApp with a prefilled message. It does not submit the inquiry to this app's server.

The email contact modal sends messages through EmailJS from the browser. It reads these optional `NEXT_PUBLIC_` settings, which override the defaults currently used by the app:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

For local development, put your values in `.env.local` at the project root. Add the same variables to your hosting provider's environment settings for production. `NEXT_PUBLIC_` values are included in browser-side code; do not put private credentials in them. Configure the EmailJS template to use the message fields `to_email`, `from_name`, `name`, `from_email`, `email`, `reply_to`, `query`, `subject`, and `message`. Restrict the EmailJS public key to the deployed domains and configure appropriate rate limits.

## Project structure

```text
src/
  app/
    community/page.tsx     Skills Synergy community route
    layout.tsx             Shared layout, metadata, navigation, and footer
    page.tsx               Portfolio home page
  components/
    sections/              Home and community page sections
    ui/                    Shared navigation, footer, and UI primitives
    EmailModal.tsx          EmailJS contact modal
    InquiryForm.tsx         WhatsApp inquiry form
  data/content.ts           Portfolio, program, feed, and testimonial content
  providers/
    Provider.tsx            Ant Design and styled-components providers
    tokens.ts               Shared design tokens and Ant Design theme
public/                     Images and video assets served from the site root
```

## Updating content and assets

- Edit portfolio copy, experience, services, programs, testimonials, and showcase entries in [`src/data/content.ts`](./src/data/content.ts).
- Shared design colors, spacing, and radii are defined in [`src/providers/tokens.ts`](./src/providers/tokens.ts).
- Add static images and videos under [`public/`](./public). Reference them in the app with root-relative URLs, such as `/profilePhoto.png` or `/community-workshop/image1.png`.
- The home and community routes assemble their sections in [`src/app/page.tsx`](./src/app/page.tsx) and [`src/app/community/page.tsx`](./src/app/community/page.tsx), respectively.
