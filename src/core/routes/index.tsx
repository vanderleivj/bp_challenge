import { Routes, Route, BrowserRouter } from "react-router-dom";


import { Home } from "../../features/home/home";
import { SinglePageContent } from "../../features/singlePageContent/singlePageContent";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/conteudo/:id' element={<SinglePageContent />} />
      </Routes>
    </BrowserRouter>
  );
}