import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
export default function Fields({ index, todo, setTodo }) {
  const removeItems = (index) => {
    let arr = todo;
    arr.splice(index, 1);
    setTodo([...arr]);
  };
  return (
    <div className="outputSection">
      <h1>
        {todo}{" "}
        <Button
          variant="contained"
          color="error"
          onClick={() => removeItems(index)}
        >
          <RemoveIcon />
        </Button>{" "}
      </h1>
    </div>
  );
}

