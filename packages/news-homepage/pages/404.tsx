import { Layout } from "components/layout";
import Error from "next/error";
import type { ReactElement } from "react";

export default function NotFound() {
  return <Error statusCode={404} />;
}

NotFound.getLayout = (page: ReactElement) => {
  return <Layout withoutHeader>{page}</Layout>;
};
