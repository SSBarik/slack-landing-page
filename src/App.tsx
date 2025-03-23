import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
