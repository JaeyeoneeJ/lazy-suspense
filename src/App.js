import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./Routes/Home"));
const Test1 = lazy(() =>
  import(/* webpackChunkName: "test1" */ "./Routes/Test1")
);
const Test2 = lazy(() =>
  import(/* webpackChunkName: "test2" */ "./Routes/Test2")
);
const Test3 = lazy(() =>
  import(/* webpackChunkName: "test3" */ "./Routes/Test3")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
