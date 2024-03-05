import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/test1")}>TEST 1</button>
      <button onClick={() => navigate("/test2")}>TEST 2</button>
      <button onClick={() => navigate("/test3")}>TEST 3</button>
    </div>
  );
};

export default Home;
