import React, { useState } from "react";
function App() {
  const [queryString, setQueryString] = useState({
    page: 1,
    limit: 10,
    search: ''
  });

  const myFunc = (item) => { //Truyền vào item 
    const copiedState = { ...queryString };
    copiedState.page = item;
    setQueryString(copiedState);
  }

  return (
    <>
      <p>Page: {queryString.page}</p>
      <p>Limit: {queryString.limit}</p>
      <p>Search: {queryString.search}</p>
      {[1, 2, 3].map(item => (
        <button key={item} onClick={() => myFunc(item)}>
          {item}
        </button>
      ))}
    </>
  );
}
export default App;
