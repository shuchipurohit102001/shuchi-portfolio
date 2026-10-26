# Shuchi Purohit site (Next.js, Node 24)

nvm use 24 && npm install && npm run dev

- Design tokens: src/providers/tokens.ts, also mapped to the Ant Design theme.
- Copy and data: src/data/content.ts
- Media placeholders: <Media src="/media/file.jpg" /> or kind="video"; put files in public/media.
- Forms: react-hook-form + zod; submit opens a prefilled WhatsApp chat (edit InquiryForm.tsx to POST elsewhere).
- Email contact modal: configure `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` in `.env` (and in production environment settings). Configure the EmailJS template to deliver to Shuchi's inbox and use the `from_name`, `from_email`, `reply_to`, `query`, and `message` template parameters. The EmailJS public key is intended for browser use; enable EmailJS's domain restrictions and rate limits.
