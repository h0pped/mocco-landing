import GlobalStyle from "./components/GlobalStyle";
import Title from "./components/Title";
import Description from "./components/Description";
import Food from "./components/Food";

function App() {
  return (
    <div className="App" id="luxy">
      <GlobalStyle />
      <Title />
      <Description />
      <Food />
    </div>
  );
}

export default App;
