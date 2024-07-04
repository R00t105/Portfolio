import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <SideBar/>
      <Education/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
