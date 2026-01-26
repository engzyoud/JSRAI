import React from "react";
import { translations } from "./i18n";
import { references } from "./data/references";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Methodology from "./components/Methodology";
import Questionnaire from "./components/Questionnaire";
import Result from "./components/Result";
import CaseStudies from "./components/CaseStudies";
import Privacy from "./components/Privacy";
import Disclaimer from "./components/Disclaimer";

export default function App() {
  const [lang, setLang] = React.useState("en");
  const t = translations[lang];

  const [page, setPage] = React.useState("home");
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="container">
      <Header t={t} setPage={setPage} page={page} />
      {page === "home" && <Home t={t} setPage={setPage} />}
      {page === "methodology" && <Methodology t={t} references={references[lang]} />}
      {page === "questionnaire" && (
        <Questionnaire t={t} lang={lang} setResult={(r) => setResult(r)} />
      )}
      {page === "results" && <Result t={t} lang={lang} result={result} setPage={setPage} />}
      {page === "caseStudies" && <CaseStudies t={t} lang={lang} />}
      {page === "privacy" && <Privacy t={t} />}
      {page === "disclaimer" && <Disclaimer t={t} />}

      {result && page !== "results" && (
        <div style={{ marginTop: "16px" }}>
          <button className="btn" onClick={() => setPage("results")}>
            {t.results}
          </button>
        </div>
      )}

      <Footer t={t} />
    </div>
  );
}
