# Shuchi Purohit site (Next.js, Node 24)

nvm use 24 && npm install && npm run dev

- Design tokens: src/providers/tokens.ts, also mapped to the Ant Design theme.
- Copy and data: src/data/content.ts
- Media placeholders: <Media src="/media/file.jpg" /> or kind="video"; put files in public/media.
- Forms: react-hook-form + zod; submit opens a prefilled WhatsApp chat (edit InquiryForm.tsx to POST elsewhere).
