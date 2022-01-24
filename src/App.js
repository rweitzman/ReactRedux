import "./App.css";
// import { useRoutes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />}/>
        <Route path="/product" element={<ProductListing />}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="*" element={<div>404!</div>}/>
      </Routes>
    </Router>
  )
  }
export default App;

