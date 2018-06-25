console.log("App running");

//APP SECTION HERE
const app = {
  title: "this is title",
  subtitle: "subtitle also",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

//nums map in jsx example
//const nums = [55, 101, 1000];
/* {nums.map(num => {
        return <p key={num}>Number: {num}</p>;
      })} */

function renderApp() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h1>{app.subtitle}</h1>}
      <p>{app.options.length > 0 ? "Options:" : "No options here"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        what should I do
      </button>
      <button onClick={removeOptions}>remove all</button>
      <ol>
        {app.options.map((option, i) => {
          return <li key={i}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
