import GlobalStyle from "./components/GlobalStyle";
import Title from "./components/Title";
import Description from "./components/Description";
import Food from "./components/Food";
import Bar from "./components/Bar";
import Hookah from "./components/Hookah";

function App() {
  return (
    <div className="App" id="luxy">
      <GlobalStyle />
      <Title />
      <Description />
      <Food />
      <Bar />
      <Hookah />
    </div>
  );
}

export default App;
