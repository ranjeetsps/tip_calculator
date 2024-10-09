import Bill from "./bill";
import Satisfaction from "./satisfaction";
import Output from "./output";
import { useState } from "react";
function App() {
  const [bill, setBill] = useState(0);
  const [satisfaction, SetSatisfaction] = useState([0, 0]);

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <Satisfaction
        satisfaction={satisfaction}
        SetSatisfaction={SetSatisfaction}
        index={0}
      >
        <p> How did you like the service? </p>
      </Satisfaction>
      <Satisfaction
        satisfaction={satisfaction}
        SetSatisfaction={SetSatisfaction}
        index={1}
      >
        <p> How did your friend like the service? </p>
      </Satisfaction>
      <Output bill={bill} satisfaction={satisfaction} />
    </>
  );
}
export default App;
