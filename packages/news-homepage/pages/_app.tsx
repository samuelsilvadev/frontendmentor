import "styles/globals.css";
import type { AppProps } from "next/app";
import { defaultFontFamily } from "utils/font";
import { Layout } from "components/layout";
import type { Menu } from "types/Menu";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<Props> = AppProps<Props> & {
  Component: NextPageWithLayout;
};

export default function App<Props extends { menus: Menu[] }>({
  Component,
  pageProps,
}: AppPropsWithLayout<Props>) {
  const { menus, ...props } = pageProps;

  const getLayout =
    Component.getLayout ??
    ((page) => <Layout menus={pageProps.menus}>{page}</Layout>);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${defaultFontFamily.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...props} />)}
    </>
  );
}
