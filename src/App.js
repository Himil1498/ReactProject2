import ClassBaseComponent from "./Components/ClassBaseComponent";
import FunctionBaseComponent from "./Components/FunctionBaseComponent";
import Onchange from "./Components/Onchange";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <ClassBaseComponent />
      <FunctionBaseComponent />
      <Counter />
      <Onchange />
    </div>
  );
}

export default App;
