import type { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <style jsx>{`
        header {
          height: 100px;
          background-color: var(--colors-primary-soft-orange);
          margin-bottom: 20px;
        }

        div {
          max-width: 95%;
          margin: 0 auto;
        }

        @media (min-width: 769px) {
          header {
            margin: 50px 0;
            height: 150px;
          }
        }

        @media (min-width: 1440px) {
          div {
            max-width: 1340px;
          }
        }
      `}</style>
      <div>
        <header />
        {children}
      </div>
    </>
  );
};
