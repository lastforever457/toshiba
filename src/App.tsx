import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "./App.css";
import About from "./components/about/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main/main";
import Services from "./components/services/services";
import Works from "./components/works/works";

const App = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language || "uz"} />
      </Helmet>
      <Header />
      <Main />
      <About />
      <Works />
      <Services />
      <Footer />
    </>
  );
};

export default App;
