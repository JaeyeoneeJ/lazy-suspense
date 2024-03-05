import React from "react";
import { useNavigate } from "react-router-dom";

const Test2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Test 2</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Test2;
