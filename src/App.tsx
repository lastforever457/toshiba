import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main/main";
import Footer from "./components/footer";

const About = lazy(() => import("./components/about/about"));
const Works = lazy(() => import("./components/works/works"));
const Services = lazy(() => import("./components/services/services"));

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language || "uz"} />
        <title>{t("seo_title")}</title>
        <meta name="description" content={t("seo_description")} />
      </Helmet>
      <Header />
      <Main />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Works />
        <Services />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
