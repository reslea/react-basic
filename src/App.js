import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://rembo-test.herokuapp.com/api/hello/message")
      .then(async (r) => setData(await r.json()))
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>{data?.message}</h1>
    </div>
  );
}

export default App;
