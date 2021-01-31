import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../components/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "../custom.css";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
