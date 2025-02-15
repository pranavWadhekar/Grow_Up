import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";
import Positions from "./pages/positions/Positions";
import Account from "./pages/account/Account";
import Signup from "./pages/authentication/signup/Signup";
import Signin from "./pages/authentication/signin/Signin";
import Tools from "./pages/tools/Tools";
import TradingChart from "./pages/tradingChart/TradingChart";
import Learn from "./learn/Learn"; // Update the import path
import Taxes from "./pages/taxes/Taxes";
import MyWatchlist from "./pages/mywatchlist/MyWatchlist";
import Calculator from "./pages/calculator/Calculator";

function App() {
  const handleButtonClick = () => {
    window.open('https://growup-stock-market.streamlit.app/', '_blank');
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/account" element={<Account />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/chart" element={<TradingChart />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/watchlist" element={<MyWatchlist />} />
            <Route path="/calculator" element={<Calculator/>}/>
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
      <button className="floating-button" onClick={handleButtonClick}>
        Click To Predict
      </button>
    </div>
  );
}

export default App;
