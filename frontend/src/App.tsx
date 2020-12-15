import React, { useState, useEffect } from 'react';

import Feature from "./feature/Feature";

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("/project");
      const result = await response.json();

      setResult(result[0].title);
    })();
  }, []);

  return (
    <Feature text={result} />
  );
}

export default App;
