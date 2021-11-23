import './App.css';

function App() {
  const title = "Welcome!";
  const likes = 50;
  // const person = {name:"Surafel", age: "23"}

  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p>Liked {likes} times.</p>
        {/* <p>{person.name}</p> */}
      </div>
    </div>
  );
}

export default App;
