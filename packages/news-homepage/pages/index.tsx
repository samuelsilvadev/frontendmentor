import { MainNew } from "components/main-new";
import { PostPreview } from "components/post-preview";
import type { GetStaticProps } from "next";
import Head from "next/head";
import type { PostRecommendation } from "types/PostRecommendation";

type HomeProps = {
  recommendations: PostRecommendation[];
};

export default function Home({ recommendations }: HomeProps) {
  return (
    <>
      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 50px;
        }

        .related-new {
          background-color: var(--colors-neutral-very-dark-blue);
          min-height: 300px;
        }

        .recommendations {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 20px;
        }

        @media (min-width: 769px) {
          main {
            grid-template-columns: minmax(0, 70%) minmax(0, 30%);
            column-gap: 28px;
            row-gap: 70px;
          }

          .recommendations {
            grid-column: 1 / -1;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 52px;
            row-gap: auto;
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
        <div className="related-new" />
        <ul className="recommendations">
          {recommendations.map(({ title, subtitle, image }, index) => (
            <li key={title}>
              <PostPreview
                order={index + 1}
                title={title}
                subtitle={subtitle}
                image={image}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await import("data/recommendations");

  return {
    props: {
      recommendations: response.data,
    },
  };
};
