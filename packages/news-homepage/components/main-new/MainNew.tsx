import Image from "next/image";
import type { PublishedMainNew } from "types/PublishedMainNew";

type MainNewProps = { data: PublishedMainNew | null };

export const MainNew = ({ data }: MainNewProps) => {
  if (!data) {
    return (
      <div style={{ backgroundColor: "var(--colors-neutral-grayish-blue)" }} />
    );
  }

  const { title, subtitle, desktopImage, mobileImage } = data;

  return (
    <>
      <style jsx>{`
        .image-wrapper {
          height: 300px;
          margin-bottom: 30px;
        }

        .image-wrapper > :global(img) {
          object-fit: cover;
          max-width: 100%;
          width: 100%;
        }

        .image-wrapper :global(img[data-id="image-wrapper-mobile"]) {
          display: inline;
        }

        .image-wrapper :global(img[data-id="image-wrapper-desktop"]) {
          display: none !important;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
        }

        .title {
          font-size: 32px;
          font-weight: 800;
          margin: 0;
          margin-bottom: 20px;
        }

        .info {
          color: var(--colors-neutral-grayish-blue);
          line-height: 1.5;
          margin: 0;
          margin-bottom: 30px;
        }

        .read-more {
          height: 48px;
          background-color: var(--colors-primary-soft-red);
          color: var(--colors-neutral-off-white);
          border: none;
          text-transform: uppercase;
          padding: 0 38px;
          letter-spacing: 4px;
        }

        @media (min-width: 769px) {
          .content-wrapper {
            flex-direction: row;
            gap: 20px;
          }

          .title {
            margin-right: 10%;
            flex-basis: 40%;
            font-size: 56px;
            margin-bottom: 0;
          }

          .content-column-2 {
            flex-basis: 50%;
          }

          .info {
            margin-bottom: 40px;
          }

          .image-wrapper :global(img[data-id="image-wrapper-mobile"]) {
            display: none !important;
          }

          .image-wrapper :global(img[data-id="image-wrapper-desktop"]) {
            display: inline !important;
          }
        }
      `}</style>
      <section className="main-new-wrapper">
        <div className="image-wrapper">
          {mobileImage && (
            <Image
              data-id="image-wrapper-mobile"
              src={`${process.env.IMAGES_BASE_PATH}${mobileImage.src}`}
              alt={mobileImage.alt}
              width="686"
              height="300"
              sizes="100vw"
            />
          )}
          {desktopImage && (
            <Image
              data-id="image-wrapper-desktop"
              src={`${process.env.IMAGES_BASE_PATH}${desktopImage.src}`}
              alt={desktopImage.alt}
              width="1460"
              height="300"
              sizes="60vw"
            />
          )}
        </div>
        <div className="content-wrapper">
          <h1 className="title">{title}</h1>
          <div className="content-column-2">
            <p className="info">{subtitle}</p>
            <button className="read-more">Read more</button>
          </div>
        </div>
      </section>
    </>
  );
};
