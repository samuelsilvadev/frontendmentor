import Image, { type ImageProps } from "next/image";

type PostPreviewProps = {
  image: ImageProps;
  title: string;
  subtitle: string;
  order: number;
};

export const PostPreview = ({
  title,
  subtitle,
  image,
  order,
}: PostPreviewProps) => {
  return (
    <>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 30% 70%;
          grid-template-rows: repeat(3, auto);
          column-gap: 16px;
          row-gap: 8px;
          align-content: flex-start;
        }

        .wrapper > :global(img) {
          grid-row: 1 / -1;
          width: 100%;
          max-width: 100%;
          object-fit: cover;
        }

        .support-text {
          grid-column: 2 / -1;
          margin: 0;
        }

        .order {
          grid-row: 1 / 2;
          color: vaR(--colors-neutral-grayish-blue);
          font-size: 28px;
        }

        .title {
          grid-row: 2 / 3;
          font-size: 18px;
          color: var(--colors-neutral-very-dark-blue);
        }

        .subtitle {
          grid-row: 3 / 4;
          font-size: 15px;
          color: var(--colors-neutral-grayish-blue);
        }
      `}</style>
      <article className="wrapper">
        <Image
          {...image}
          className="image"
          alt={image.alt || ""}
          width={100}
          height={125}
        />
        <span className="support-text order">
          {order >= 10 ? order : `${order}`.padStart(2, "0")}
        </span>
        <h2 className="support-text title">{title}</h2>
        <h3 className="support-text subtitle">{subtitle}</h3>
      </article>
    </>
  );
};
