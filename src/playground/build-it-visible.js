//my variant:

const app = {
  title: "Visibility Toggle",
  details: "some details"
};

// const details = <p>{app.details}</p>; useless imo

let detailsStatus = false;

const toggleDetails = () => {
  //detailsStatus ? (detailsStatus = false) : (detailsStatus = true); simplify this
  detailsStatus = !detailsStatus;
  renderApp();
};

//const appRoot = document.getElementById("app"); useless imo

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>
        {detailsStatus ? "hide details" : "show details"}
      </button>
      {/* {detailsStatus ? <p>{app.details}</p> : undefined} use && operator if need only show or hide */}
      {detailsStatus && <p>{app.details}</p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

renderApp();

// //solution:
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "hide details" : "show details"}
//       </button>
//       {visibility && <p>details</p>}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
