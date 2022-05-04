import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import '../styles/Header.moduleBoostrap.css';
import '../styles/Footer.moduleBoostrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
