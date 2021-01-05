import "./css/App.css";
import ScoreCard from "./components/ScoreCard";
import Bag from "./components/Bag";
import Distribution from "./components/Distribution";
import Title from "./components/Title";
import Board from "./components/Board";
import Rack from "./components/Rack";

function App() {
  return (
    <div className="app-container">
      <section id="left-column">
        <ScoreCard />
        <Bag />
        <Distribution />
      </section>
      <section id="middle-column">
        <Title />
        <Board />
      </section>
      <section id="right-column">
        <Rack name="David Foster Wallace" player="1" />
        <Rack name="Charles Dickens" player="2" />
      </section>
    </div>
  );
}

export default App;
