import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [currVal, setCurrVal] = useState<string>("");

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrVal(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setCurrVal("")
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [currVal])

  return (
    <div className="App">
      <div className="text-area">
        <textarea
          name="write-area"
          id="write-area"
          cols={100}
          rows={50}
          value={currVal}
          placeholder="Write something here..."
          onChange={onTextChange}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
