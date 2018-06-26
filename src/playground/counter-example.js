class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handlePlus() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounter();
// };
// const minusOne = () => {
//   count--;
//   renderCounter();
// };
// const reset = () => {
//   count = 0;
//   renderCounter();
// };

// //RENDER HERE:

// const appRoot = document.getElementById("app");

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounter();

//USER SECTION HERE:
// const user = {
//   // name: "fktrctq",
//   // age: 30,
//   // location: "ru"
// };

// function getLocation(user) {
//   if (user.location) {
//     return <p>Location: {user.location}</p>;
//   }
// }

// const userInfo = (
//   <div>
//     <h1>{user.name ? user.name : "anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user)}
//   </div>
// );
