import "./App.css";
import About from "./components/about/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main/main";
import Services from "./components/services/services";
import Works from "./components/works/works";

const App = () => {
  return (
    <>
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
