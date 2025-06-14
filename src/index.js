//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const now = new Date();
const currentTime = now.getHours();

let greetings;
const customStyle = {
  color: "",
};

if (currentTime < 12) {
  customStyle.color = "red";
  greetings = "Good Morning";
} else if (currentTime < 18) {
  customStyle.color = "green";
  greetings = "Good Afternoon";
} else {
  customStyle.color = "blue";
  greetings = "Good Night";
}

root.render(
  <h1 className="heading" style={customStyle}>
    {greetings}
  </h1>
);
