import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import LearnPage from "./pages/LearnPage";
import LearnMarketPage from "./pages/LearnMarketPage";
import GlossaryPage from "./pages/GlossaryPage";
import ResourcesPage from "./pages/ResourcesPage";
import PositionSizeCalculatorPage from "./pages/PositionSizeCalculatorPage";
import PipCalculatorPage from "./pages/PipCalculatorPage";
import MentorshipPage from "./pages/MentorshipPage";
import DashboardPage from "./pages/DashboardPage";
import StudentLayout from "./components/student/StudentLayout";
import MyLearningPage from "./pages/student/MyLearningPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route
  path="/learn/:marketId"
  element={<LearnMarketPage />}
/>

        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route
  path="/dashboard"
  element={
    <StudentLayout>
      <DashboardPage />
    </StudentLayout>
  }
/>
<Route
  path="/dashboard/learning"
  element={
    <StudentLayout>
      <MyLearningPage />
    </StudentLayout>
  }
/>
        <Route
  path="/resources/position-size-calculator"
  element={<PositionSizeCalculatorPage />}
/>
<Route
  path="/resources/pip-calculator"
  element={<PipCalculatorPage />}
/>
        <Route path="/courses/:courseId" element={<CoursePage />} />
        
        <Route
          path="/courses/:courseId/lessons/:lessonId"
          element={<LessonPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;