import "./App.css";
// IMPORT ROUTES LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORT LAYOUT
import Defaultlayout from "./layouts/DefaultLayout";
// IMPORT PAGES
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Postlist from "./pages/Postlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Defaultlayout}>
          <Route path="/" Component={Homepage} />
          <Route path="/postlist" Component={Postlist} />
          <Route path="/aboutus" Component={Aboutus} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
