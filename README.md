# Shuchi Purohit site (Next.js, Node 24)

nvm use 24 && npm install && npm run dev

- Design tokens: src/providers/tokens.ts, also mapped to the Ant Design theme.
- Copy and data: src/data/content.ts
- Media placeholders: <Media src="/media/file.jpg" /> or kind="video"; put files in public/media.
- Forms: react-hook-form + zod; submit opens a prefilled WhatsApp chat (edit InquiryForm.tsx to POST elsewhere).
- Email contact modal: set `GMAIL_USER` to the Gmail account used to send and `GMAIL_APP_PASSWORD` to its Google app password in `.env.local` (and in production environment settings). Restart the app after setting them. The server sends contact messages to Shuchi's inbox and sets the visitor's email as Reply-To; never expose or commit the app password.
