import React from "react";
import ReactDOM from "react-dom";

import MainComponent from "./components/MainComponent";

ReactDOM.render(<MainComponent
                  limit={3}
                />, document.getElementById('react'));
