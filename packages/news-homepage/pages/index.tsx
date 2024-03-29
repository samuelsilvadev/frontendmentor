import { MainNew } from "components/main-new";
import { PostPreview } from "components/post-preview";
import { PostTextContent } from "components/post-text-content";
import type { GetStaticProps } from "next";
import Head from "next/head";
import type { ContentResponse } from "types/ContentResponse";
import type { Menu } from "types/Menu";
import type { PostRecommendation } from "types/PostRecommendation";
import type { PublishedMainNew } from "types/PublishedMainNew";
import type { RelatedPost } from "types/RelatedPost";
import { logger } from "utils/logger";

type HomeProps = {
  recommendations: PostRecommendation[];
  menus: Menu[];
  relatedPosts: RelatedPost[];
  mainNew: PublishedMainNew | null;
};

export default function Home({
  recommendations,
  relatedPosts,
  mainNew,
}: HomeProps) {
  const hasRelatedPosts = relatedPosts.length > 0;

  return (
    <>
      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 50px;
        }

        .related-new-wrapper {
          background-color: var(--colors-neutral-very-dark-blue);
          padding: 20px;
          align-self: flex-start;
        }

        .related-news {
          display: grid;
          grid-template-columns: 1fr;
        }

        .related-news > li {
          padding: 35px 0;
        }

        .related-news > li:not(:last-child) {
          border-bottom: 1px solid var(--colors-neutral-grayish-blue);
        }

        .related-news > li:last-child {
          padding-bottom: 15px;
        }

        .related-new-title {
          color: var(--colors-primary-soft-orange);
          margin: 10px 0 0;
          font-size: 30px;
        }

        .text-content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .recommendations {
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
            column-gap: 20px;
            row-gap: 0;
          }
        }

        @media (min-width: 1024px) {
          .recommendations {
            column-gap: 52px;
          }
        }
      `}</style>
      <Head>
        <title>News</title>
        <meta name="description" content="Worldwide news curated for you" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <MainNew data={mainNew} />
        <article className="related-new-wrapper">
          <h2
            className="related-new-title"
            style={
              !hasRelatedPosts
                ? { marginBottom: "10px", textAlign: "center" }
                : {}
            }
          >
            {hasRelatedPosts ? "New" : "Nothing related published yet"}
          </h2>
          {hasRelatedPosts ? (
            <ul className="related-news">
              {relatedPosts.map(({ title, subtitle }) => (
                <li key={title}>
                  <section className="text-content-wrapper">
                    <PostTextContent
                      invertTitleColor
                      title={title}
                      subtitle={subtitle}
                    />
                  </section>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
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
  logger.info(`Start fetching on: ${process.env.CONTENT_API}, for page: /`);

  try {
    const response = await fetch(process.env.CONTENT_API);
    const parsedResponse = (await response.json()) as ContentResponse;

    logger.info(parsedResponse, `GET: ${process.env.CONTENT_API}`);

    return {
      props: {
        recommendations: parsedResponse["posts-recommendations"] ?? [],
        menus: parsedResponse.menus ?? [],
        relatedPosts: parsedResponse["related-posts"] ?? [],
        mainNew: parsedResponse["main-new"] ?? null,
      },
    };
  } catch (error) {
    logger.error(error, `GET: ${process.env.CONTENT_API}`);

    return {
      props: {
        recommendations: [],
        menus: [],
        relatedPosts: [],
        mainNew: null,
      },
    };
  }
};
