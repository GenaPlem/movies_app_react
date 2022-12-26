import './App.css';
import Invoices from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Invoices />
        <Footer/>
    </div>
  );
}

export default App;
