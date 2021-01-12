import Header from "../components/header";
import "../styles/globals.scss";
import { GlobalProvider } from "./../context/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Header />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
