import { useState } from "react";
const App = () =>  {
  // const searchWord = () => {
    const {data, loading, error} = useRequest('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  }
  return (
    <>
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    </>
  );


export default App;
