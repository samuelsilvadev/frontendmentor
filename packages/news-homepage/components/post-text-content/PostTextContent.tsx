type PostTextContentProps = {
  title: string;
  subtitle: string;
};

export const PostTextContent = ({ title, subtitle }: PostTextContentProps) => {
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

        .subtitle {
          font-size: 15px;
          color: var(--colors-neutral-grayish-blue);
        }
      `}</style>
      <>
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </>
    </>
  );
};
