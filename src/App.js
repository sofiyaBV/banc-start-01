import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ExchangeRate from "./pages/ExchangeRate";
import Customers from "./pages/Customers";
import Product from "./pages/Product";
import { AppProvider } from "./utils/Context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="exchange-rate" element={<ExchangeRate />} />
            <Route path="product-rate" element={<Product />} />
            <Route path="customer-rate" element={<Customers />} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
