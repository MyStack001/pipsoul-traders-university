import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

     <main className="pt-20">
  <Hero />
</main>
    </div>
  );
}

export default App;