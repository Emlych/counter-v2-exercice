import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

function App() {
  const [counters, setcounters] = useState([0]);

  const addCounter = () => {
    setcounters([...counters, 0]);
  };
  return (
    <div className="app">
      <button className="violet" onClick={addCounter}>
        Add counter
      </button>

      <div className="counters">
        {counters.map((value, index) => {
          return (
            index < 3 && (
              <Counter
                value={value}
                increment={() => {
                  const newcounter = [...counters];
                  newcounter[index] += 1;
                  setcounters(newcounter);
                }}
                decrement={() => {
                  const newcounter = [...counters];
                  newcounter[index] -= 1;
                  setcounters(newcounter);
                }}
                reset={() => {
                  const newcounter = [...counters];
                  newcounter[index] = 0;
                  setcounters(newcounter);
                }}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
