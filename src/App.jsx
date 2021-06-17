import React from "react";

const App = () => {
  const onClick = () => {
    alert("こんにちは");
  };
  return (
    <>
      <h1 style={{ color: "#ff0000" }}>こんにちは</h1>
      <p>元気ですか？</p>
      <button onClick={onClick}>ボタン</button>
    </>
  );
};

export default App;
