import React from "react";

const Home = ({ count, updateCount }) => {
  return (
    <div>
      <div>Home</div>
      <p>count:{count}</p>
      <button onClick={() => updateCount(1)}>Increment Count</button>
    </div>
  );
};

export default Home;
