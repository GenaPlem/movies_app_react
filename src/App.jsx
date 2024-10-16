import "./App.css";
import Invoices from "./pages/component.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Invoices />
      </main>
      <Footer />
    </>
  );
}

export default App;
