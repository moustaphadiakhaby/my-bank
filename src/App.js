import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";
export { default as data } from "./data.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Accounts />
    </div>
  );
};

export default App;
