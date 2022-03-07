import { useState } from "react";

const Index = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h3>next js todo list</h3>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setUserInput(e.target.value);
            console.log(userInput);
          }}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Index;
