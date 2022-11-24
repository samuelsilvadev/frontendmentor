import { MainNew } from "components/main-new";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <style jsx>{`
        main {
          display: grid;
        }

        @media (min-width: 769px) {
          main {
            grid-template-columns: 70% 30%;
          }
        }
      `}</style>
      <Head>
        <title>News</title>
        <meta name="description" content="Worldwide news curated for you" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <MainNew />
      </main>
    </>
  );
}
