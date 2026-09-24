import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const onFormSubmit = (e) =>{
    e.preventDefault();
    console.log(name);

    setName('');
  }

  return (
    <>
      <form onSubmit={(e) => {onFormSubmit(e)}}>
        <input
          className="bg-amber-700 p-1 font-bold text-2xl m-1"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="bg-amber-300 p-1 text-2xl font-bold m-1">Submit</button>
      </form>
    </>
  );
};

export default App;
