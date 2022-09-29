import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framwork",
  },
  {
    title: "Why is React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: " The Color Red",
    value: "red",
  },
  {
    label: " The Color Green",
    value: "green",
  },
  {
    label: " A Shade Of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items}></Accordion> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        ></Dropdown>
      ) : null} */}

      {/* <Translate></Translate> */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
    </div>
  );
};
