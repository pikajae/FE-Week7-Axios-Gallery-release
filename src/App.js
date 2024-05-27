import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Comment from "./components/Comment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/detail/:cardId" element={<Detail />} />
            <Route path= "*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
