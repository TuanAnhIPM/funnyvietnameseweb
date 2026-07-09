import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VietnameseCourse } from "./pages/VietnameseCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VietnameseCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
