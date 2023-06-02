import Greeting from "./components/Greeting";
import Async from "./components/Async";
import "./App.css";
import Counter from "./components/Couter";
import Math from "./components/MathOperation";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div className="App">
      <Async />
      <Greeting />
      <Counter />
      <Math />
      <TextInput/>
    </div>
  );
}

export default App;
