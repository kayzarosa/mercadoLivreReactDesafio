import Search from "../components/Search";

import "../styles/global.scss";
import "../styles/search.scss";
import "../styles/home.scss";
import "../styles/details.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Search />
      <Component {...pageProps} />
    </>
  );
}
