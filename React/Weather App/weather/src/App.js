import './App.css';
import Header from './components/Header';
import Weather from "./components/weather";
import { CityContextProvider } from './contexts/CityContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <CityContextProvider>
      <Weather/>
      </CityContextProvider>
    </div>
  );
}

export default App;
