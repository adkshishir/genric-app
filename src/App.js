import "./App.css";
import About from "./generic/pages/about";
import Home from "./generic/pages/home";
import Store from "./generic/pages/store";
import Header from "./generic/components/header";
import Footer from "./generic/components/footer";
function App() {
  let components;

  switch (window.location.pathname) {
    case "/home.js":
      components = <Home />;
      break;
    case "/store.js":
      components = <Store />;
      break;
    case "/about.js":
      components = <About />;
      break;
    default:
      components = <Home />;
  }
  return (
    <>
      <Header />
      {components}
      <Footer />
    </>
  );
}

export default App;
