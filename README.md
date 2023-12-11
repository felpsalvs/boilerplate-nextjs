# Simple Next.js Boilerplate

This is a simple boilerplate project using Next.js, TypeScript, Tailwind CSS, Jest, and Storybook. It is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To get started, clone this repository and run the development server:

```bash
npm install
# or
yarn install
# or
pnpm install

npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying the `app/page.tsx` file. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

- `app/`: Contains the main application code.
- `components/`: Place your React components here.
- `styles/`: Includes global styles and Tailwind CSS configurations.
- `tests/`: Write your Jest tests here.
- `storybook/`: Contains Storybook configurations and stories.
- `public/`: Static assets go here.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Testing

Run Jest tests with:

```bash
npm test
# or
yarn test
# or
pnpm test
```

## Storybook

To run Storybook:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006) to view your stories.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
