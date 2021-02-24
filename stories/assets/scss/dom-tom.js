import { useState } from "react";
import Top from "../../src/mobile/components/Top/Top";
import Select from "../../src/mobile/components/Select/Select";
import Button from "../../src/mobile/components/Button/Button";
import ShopDetails from "../../src/mobile/components/ShopDetails/ShopDetails";
import "./dom-tom.css";

function App() {
  const [selectedShop, setSelectedShop] = useState("");
  const [displayAdress, setDisplayAdress] = useState(false);
  const [shopToDisplay, setShopToDisplay] = useState();

  return (
    <div className="App">
      <div className='FormWrapper'>
        <Top />
        <Select
          setSelectedShop={setSelectedShop}
          setDisplayAdress={setDisplayAdress}
          setShopToDisplay={setShopToDisplay}
        />
        <ShopDetails
          selectedShop={selectedShop}
          displayAdress={displayAdress}
          shopToDisplay={shopToDisplay}
        />

        <Button
          displayAdress={displayAdress}
          setDisplayAdress={setDisplayAdress}
          selectedShop={selectedShop}
        />
      </div>
    </div>
  );
}

export default App;
