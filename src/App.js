import Table from "./components/Table";
import "./App.css";
import GameStorage from "./Context";

const App = () => {
  return (
    <>
      <GameStorage>
        <Table />
      </GameStorage>
    </>
  );
};

export default App;
