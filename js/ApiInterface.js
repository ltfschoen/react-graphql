import {get} from "jquery";
import ServerActions from "./actions/ServerActions";

let ApiInterface = {
  fetchLinks() {
    console.log("Mock API Interface requesting data from endpoint");
    // Ajax request to read /data/links
    get("/data/links").done(resp => {
      ServerActions.receiveLinks(resp);
    });
  }
};

export default ApiInterface;
