import "./App.css";
// IMPORT ROUTES LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORT LAYOUT
import Defaultlayout from "./layouts/DefaultLayout";
// IMPORT PAGES
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Postlist from "./pages/Postlist";
import Postcreate from "./pages/PostCreate";
import Singlepost from "./pages/Singlepost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Defaultlayout}>
          <Route index Component={Homepage} />
          <Route path="/aboutus" Component={Aboutus} />
          <Route path="/postlist">
            <Route index Component={Postlist} />
            <Route path=":id" Component={Singlepost} />
            <Route path="postform" Component={Postcreate} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
