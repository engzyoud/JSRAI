const e = React.createElement;

function App() {
  return e("div", { style: { fontFamily: "Arial, sans-serif", padding: "20px" } }, [
    e("h1", { style: { color: "#0f172a" } }, "React Works!"),
    e("p", null, "إذا ظهر هذا النص، React شغال.")
  ]);
}

ReactDOM.render(e(App), document.getElementById("root"));
