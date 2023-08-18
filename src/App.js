import DetailsPage from "./components/DetailsPage";
import ListPage from "./components/ListPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListPage/>}/>
        <Route exact path="/details" element={<DetailsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
