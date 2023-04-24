import { PostTextContent } from "components/post-text-content";
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
          grid-template-columns: 100px minmax(0, 70%);
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
          color: var(--colors-neutral-grayish-blue);
          font-size: 28px;
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
        <PostTextContent title={title} subtitle={subtitle} />
      </article>
    </>
  );
};
