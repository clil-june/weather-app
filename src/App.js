
import './App.css';
import Content from "./Content"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="project">
      <Content defaultCity="Tel Aviv" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
