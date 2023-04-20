import "styles/globals.css";
import type { AppProps } from "next/app";
import { defaultFontFamily } from "utils/font";
import { Layout } from "components/layout";
import { Menu } from "types/Menu";

export default function App<Props extends { menus: Menu[] }>({
  Component,
  pageProps,
}: AppProps<Props>) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${defaultFontFamily.style.fontFamily};
        }
      `}</style>
      <Layout menus={pageProps.menus}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
