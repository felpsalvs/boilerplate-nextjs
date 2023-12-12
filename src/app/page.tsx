import Block from '@/components/Block'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a
            className="text-blue-600"
            href="https://github.com/felpsalvs/boilerplate-nextjs"
          >
            Boilerplate Next.js & Tailwindcss
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Block
            href="https://nextjs.org/docs"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />

          <Block
            href="https://nextjs.org/learn"
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <Block
            href="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Block
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
