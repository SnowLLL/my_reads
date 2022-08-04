import "./App.css";
import SearchPage from './SearchPage'
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/search" element={<SearchPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
