import React from "react";

export default function LanguageSwitcher({ t }) {
  const [lang, setLang] = React.useState("en");

  React.useEffect(() => {
    const root = document.documentElement;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="lang">
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("ar")}>AR</button>
    </div>
  );
}
