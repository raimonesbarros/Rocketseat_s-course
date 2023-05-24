import { Route, Routes } from "react-router-dom";
import { DefautLayout } from "./styles/layouts/Default";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
