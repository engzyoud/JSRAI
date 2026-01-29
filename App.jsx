import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Assessment from "./Assessment.jsx";
import Result from "./Result.jsx";
import About from "./About.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Methodology from "./Methodology.jsx";
import Privacy from "./Privacy.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Home />
        <About />
        <HowItWorks />
        <Methodology />
        <Assessment />
        <Result />
        <Privacy />
      </main>

      <Footer />
    </div>
  );
}
