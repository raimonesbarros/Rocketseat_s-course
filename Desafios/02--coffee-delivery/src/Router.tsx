import { Route, Routes } from "react-router-dom";
import { DefautLayout } from "./styles/layouts/Default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}></Route>
    </Routes>
  );
}
