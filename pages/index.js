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
            console.log("comment 1", userInput);
            console.log("comment 2", userInput);
          }}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Index;
