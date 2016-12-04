import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";

let _links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log("Store register received dispatched Action. Store emits event that State change");
          _links = action.links;
          this.emit("change");
          break;
        default:
          // do nothing
      }
    });
  }

  getAll() {
    return _links;
  }
}

export default new LinkStore();
