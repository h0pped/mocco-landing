import GlobalStyle from "./components/GlobalStyle";
import Title from "./components/Title";
import Description from "./components/Description";
import Food from "./components/Food";
import Bar from "./components/Bar";
import Hookah from "./components/Hookah";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" id="luxy">
      <GlobalStyle />
      <Title />
      <Description />
      <Food />
      <Bar />
      <Hookah />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
