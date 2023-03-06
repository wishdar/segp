import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/output")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log({ data });
      });
  }, []);

  return (
    <div>
      {typeof data.output === "undefined" ? (
        <p>Loading...</p>
      ) : (
        //data.output.map((output, i) => <p key={i}>{output}</p>)
        <p>{data.output}</p>
      )}
    </div>
  );
}

export default App;
