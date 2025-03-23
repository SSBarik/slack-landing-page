import "./App.css";
import Banner from "./components/Banner";
import CookieConsent from "./components/CookieConsent";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Banner />
      <main>
        <Home />
      </main>
      <CookieConsent />
    </div>
  );
}

export default App;
