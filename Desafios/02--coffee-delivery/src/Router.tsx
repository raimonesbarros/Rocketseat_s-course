import { Route, Routes } from "react-router-dom";
import { DefautLayout } from "./styles/layouts/Default";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
