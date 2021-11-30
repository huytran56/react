import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Output from "./component/ShowOutput";
import ApiKey from "./component/ApiKey";

function App() {
  const [output, setOutput] = useState<number>(0);

  useEffect(() => {
    console.log("GOOD LUCK");
  }, [output]);

  const hanlerMinus = () => {
    setOutput(output - 1);
  };
  const hanlerPlus = () => {
    setOutput(output + 1);
  };
  return (
    <>
      <Button label="-" onClick={hanlerMinus} colorChange="red" />
      <Output output={output.toString()} />
      <Button label="+" onClick={hanlerPlus} colorChange="green" />
      <ApiKey />
    </>
  );
}

export default App;

//trong block return se viet bang jsx
