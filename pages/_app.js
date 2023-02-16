import "@/styles/globals.css";
import { Space_Mono } from "@next/font/google";
import Layout from "../components/Layout";
const mono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={mono.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
