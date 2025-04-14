import "../styles/globals.css";

import { NavBar, Footer, OtherNav } from "../Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrowdFundingProvider>
        <OtherNav />
        <Component {...pageProps} />
        <Footer />
      </CrowdFundingProvider>
    </>
  );
}
