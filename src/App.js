import CarbonZero from "./components/CarbonZero";
import "./App.css";
import { useState } from "react";

function App() {
  const [purchasedItems, setPurchasedItems] = useState({
    name: "iPhone",
    price: 500000,
  });

  return (
    <div className="App">
      <div>
        <h1>Pay With Carbon.</h1>
        <CarbonZero
          totalPrice={100.0}
          purchaseRefId={`MyId`}
          purchasedItems={JSON.stringify(purchasedItems)}
        />
      </div>
    </div>
  );
}

export default App;
