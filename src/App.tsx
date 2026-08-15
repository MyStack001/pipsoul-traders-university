import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

     <main className="pt-20">
  <Hero />
  <Courses />
</main>
    </div>
  );
}

export default App;