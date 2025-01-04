import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./App.css";
//parent
function App() {
  const data = [
    "example",
    "example",
    "example",
    "example",
    "example",
    "example",
    "example",
  ];
  return (
    <div className="app">
      <Navbar />
      <Hero data={data} />
      <Footer />
    </div>
  );
}

export default App;
