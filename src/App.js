import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://rembo-test.herokuapp.com/api/hello/message")
      .then(r => setData(r.json()))
  }, []);

  return (
    <div className="App">
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;
