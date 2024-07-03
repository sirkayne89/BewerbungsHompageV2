import { Routes, Route, Navigate } from "react-router-dom";

import Bewerbung from "../pages/bewerbung";
import Kontakt from "../pages/kontakt";
import Projekte from "../pages/projekte";
import Four0four from "../pages/404";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/startseite" />} />
      <Route exact path="/startseite" element={<Bewerbung />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/projekte" element={<Projekte />} />
      <Route path="/*" element={<Four0four />} />
    </Routes>
  );
};

export default Routers;
