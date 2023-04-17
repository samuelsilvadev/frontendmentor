type PostTextContentProps = {
  invertTitleColor?: boolean;
  title: string;
  subtitle: string;
};

export const PostTextContent = ({
  title,
  subtitle,
  invertTitleColor,
}: PostTextContentProps) => {
  return (
    <>
      <style jsx>{`
        .title,
        .subtitle {
          margin: 0;
        }

        .title {
          font-size: 18px;
          color: var(--colors-neutral-very-dark-blue);
        }

        .invertedTitleColor {
          color: var(--colors-neutral-off-white);
        }

        .subtitle {
          font-size: 15px;
          color: var(--colors-neutral-grayish-blue);
        }
      `}</style>
      <>
        <h2 className={`title ${invertTitleColor ? "invertedTitleColor" : ""}`}>
          {title}
        </h2>
        <h3 className="subtitle">{subtitle}</h3>
      </>
    </>
  );
};
