import "styles/globals.css";
import type { AppProps } from "next/app";
import { defaultFontFamily } from "utils/font";
import { Layout } from "components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${defaultFontFamily.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
