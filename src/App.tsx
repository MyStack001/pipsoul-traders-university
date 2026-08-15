import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Roadmap from "./components/Roadmap";
import Mentorship from "./components/Mentorship";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

     <main className="pt-20">
  <Hero />
  <Courses />
  <Roadmap />
  <Mentorship />
</main>
<Footer />
    </div>
  );
}

export default App;