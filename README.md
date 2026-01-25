This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Create a `.env.local` file in the root directory with the following variable:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### Getting Your Resend API Key

1. Sign up for a free account at [resend.com](https://resend.com)
2. Navigate to the API Keys section in your dashboard
3. Create a new API key
4. Copy the key and add it to your `.env.local` file

**Note:** For Vercel deployments, you can also use the [Resend integration](https://vercel.com/integrations/resend) which automatically configures the API key.

## Email Configuration

The contact form email settings can be customized in `app/config/email.config.ts`:

- **Recipient Email**: Change `RECIPIENT_EMAIL` to set where contact form submissions are sent
- **Email Template**: Edit the `createEmailTemplate` function to customize the email format and styling

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
