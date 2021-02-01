import { Layout } from "../components/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "../custom.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
