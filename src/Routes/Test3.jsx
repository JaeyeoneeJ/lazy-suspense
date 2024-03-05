import React from "react";
import { useNavigate } from "react-router-dom";

const Test3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Test 3</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Test3;
