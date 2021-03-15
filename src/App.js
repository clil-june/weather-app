
import './App.css';
import SearchBar from "./SearchBar";
import LocationButton from "./LocationButton"
import City from "./City";
import Temperature from "./Temperature";
import Description from "./Description";
import Time from "./Time"

function App() {
  return (
    <div className="App">
      <div className="project">
      <SearchBar />
      <LocationButton />
      <City />
      <Temperature />
      <Description />
      <Time />
      </div>
    </div>
  );
}

export default App;
