let count = 0;
const addOne = () => {
  count++;
  renderCounter();
};
const minusOne = () => {
  count--;
  renderCounter();
};
const reset = () => {
  count = 0;
  renderCounter();
};

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

//RENDER HERE:

const appRoot = document.getElementById("app");

const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
