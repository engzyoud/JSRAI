const e = React.createElement;

function App() {
  return e("div", { style: { fontFamily: "Arial, sans-serif", padding: "20px" } }, [
    e("h1", { style: { color: "#0f172a" } }, "أداة تقييم السلامة الإنشائية"),
    e("p", null, "الآن React يشتغل بدون Build.")
  ]);
}

ReactDOM.render(e(App), document.getElementById("root"));
