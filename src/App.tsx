import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

     <main className="pt-20">
  <Hero />
  <Courses />
  <Roadmap />
</main>
    </div>
  );
}

export default App;