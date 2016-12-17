import React from "react";
import ApiInterface from "../ApiInterface";
import LinkStore from "../stores/LinkStore";

let _getAppState = () => {
  return { links: LinkStore.getAll() };
};

class MainComponent extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number
  };
  static defaultProps = {
    limit: 3
  };
  state = _getAppState();
  constructor(props) {
    super(props);
    console.log("View setting initial state");
  }
  componentDidMount() {
    ApiInterface.fetchLinks();
    LinkStore.on("change", this.onChange)
  }
  componentWillUnmount() {
    LinkStore.removeListener("change", this.onChange);
  }
  onChange = () => {
    console.log("View change state event occurred");
    this.setState(_getAppState());
  };
  render() {
    console.log(`View rendering ${JSON.stringify(this.state.links)}`);
    console.log('blah1', this.state.links);
    console.log('blah2', this.sortObject(this.state.links));
    let content = this.state.links.slice(0, this.props.limit).map(link => {
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
export default MainComponent;
