import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/theme.scss";
import "toastr/build/toastr.min.css";
import "./style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
