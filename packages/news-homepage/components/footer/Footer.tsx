export const Footer = () => {
  return (
    <>
      <style jsx>{`
        .attribution {
          font-size: 11px;
          text-align: center;
          margin: 20px 0;
        }

        .attribution a {
          color: hsl(228, 45%, 44%);
        }
      `}</style>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/samuelsilvadev"
          target="_blank"
          rel="noreferrer"
        >
          Samuel Silva
        </a>
        .
      </footer>
    </>
  );
};
