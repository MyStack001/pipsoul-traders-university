import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;