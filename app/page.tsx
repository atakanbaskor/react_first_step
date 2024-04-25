import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const allParagrafCss = {
    backgroundColor: "#f2f2f2",
    padding: "2rem",
  };
  return (
    <React.Fragment>
      <div>
        <p className="text-center mt-3" style={allParagrafCss}>
          Hello World!!!
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}
