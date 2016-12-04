import React from "react";
import ApiInterface from "../ApiInterface";
import LinkStore from "../stores/LinkStore";

let _getAppState = () => {
  return { links: LinkStore.getAll() };
};

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("View setting initial state");
    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    ApiInterface.fetchLinks();
    LinkStore.on("change", this.onChange)
  }
  componentWillUnmount() {
    LinkStore.removeListener("change", this.onChange);
  }
  onChange() {
    console.log("View change state event occurred");
    this.setState(_getAppState());
  }
  render() {
    console.log(`View rendering ${JSON.stringify(this.state.links)}`);
    let content = this.state.links.map(link => {
      return <li key={link.id}>
               {link.id}
             </li>;
    });
    return (
      <div>
        <h3>Links</h3>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}
