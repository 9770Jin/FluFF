import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
//import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        {/* //<Showcase /> */}
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default App;
