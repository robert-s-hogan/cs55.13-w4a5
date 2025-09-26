// added tailwind style
import "../styles/tailwind.css";
// Added global style
import "../styles/global.css";

// Added special component that initializes on all pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
