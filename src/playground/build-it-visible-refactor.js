class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDetails = this.toggleDetails.bind(this);

    this.state = {
      title: "Visibility toggle",
      details: "some details",
      visibility: false
    };
  }

  toggleDetails() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.toggleDetails}>
          {this.state.visibility ? "hide details" : "show details"}
        </button>
        {this.state.visibility && <p>{this.state.details}</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
