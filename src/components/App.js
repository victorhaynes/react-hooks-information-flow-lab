import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        onDarkModeClick = {handleDarkModeClick}
        isDarkMode = {isDarkMode}
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
