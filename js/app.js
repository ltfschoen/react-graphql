import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";

import MainComponent from "./components/MainComponent";

ReactDOM.render(<MainComponent
                  limit={3}
                />, document.getElementById('react'));
console.log("Relay Query aware of types for all its fields");
console.log(
  Relay.QL`
      query Test {
          dataArrayOfLinkObjects {
              _id
          }
      }
  `
);